/**
 * Anthropic pricing — portable module, drop-in for any portfolio SaaS.
 * No aiplb / aiplb substitution needed — fully generic.
 * Update prices here when Anthropic changes them.
 *
 * Source: anthropic.com/pricing (verified 2026-05-01).
 * Rates are USD per 1M tokens. We store as micros-per-token to avoid
 * floating-point drift when summing per-snapshot costs.
 */

export type ModelId = "claude-sonnet-4-6" | "claude-haiku-4-5-20251001" | "claude-opus-4-7";

type ModelRates = {
  /** USD per 1M input tokens (cache miss) */
  input: number;
  /** USD per 1M output tokens */
  output: number;
  /** USD per 1M cache-read tokens (90% off input) */
  cache_read: number;
  /** USD per 1M cache-write tokens (1.25x input) */
  cache_write: number;
};

export const MODEL_RATES: Record<ModelId, ModelRates> = {
  "claude-sonnet-4-6": { input: 3.0, output: 15.0, cache_read: 0.3, cache_write: 3.75 },
  "claude-haiku-4-5-20251001": { input: 1.0, output: 5.0, cache_read: 0.1, cache_write: 1.25 },
  "claude-opus-4-7": { input: 15.0, output: 75.0, cache_read: 1.5, cache_write: 18.75 },
};

export type ClaudeUsage = {
  input_tokens: number;
  output_tokens: number;
  cache_creation_input_tokens?: number;
  cache_read_input_tokens?: number;
};

export type CallCost = {
  model: ModelId;
  tokens_input: number;
  tokens_output: number;
  tokens_cache_read: number;
  tokens_cache_write: number;
  /** USD * 1_000_000 — int, safe to sum */
  cost_micros: number;
};

export function computeCost(model: ModelId, usage: ClaudeUsage): CallCost {
  const rates = MODEL_RATES[model];
  if (!rates) {
    return {
      model,
      tokens_input: usage.input_tokens ?? 0,
      tokens_output: usage.output_tokens ?? 0,
      tokens_cache_read: usage.cache_read_input_tokens ?? 0,
      tokens_cache_write: usage.cache_creation_input_tokens ?? 0,
      cost_micros: 0,
    };
  }
  const input = usage.input_tokens ?? 0;
  const output = usage.output_tokens ?? 0;
  const cacheRead = usage.cache_read_input_tokens ?? 0;
  const cacheWrite = usage.cache_creation_input_tokens ?? 0;

  // dollars per token = rate / 1_000_000; * tokens; * 1_000_000 (micros) → rate * tokens
  const cost_micros =
    Math.round(input * rates.input) +
    Math.round(output * rates.output) +
    Math.round(cacheRead * rates.cache_read) +
    Math.round(cacheWrite * rates.cache_write);

  return {
    model,
    tokens_input: input,
    tokens_output: output,
    tokens_cache_read: cacheRead,
    tokens_cache_write: cacheWrite,
    cost_micros,
  };
}

export function microsToEur(micros: number, usdToEur = 0.95): number {
  return (micros / 1_000_000) * usdToEur;
}

export function sumCosts(costs: CallCost[]): CallCost {
  return costs.reduce<CallCost>(
    (acc, c) => ({
      model: c.model,
      tokens_input: acc.tokens_input + c.tokens_input,
      tokens_output: acc.tokens_output + c.tokens_output,
      tokens_cache_read: acc.tokens_cache_read + c.tokens_cache_read,
      tokens_cache_write: acc.tokens_cache_write + c.tokens_cache_write,
      cost_micros: acc.cost_micros + c.cost_micros,
    }),
    {
      model: costs[0]?.model ?? "claude-sonnet-4-6",
      tokens_input: 0,
      tokens_output: 0,
      tokens_cache_read: 0,
      tokens_cache_write: 0,
      cost_micros: 0,
    },
  );
}

#!/usr/bin/env node
// Copies our pre-push hook to .git/hooks/pre-push so import-check + build run
// before every push. Idempotent — safe to run on each `npm install`.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const gitDir = path.join(root, '.git');
if (!fs.existsSync(gitDir)) { console.log('install-hooks: not a git repo, skipping'); process.exit(0); }

const hookPath = path.join(gitDir, 'hooks', 'pre-push');
const body = `#!/bin/sh
# Auto-installed by scripts/install-hooks.js — durable Vercel deploy guard.
# Layer 1: import-check (fast, ~1s)  Layer 2: next build (slow, ~30-60s).
# Bypass with: git push --no-verify  (NOT recommended — CI will still fail).
set -e
cd "$(git rev-parse --show-toplevel)"

if [ -f scripts/check-imports.js ]; then
  echo "▶ pre-push: layer 1 — import-check..."
  node scripts/check-imports.js
fi

if grep -q '"build"' package.json 2>/dev/null && [ -z "$SKIP_BUILD_CHECK" ]; then
  echo "▶ pre-push: layer 2 — npm run build (set SKIP_BUILD_CHECK=1 to skip)..."
  npm run build --silent || { echo "❌ pre-push: build failed — fix before pushing"; exit 1; }
fi

echo "✅ pre-push: all layers passed"
`;

fs.writeFileSync(hookPath, body, { mode: 0o755 });
console.log('install-hooks: installed', hookPath);

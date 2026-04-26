-- AICI MVP schema (initial)
-- Schema: aici. Tables: clients, competitors, snapshots, diffs, digests.

create schema if not exists aici;

-- Required for gen_random_uuid()
create extension if not exists "pgcrypto";

-- ------------------------------------------------------------------
-- clients
-- ------------------------------------------------------------------
create table if not exists aici.clients (
  id              uuid primary key default gen_random_uuid(),
  email           text unique not null,
  plan            text not null default 'trial',
  status          text not null default 'active',
  stripe_customer_id      text,
  stripe_subscription_id  text,
  slack_webhook_url       text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists clients_email_idx on aici.clients(lower(email));

-- ------------------------------------------------------------------
-- competitors
-- ------------------------------------------------------------------
create table if not exists aici.competitors (
  id                uuid primary key default gen_random_uuid(),
  client_id         uuid not null references aici.clients(id) on delete cascade,
  name              text not null,
  url               text not null,
  enabled           boolean not null default true,
  last_snapshot_at  timestamptz,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists competitors_client_idx on aici.competitors(client_id);
create index if not exists competitors_enabled_idx on aici.competitors(enabled) where enabled = true;

-- ------------------------------------------------------------------
-- snapshots
-- ------------------------------------------------------------------
create table if not exists aici.snapshots (
  id              uuid primary key default gen_random_uuid(),
  competitor_id   uuid not null references aici.competitors(id) on delete cascade,
  captured_at     timestamptz not null default now(),
  hash            text not null,
  bytes           integer not null default 0,
  status          text,
  text            text,
  created_at      timestamptz not null default now()
);

create index if not exists snapshots_competitor_idx on aici.snapshots(competitor_id, captured_at desc);
create index if not exists snapshots_hash_idx on aici.snapshots(competitor_id, hash);

-- ------------------------------------------------------------------
-- diffs
-- ------------------------------------------------------------------
create table if not exists aici.diffs (
  id                uuid primary key default gen_random_uuid(),
  competitor_id     uuid not null references aici.competitors(id) on delete cascade,
  from_snapshot_id  uuid references aici.snapshots(id) on delete set null,
  to_snapshot_id    uuid references aici.snapshots(id) on delete set null,
  added_chars       integer not null default 0,
  removed_chars     integer not null default 0,
  summary           text,
  created_at        timestamptz not null default now()
);

create index if not exists diffs_competitor_idx on aici.diffs(competitor_id, created_at desc);

-- ------------------------------------------------------------------
-- digests
-- ------------------------------------------------------------------
create table if not exists aici.digests (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid not null references aici.clients(id) on delete cascade,
  window_start    timestamptz not null,
  window_end      timestamptz not null,
  diff_count      integer not null default 0,
  summary         text,
  html            text,
  sent_at         timestamptz default now(),
  created_at      timestamptz not null default now()
);

create index if not exists digests_client_idx on aici.digests(client_id, sent_at desc);

-- ------------------------------------------------------------------
-- updated_at trigger
-- ------------------------------------------------------------------
create or replace function aici.touch_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists clients_touch on aici.clients;
create trigger clients_touch before update on aici.clients
  for each row execute function aici.touch_updated_at();

drop trigger if exists competitors_touch on aici.competitors;
create trigger competitors_touch before update on aici.competitors
  for each row execute function aici.touch_updated_at();

-- ------------------------------------------------------------------
-- grants (service-role only — RLS not used; access via SUPABASE_SERVICE_ROLE_KEY)
-- ------------------------------------------------------------------
grant usage on schema aici to anon, authenticated, service_role;
grant all on all tables in schema aici to service_role;
grant all on all sequences in schema aici to service_role;
grant all on all functions in schema aici to service_role;

alter default privileges in schema aici
  grant all on tables to service_role;
alter default privileges in schema aici
  grant all on sequences to service_role;
alter default privileges in schema aici
  grant all on functions to service_role;

-- Admin module: app_admins table + bootstrap row.
-- Each portfolio SaaS uses its own schema; the schema is determined by
-- the deploy script (sed aiplb -> aici/aiplb/.../cfapi).
-- Idempotent: creates schema + clients (auth) + app_admins if missing.
-- 6 of 7 schemas had never run their init migration; this self-bootstraps.

create extension if not exists "pgcrypto";
create schema if not exists aiplb;

create table if not exists aiplb.clients (
  id                       uuid primary key default gen_random_uuid(),
  email                    text unique not null,
  plan                     text not null default 'trial',
  status                   text not null default 'active',
  stripe_customer_id       text,
  stripe_subscription_id   text,
  slack_webhook_url        text,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

create index if not exists aiplb_clients_email_idx on aiplb.clients(lower(email));

create table if not exists aiplb.app_admins (
  email       text primary key,
  is_active   boolean not null default true,
  granted_by  text,
  granted_at  timestamptz not null default now()
);

create index if not exists app_admins_active_idx
  on aiplb.app_admins(email) where is_active is true;

-- Bootstrap: founder is always admin on every site.
insert into aiplb.app_admins(email, granted_by)
values (lower('mehdi.sakalypr@gmail.com'), 'bootstrap')
on conflict (email) do update set is_active = true;

grant usage on schema aiplb to anon, authenticated, service_role;
grant all on aiplb.app_admins to service_role;
grant all on aiplb.clients to service_role;
grant select on aiplb.app_admins to authenticated;

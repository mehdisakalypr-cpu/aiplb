-- AICI SaaS template additions: contact_messages + chat_messages
-- Schema: aici

create table if not exists aici.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  reason      text not null,
  message     text not null,
  ip_hash     text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists contact_messages_created_idx
  on aici.contact_messages(created_at desc);

create table if not exists aici.chat_messages (
  id          uuid primary key default gen_random_uuid(),
  session_id  text not null,
  role        text not null check (role in ('user','assistant')),
  content     text not null,
  metadata    jsonb default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

create index if not exists chat_messages_session_idx
  on aici.chat_messages(session_id, created_at);

-- Grants
grant usage on schema aici to anon, authenticated, service_role;
grant all on aici.contact_messages, aici.chat_messages to service_role;
grant insert on aici.contact_messages to anon, authenticated;
grant insert on aici.chat_messages to anon, authenticated;
grant select on aici.chat_messages to authenticated;

-- Add password-based auth columns to aiplb.clients.
-- Magic link (custom HMAC, lib/auth.ts) becomes a forgot-password recovery
-- mechanism only — the user lands logged-in and is invited to update the
-- password from /mon-compte.

alter table aiplb.clients
  add column if not exists password_hash text,
  add column if not exists password_set_at timestamptz;

create index if not exists aiplb_clients_password_idx
  on aiplb.clients(email)
  where password_hash is not null;

-- Admin module: app_admins table + bootstrap row.
-- Each portfolio SaaS uses its own schema; the schema is determined by
-- the deploy script (sed aiplb -> aici/aiplb/.../cfapi).

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
grant select on aiplb.app_admins to authenticated;

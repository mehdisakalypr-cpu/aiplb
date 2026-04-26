-- Pending reports queue + retry mechanism.
-- When a paying user requests a report and the snapshot/diff fails, we
-- enqueue a row instead of failing visibly. A cron sweeps unfilled rows,
-- retries the snapshot, and emails the user when their report is ready.

create table if not exists aiplb.pending_reports (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid not null references aiplb.clients(id) on delete cascade,
  competitor_id   uuid references aiplb.competitors(id) on delete cascade,
  requested_at    timestamptz not null default now(),
  attempts        int not null default 0,
  last_attempt_at timestamptz,
  last_error      text,
  served_at       timestamptz,
  email_sent_at   timestamptz
);

create index if not exists pending_reports_unfilled_idx
  on aiplb.pending_reports(requested_at)
  where served_at is null;

grant all on aiplb.pending_reports to service_role;
grant select on aiplb.pending_reports to authenticated;

-- Murray's Auto Body — Supabase schema
-- Run this in the Supabase SQL editor.

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  message text not null,
  vehicle text,
  service_type text,
  photo_urls text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- Idempotent column adds for existing installs
alter table public.inquiries add column if not exists vehicle text;
alter table public.inquiries add column if not exists service_type text;
alter table public.inquiries add column if not exists photo_urls text[] not null default '{}';

alter table public.inquiries enable row level security;

-- Allow inserts only via the server (service role bypasses RLS automatically).
-- If you prefer to use the anon key from the client/server route, uncomment:
-- create policy "Allow anon inserts" on public.inquiries
--   for insert to anon
--   with check (true);

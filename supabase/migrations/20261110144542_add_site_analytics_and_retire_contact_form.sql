/*
# Add anonymous site analytics and retire the contact form inserts

1. New Tables
- `site_events`
  - `id` (uuid, primary key, generated automatically)
  - `event_type` (text, either 'visit' for a page visit or 'cv_download' for a CV download)
  - `created_at` (timestamptz, set automatically)
  - Stores no personal information such as names, emails or IP addresses.

2. New Functions
- `get_site_stats()` returns only two totals as JSON: the number of visits and the number of CV downloads. It runs with the owner's rights so visitors can read these totals without being able to read individual event rows.

3. Security
- Row level security is enabled on `site_events`.
- Visitors (anon) and signed-in users may only INSERT events of the two allowed types. They cannot read, change or delete rows.
- `get_site_stats()` is callable by anon and authenticated only. It is not callable by PUBLIC.

4. Modified Tables
- `contact_messages`: the public INSERT policy and the INSERT privilege are removed, so the website can no longer submit new messages. All existing messages are kept untouched and can still be viewed in the database dashboard.

5. Important notes
- No existing data is deleted or altered.
- CHECK constraints on `event_type` ensure only the two known event types can be stored.
*/

CREATE TABLE IF NOT EXISTS site_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL CHECK (event_type IN ('visit', 'cv_download')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS site_events_event_type_idx ON site_events (event_type);

ALTER TABLE site_events ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON site_events TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_site_events" ON site_events;
CREATE POLICY "public_insert_site_events" ON site_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (event_type IN ('visit', 'cv_download'));

CREATE OR REPLACE FUNCTION get_site_stats()
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT json_build_object(
    'visits', (SELECT count(*) FROM site_events WHERE event_type = 'visit'),
    'cv_downloads', (SELECT count(*) FROM site_events WHERE event_type = 'cv_download')
  );
$$;

REVOKE EXECUTE ON FUNCTION get_site_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION get_site_stats() TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_messages" ON contact_messages;
REVOKE INSERT ON contact_messages FROM anon, authenticated;

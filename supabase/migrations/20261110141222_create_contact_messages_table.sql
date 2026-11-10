/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, generated automatically)
  - `name` (text, required, 1 to 100 characters)
  - `email` (text, required, 3 to 254 characters, must contain an @)
  - `message` (text, required, 1 to 2000 characters)
  - `created_at` (timestamptz, set automatically to the time of submission)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anon) and signed-in users may only INSERT rows. This is intentional: the portfolio contact form is public.
- No SELECT, UPDATE or DELETE access is granted, so submitted messages cannot be read or changed from the browser. They are read by the site owner in the Supabase dashboard.

3. Important notes
- Length and format limits are enforced by CHECK constraints so that oversized or empty submissions are rejected by the database itself.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email LIKE '%@%'),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_messages" ON contact_messages;
CREATE POLICY "public_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

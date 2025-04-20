/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `nombre` (text, required)
      - `email` (text, required)
      - `telefono` (text, required)
      - `tipo_generador` (text)
      - `mensaje` (text, required)
      - `created_at` (timestamp with timezone, default: now())
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for authenticated users to read all data
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text NOT NULL,
  tipo_generador text,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert contacts"
  ON contacts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public users to insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

  CREATE POLICY "Allow anonymous inserts"
ON "public"."contacts"
FOR INSERT
USING (true)
WITH CHECK (true);
DROP POLICY "Anyone can submit a contact request" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a validated contact request"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(phone)) BETWEEN 4 AND 30
  AND (email IS NULL OR (length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
  AND length(btrim(location)) BETWEEN 1 AND 120
  AND length(btrim(message)) BETWEEN 1 AND 2000
  AND cardinality(services) <= 20
);
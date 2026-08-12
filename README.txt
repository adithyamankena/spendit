SPENDIT CLOUD SYNC VERSION

Replace these files in the ROOT of the GitHub Pages repository:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

This version:
- Uses Supabase email/password authentication.
- Uses the Supabase publishable key in the browser.
- Stores transactions in public.transactions with user_id.
- Uses the existing RLS policies for SELECT/INSERT/UPDATE/DELETE.
- Syncs transactions across laptop/phone when signed into the same account.

Important:
- Never publish a Supabase secret/service-role key.
- The publishable key is intended for frontend use with RLS.
- After deployment, uninstall the old SpendIt PWA and reinstall it so the new service worker is used.

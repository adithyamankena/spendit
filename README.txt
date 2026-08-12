SPENDIT V7 — ONLY REQUESTED CHANGES

1. Left navigation now shows only:
   Dashboard
   Transactions
   Income
   Documents
   Settings

   Removed from the left navigation:
   Goals, Rules, Budgets, Recurring, Subscriptions

2. Transaction Edit and Delete buttons are removed from transaction displays.
   The existing database security is unchanged.

3. Cloud syncing is made persistent:
   - Refreshes transaction data and dashboard totals every 10 seconds while open.
   - Refreshes when the app/tab becomes active.
   - Refreshes the logged-in user metadata so dashboard totals sync across devices.
   - Keeps the existing Supabase RLS/authentication setup.
   - Service worker now always prefers the live GitHub Pages version, avoiding stale cached app code.

NO OTHER DATABASE TABLES OR SETTINGS ARE REQUIRED.

Upload/replace these 5 files in the GitHub repository ROOT:
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png

Then:
1. Commit the changes.
2. Wait 2–5 minutes for GitHub Pages.
3. Laptop: Ctrl+Shift+R.
4. Android: completely close SpendIt and reopen it. If it still shows the old UI, uninstall/reinstall the PWA once.
5. Do not change Supabase RLS policies.

Note: cross-device sync refreshes automatically within about 10 seconds while the app is open, and immediately when the app/tab comes back into focus.

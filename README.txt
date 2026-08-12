SPENDIT SYNC V6

Changes:
- Dashboard TOTAL INCOME and TOTAL SPENDING are now cloud-synced cumulative dashboard totals, independent of the transaction list.
- Adding an income/expense increases the corresponding dashboard total.
- Deleting or editing a transaction does NOT reduce the dashboard totals.
- Settings now includes a Dashboard totals editor so you can correct/reset those totals manually.
- Existing mobile modal layering fix retained.
- Service worker cache bumped to v6.

Upload/replace in the GitHub repository root:
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png

Before starting real use, clear the old test transactions from Supabase SQL Editor:
DELETE FROM public.transactions;

Because this is a single-user SpendIt project, the statement clears the current test transaction rows. It does not delete your Supabase Auth user.
After clearing, upload/commit the files, wait for GitHub Pages, then hard refresh the laptop and reopen/reinstall the Android PWA only if it still shows an older version.

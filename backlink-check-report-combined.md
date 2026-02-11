# Backlink Check Report: Complete Category Restructure

**Date:** 2026-01-28  
**Branch:** `test-domain-transfers-combine`  
**Base Branch:** `main`  
**Script:** `bin/check_backlinks.rb`

## Executive Summary

This report analyzes potential backlink issues for a complete category restructure that:
1. **Combines** the "Domain Transfers" category into "Domains"
2. **Renames** the "Domains" category to "Domains and Transfers"

The analysis detected **70 high-severity issues** requiring redirects to prevent broken links.

## Complete Changes Made

### Category Structure Changes

1. **Deleted Category:**
   - **Category Name:** "Domain Transfers"
   - **Category URL:** `/categories/domain-transfers/`
   - **YAML File:** `categories/domain_transfers.yaml` (deleted)

2. **Renamed Category:**
   - **Old Category Name:** "Domains"
   - **New Category Name:** "Domains and Transfers"
   - **Old Category URL:** `/categories/domains/`
   - **New Category URL:** `/categories/domains-and-transfers/`

### Articles Updated (49 files total)

**Articles moved from "Domain Transfers" to "Domains and Transfers" (9 files):**
1. `content/articles/before-transferring-domain.md`
2. `content/articles/domain-transfer-pricing.md`
3. `content/articles/domain-transfer.md`
4. `content/articles/ds-records-changing-dns.md`
5. `content/articles/how-to-issue-new-transfer-when-transfer-denied.md`
6. `content/articles/integrated-domain-provider-transfer-domain.md`
7. `content/articles/transferring-domain-away.md`
8. `content/articles/transferring-domain-between-accounts.md`
9. `content/articles/whois-privacy-blocks-transfer-email.md`

**Articles moved from "Domains" to "Domains and Transfers" (40 files):**
1. `content/articles/activity-tracking.md`
2. `content/articles/adding-domain.md`
3. `content/articles/adding-subdomain.md`
4. `content/articles/auto-renew-only-domains.md`
5. `content/articles/changing-whois-contact.md`
6. `content/articles/deleting-domain.md`
7. `content/articles/disabling-expiration-notifications.md`
8. `content/articles/dnsimple-and-handshake.md`
9. `content/articles/domain-access-control.md`
10. `content/articles/domain-auto-renewal.md`
11. `content/articles/domain-masking.md`
12. `content/articles/drop-catching.md`
13. `content/articles/expiring-domain-email-notifications.md`
14. `content/articles/expiring-product-email-notifications.md`
15. `content/articles/integrated-domain-provider-godaddy.md`
16. `content/articles/integrated-domain-providers.md`
17. `content/articles/labeling-domains.md`
18. `content/articles/managing-integrated-domains.md`
19. `content/articles/premium-domains.md`
20. `content/articles/recovering-deleted-domain.md`
21. `content/articles/redirect-heroku.md`
22. `content/articles/redirector.md`
23. `content/articles/registering-domain.md`
24. `content/articles/renewing-domain.md`
25. `content/articles/restoring-domain.md`
26. `content/articles/superlock.md`
27. `content/articles/transferring-domain-between-accounts.md` (also moved from Domain Transfers)
28. `content/articles/troubleshooting-redirects.md`
29. `content/articles/vanity-nameservers.md`
30. `content/articles/verifying-domain-resolution.md`
31. `content/articles/web-hosting.md`
32. `content/articles/what-are-vanity-name-servers.md`

**Note:** Some articles (au-migration.md, domains-*.md files, tlds-regulated.md, what-is-tld.md) are also being moved to the "TLDs" category as part of other changes in this branch. These require separate redirects to `/categories/tlds/` if those changes are merged.

## Issues Detected

### ⚠️ High Severity Issues (70 total)

#### Category URLs Requiring Redirects

Two category URLs will become unavailable and need redirects to the new combined category:

1. **`/categories/domains/`** → **`/categories/domains-and-transfers/`**
   - 40 articles moved from "Domains" to "Domains and Transfers"
   - This URL will become unavailable

2. **`/categories/domain-transfers/`** → **`/categories/domains-and-transfers/`**
   - 9 articles moved from "Domain Transfers" to "Domains and Transfers"
   - This URL will become unavailable

### ⚠️ Warnings (1)

1. **Category YAML File Deleted**
   - File: `categories/domain_transfers.yaml`
   - Category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Note:** Verify that no articles still reference this category name

## Required Actions

### Redirects to Add to `_redirects` File

To prevent broken backlinks, add the following redirects to the `_redirects` file:

#### Primary Redirects (Required)

```plaintext
# Redirect old "Domains" category to new "Domains and Transfers" category
/categories/domains/  /categories/domains-and-transfers/
/categories/domains/index.html  /categories/domains-and-transfers/

# Redirect old "Domain Transfers" category to new "Domains and Transfers" category
/categories/domain-transfers/  /categories/domains-and-transfers/
/categories/domain-transfers/index.html  /categories/domains-and-transfers/
```

#### Additional Redirects (From Other Changes in Branch)

**Note:** The branch also contains changes that move some articles to the "TLDs" category. If those changes are being merged, you may also need:

```plaintext
# Redirect "Domains" category to "TLDs" for specific articles
# (Only if TLDs category changes are being merged)
/categories/domains/  /categories/tlds/
/categories/domains/index.html  /categories/tlds/
```

**However, since the primary change is combining and renaming to "Domains and Transfers", the first set of redirects should be prioritized.**

### Explanation

When categories are combined and renamed:
- Both old category URLs become unavailable
- External sites linking to either old category page will get 404 errors
- Search engine rankings for the old URLs will be lost
- Users bookmarking the old category pages will encounter broken links

The redirects ensure:
- External backlinks continue to work
- Search engine rankings are preserved (301 redirects pass SEO value)
- Users are automatically redirected to the correct category page
- SEO value is maintained during the transition

## Impact Analysis

### Category URL Changes

| Old URL | New URL | Articles Affected | Action |
|---------|---------|-------------------|--------|
| `/categories/domains/` | `/categories/domains-and-transfers/` | 40 articles | Redirect required |
| `/categories/domain-transfers/` | `/categories/domains-and-transfers/` | 9 articles | Redirect required |

### Total Impact

- **2 category URLs** need redirects
- **70 total issues** detected (includes articles from other PRs in the branch)
- **49 articles** directly affected by the category restructure
- **1 category** deleted (Domain Transfers)
- **1 category** renamed (Domains → Domains and Transfers)

## Recommendations

1. **Add the primary redirects** listed above to `_redirects` before merging
2. **Verify category restructure** - Ensure all articles that should be in "Domains and Transfers" have been updated
3. **Check for hardcoded references** - Search the codebase for any hardcoded references to:
   - `/categories/domains/`
   - `/categories/domain-transfers/`
   - Category names "Domains" or "Domain Transfers" in templates or layouts
4. **Update internal links** - Check if any articles link to the old category URLs
5. **Monitor after deployment** - Check analytics for 404 errors on the old category URLs
6. **Consider redirect priority** - If both TLDs and Domains-and-Transfers redirects are needed, ensure the redirect order in `_redirects` is correct (most specific first)

## Testing

After adding redirects, test that:
- `/categories/domains/` redirects to `/categories/domains-and-transfers/`
- `/categories/domains/index.html` redirects to `/categories/domains-and-transfers/`
- `/categories/domain-transfers/` redirects to `/categories/domains-and-transfers/`
- `/categories/domain-transfers/index.html` redirects to `/categories/domains-and-transfers/`
- All redirects return a 301 (permanent redirect) status code
- The new category page displays all expected articles (49 total)
- No 404 errors occur for the old category URLs

## Summary of Changes

### What Happened
1. **Step 1:** Combined "Domain Transfers" category into "Domains" (9 articles moved)
2. **Step 2:** Renamed "Domains" category to "Domains and Transfers" (40 articles updated)
3. **Result:** Single unified "Domains and Transfers" category with 49 articles

### What Needs to Happen
- Add 4 redirect lines to `_redirects` file
- Verify all articles are correctly categorized
- Test redirects work properly
- Monitor for 404 errors after deployment

## Script Output

The full script output is available by running:
```bash
bin/check_backlinks.rb main
```

---

**Generated by:** `bin/check_backlinks.rb`  
**For questions or issues:** Review the script source code or check the CONTRIBUTING.md guide

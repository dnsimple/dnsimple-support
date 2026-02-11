# Backlink Check Report: Renaming Domains to Domains and Transfers

**Date:** 2026-01-28  
**Branch:** `test-domain-transfers-combine`  
**Base Branch:** `main`  
**Script:** `bin/check_backlinks.rb`

## Executive Summary

This report analyzes potential backlink issues when renaming the "Domains" category to "Domains and Transfers". The analysis detected **70 high-severity issues** requiring redirects to prevent broken links.

## Changes Made

### Category Rename
- **Old Category Name:** "Domains"
- **New Category Name:** "Domains and Transfers"
- **Old Category URL:** `/categories/domains/`
- **New Category URL:** `/categories/domains-and-transfers/`

### Articles Updated (40 files)
All articles that previously had the "Domains" category have been updated to use "Domains and Transfers" instead. This includes articles that were previously in both "Domains" and "Domain Transfers" categories.

## Issues Detected

### ⚠️ High Severity Issues (70 total)

#### Category URL Changes Requiring Redirects

The category rename affects two category URLs:

1. **`/categories/domains/`** → **`/categories/domains-and-transfers/`**
   - 40 articles moved from "Domains" to "Domains and Transfers"
   - This URL will become unavailable and needs a redirect

2. **`/categories/domain-transfers/`** → **`/categories/domains-and-transfers/`**
   - 9 articles moved from "Domain Transfers" to "Domains and Transfers"
   - This URL will become unavailable and needs a redirect

#### Articles Removed from "Domains" Category (40 articles)

The following articles were removed from the "Domains" category and moved to "Domains and Transfers":

1. activity-tracking.md
2. adding-domain.md
3. adding-subdomain.md
4. auto-renew-only-domains.md
5. changing-whois-contact.md
6. deleting-domain.md
7. disabling-expiration-notifications.md
8. dnsimple-and-handshake.md
9. domain-access-control.md
10. domain-auto-renewal.md
11. domain-masking.md
12. drop-catching.md
13. expiring-domain-email-notifications.md
14. expiring-product-email-notifications.md
15. integrated-domain-provider-godaddy.md
16. integrated-domain-providers.md
17. labeling-domains.md
18. managing-integrated-domains.md
19. premium-domains.md
20. recovering-deleted-domain.md
21. redirect-heroku.md
22. redirector.md
23. registering-domain.md
24. renewing-domain.md
25. restoring-domain.md
26. superlock.md
27. transferring-domain-between-accounts.md
28. troubleshooting-redirects.md
29. vanity-nameservers.md
30. verifying-domain-resolution.md
31. web-hosting.md
32. what-are-vanity-name-servers.md

**Note:** Some articles (au-migration.md, domains-*.md files, tlds-regulated.md, what-is-tld.md) are also being moved to the "TLDs" category as part of other changes in this branch. These require redirects to `/categories/tlds/` instead.

#### Articles Removed from "Domain Transfers" Category (9 articles)

The following articles were removed from the "Domain Transfers" category and moved to "Domains and Transfers":

1. before-transferring-domain.md
2. domain-transfer-pricing.md
3. domain-transfer.md
4. ds-records-changing-dns.md
5. how-to-issue-new-transfer-when-transfer-denied.md
6. integrated-domain-provider-transfer-domain.md
7. transferring-domain-away.md
8. transferring-domain-between-accounts.md (also had "Domains" category)
9. whois-privacy-blocks-transfer-email.md

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

**However, since the primary change is renaming "Domains" to "Domains and Transfers", the first set of redirects should be prioritized.**

### Explanation

When a category is renamed:
- The old category URL becomes unavailable
- External sites linking to the old category page will get 404 errors
- Search engine rankings for the old URL will be lost
- Users bookmarking the old category page will encounter broken links

The redirects ensure:
- External backlinks continue to work
- Search engine rankings are preserved (301 redirects pass SEO value)
- Users are automatically redirected to the correct category page
- SEO value is maintained during the transition

## Impact Analysis

### Category URL Changes

| Old URL | New URL | Articles Affected |
|---------|---------|-------------------|
| `/categories/domains/` | `/categories/domains-and-transfers/` | 40 articles |
| `/categories/domain-transfers/` | `/categories/domains-and-transfers/` | 9 articles |

### Total Redirects Needed

- **2 category URLs** need redirects
- **70 total issues** detected (includes articles from other PRs in the branch)
- **49 articles** directly affected by the "Domains" → "Domains and Transfers" rename

## Recommendations

1. **Add the primary redirects** listed above to `_redirects` before merging
2. **Verify category rename** - Ensure all articles that should be in "Domains and Transfers" have been updated
3. **Check for hardcoded references** - Search the codebase for any hardcoded references to:
   - `/categories/domains/`
   - `/categories/domain-transfers/`
   - Category name "Domains" in templates or layouts
4. **Update internal links** - Check if any articles link to the old category URLs
5. **Monitor after deployment** - Check analytics for 404 errors on the old category URLs
6. **Consider redirect priority** - If both TLDs and Domains-and-Transfers redirects are needed, ensure the redirect order in `_redirects` is correct

## Testing

After adding redirects, test that:
- `/categories/domains/` redirects to `/categories/domains-and-transfers/`
- `/categories/domains/index.html` redirects to `/categories/domains-and-transfers/`
- `/categories/domain-transfers/` redirects to `/categories/domains-and-transfers/`
- `/categories/domain-transfers/index.html` redirects to `/categories/domains-and-transfers/`
- All redirects return a 301 (permanent redirect) status code
- The new category page displays all expected articles

## Comparison with Previous Report

This report differs from the previous "Domain Transfers Combination" report:

| Aspect | Previous Report | Current Report |
|--------|----------------|----------------|
| Change Type | Combined two categories | Renamed one category |
| Old URLs | `/categories/domain-transfers/` | `/categories/domains/` and `/categories/domain-transfers/` |
| New URL | `/categories/domains/` | `/categories/domains-and-transfers/` |
| Issues Detected | 36 | 70 |
| Articles Affected | 9 | 49 |

## Script Output

The full script output is available by running:
```bash
bin/check_backlinks.rb main
```

---

**Generated by:** `bin/check_backlinks.rb`  
**For questions or issues:** Review the script source code or check the CONTRIBUTING.md guide

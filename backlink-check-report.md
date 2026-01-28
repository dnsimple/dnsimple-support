# Backlink Check Report: Domain Transfers Category Combination

**Date:** 2026-01-28  
**Branch:** `test-domain-transfers-combine`  
**Base Branch:** `main`  
**Script:** `bin/check_backlinks.rb`

## Executive Summary

This report analyzes potential backlink issues when combining the "Domain Transfers" category into the "Domains" category. The analysis detected **36 high-severity issues** requiring redirects to prevent broken links.

## Changes Made

### Category YAML File
- **Deleted:** `categories/domain_transfers.yaml`

### Articles Updated (9 files with Domain Transfers category)
The following articles were updated to change their category from "Domain Transfers" to "Domains":

1. `content/articles/before-transferring-domain.md`
2. `content/articles/domain-transfer-pricing.md`
3. `content/articles/domain-transfer.md`
4. `content/articles/ds-records-changing-dns.md`
5. `content/articles/how-to-issue-new-transfer-when-transfer-denied.md`
6. `content/articles/integrated-domain-provider-transfer-domain.md`
7. `content/articles/transferring-domain-away.md`
8. `content/articles/transferring-domain-between-accounts.md`
9. `content/articles/whois-privacy-blocks-transfer-email.md`

## Issues Detected

### ⚠️ High Severity Issues (36 total)

#### Domain Transfers Category Removal (9 articles)

The following articles were removed from the "Domain Transfers" category, which will cause the category URL `/categories/domain-transfers/` to become unavailable:

1. **before-transferring-domain.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

2. **domain-transfer-pricing.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

3. **domain-transfer.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

4. **ds-records-changing-dns.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

5. **how-to-issue-new-transfer-when-transfer-denied.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

6. **integrated-domain-provider-transfer-domain.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

7. **transferring-domain-away.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

8. **transferring-domain-between-accounts.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

9. **whois-privacy-blocks-transfer-email.md**
   - Old category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Action Required:** Add redirect to `/categories/domains/`

#### Other Category Changes (27 articles)

**Note:** The branch also contains changes from other PRs that move articles from "Domains" to "TLDs" category. These are separate from the Domain Transfers combination but are included in the total count.

### ⚠️ Warnings (1)

1. **Category YAML File Deleted**
   - File: `categories/domain_transfers.yaml`
   - Category: Domain Transfers
   - Category URL: `/categories/domain-transfers/`
   - **Note:** Verify that no articles still reference this category name

## Required Actions

### Redirects to Add to `_redirects` File

To prevent broken backlinks, add the following redirects to the `_redirects` file:

```plaintext
/categories/domain-transfers/  /categories/domains/
/categories/domain-transfers/index.html  /categories/domains/
```

### Explanation

When articles are removed from a category, the category index page URL becomes unavailable. If external sites or search engines have linked to `/categories/domain-transfers/`, those links will break without redirects.

The redirect ensures:
- External backlinks continue to work
- Search engine rankings are preserved
- Users are automatically redirected to the correct category page
- SEO value is maintained

## Recommendations

1. **Add the redirects** listed above to `_redirects` before merging
2. **Verify category combination** - Ensure all articles that should be in "Domains" have been updated
3. **Check for other references** - Search the codebase for any hardcoded references to `/categories/domain-transfers/`
4. **Monitor after deployment** - Check analytics for 404 errors on the old category URL

## Testing

After adding redirects, test that:
- `/categories/domain-transfers/` redirects to `/categories/domains/`
- `/categories/domain-transfers/index.html` redirects to `/categories/domains/`
- The redirect returns a 301 (permanent redirect) status code

## Script Output

The full script output is available in `backlink-check-report.txt`.

---

**Generated by:** `bin/check_backlinks.rb`  
**For questions or issues:** Review the script source code or check the CONTRIBUTING.md guide

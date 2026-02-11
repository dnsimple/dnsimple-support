# TL;DR: Complete Category Restructure Backlink Report

## What's Changing

**Two-step category restructure:**
1. Combine "Domain Transfers" → "Domains" 
2. Rename "Domains" → "Domains and Transfers"

**Final result:** One unified "Domains and Transfers" category

## The Problem

- **70 high-severity issues** detected
- **2 category URLs** will break without redirects:
  - `/categories/domains/` → will 404
  - `/categories/domain-transfers/` → will 404
- **49 articles** affected

## The Fix

Add these **4 lines** to `_redirects`:

```plaintext
/categories/domains/  /categories/domains-and-transfers/
/categories/domains/index.html  /categories/domains-and-transfers/
/categories/domain-transfers/  /categories/domains-and-transfers/
/categories/domain-transfers/index.html  /categories/domains-and-transfers/
```

## Impact

**Without redirects:**
- ❌ Broken external links
- ❌ Lost SEO rankings
- ❌ 404 errors for bookmarked pages
- ❌ Poor user experience

**With redirects:**
- ✅ All links continue working
- ✅ SEO value preserved
- ✅ Users automatically redirected
- ✅ Smooth transition

## Bottom Line

**Add the 4 redirect lines before merging, or you'll break backlinks and lose SEO value.**

---

**Full report:** See `backlink-check-report-combined.md` for complete details.

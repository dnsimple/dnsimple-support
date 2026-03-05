# SSL Certificates Documentation Revamp - Planning & Implementation

**Parent Issue:** #191

## Summary

Complete audit and reorganization plan for SSL Certificates documentation to align with Diataxis framework, update terminology (Standard → Sectigo), and improve content structure. This issue covers the planning phase and outlines all implementation changes needed.

## Planning Documents Created

Three comprehensive planning documents have been created in the repository:

1. **`SSL_CERTIFICATES_DIATAXIS_AUDIT.md`** - Complete article audit with Diataxis mapping
2. **`SSL_CERTIFICATES_IMPLEMENTATION_SUMMARY.md`** - Detailed implementation checklist  
3. **`PROPOSED_SSL_CATEGORY_YAML.md`** - Proposed category structure

## Key Findings

### Current State
- **40 articles** in SSL Certificates category
- **Mixed intent** - Getting Started section contains explanations
- **Inconsistent terminology** - "Standard" used instead of "Sectigo"
- **Missing content** - No Glossary or Troubleshooting articles
- **~35 articles** missing `meta` descriptions
- **Topic-based organization** instead of intent-based

### Proposed State
- **Diataxis-aligned structure** with clear sections:
  - Getting Started (2 hub pages)
  - Explanation (12 articles, organized by topic)
  - How-to Guides (18 articles, organized by task)
  - Installation (6 platform-specific guides)
  - Troubleshooting (1 new article)
  - Reference (9 articles, organized by type)
- **Consistent terminology** - "Sectigo" replaces "Standard"
- **All articles** with proper frontmatter
- **Task-based organization** - Let's Encrypt integrated into task groupings

## Deliverables

### Phase 1: ✅ Complete
- [x] Audit all 40 SSL articles
- [x] Create Diataxis classification mapping
- [x] Document terminology changes needed
- [x] Identify content splits needed
- [x] Create planning documents

### Phase 2: Category Restructure
- [ ] Update `categories/ssl_certificates.yaml` with Diataxis structure
- [ ] Test category page rendering

### Phase 3: Terminology (Standard → Sectigo)
- [ ] Rename 3 article files (only files with "Standard" terminology):
  - `standard-vs-letsencrypt.md` → `sectigo-vs-letsencrypt.md`
  - `ordering-standard-certificate.md` → `ordering-sectigo-certificate.md`
  - `renewing-standard-ssl-certificate.md` → `renewing-sectigo-ssl-certificate.md`
- [ ] Update titles in frontmatter for renamed files
- [ ] Update content in all ~40 articles (replace "Standard" with "Sectigo" in context)
- [ ] Add redirects for renamed files
- [ ] Update all internal links
- [ ] **Note:** All other file slugs remain unchanged (DNSimple doesn't use "how-to-" prefixes)

### Phase 4: Pillar Page
- [ ] Reorganize `ssl-certificates.md` as pillar page
- [ ] Add quick links section (Getting Started, How-tos, Explanations)
- [ ] Add link to Glossary and Troubleshooting
- [ ] Add optional legacy terminology note

### Phase 5: New Articles
- [ ] Create `ssl-certificate-glossary.md` (Reference type)
  - Follow DNS/DNSSEC glossary pattern
  - Include: Core Concepts, Certificate Structure, Types, Validation, Providers
- [ ] Create `troubleshooting-ssl-certificate-issues.md` (Troubleshooting type)
  - Cover: validation issues, CAA blocking, delays, hostname mismatch, chain issues
- [ ] Add both to category YAML

### Phase 6: Content Reorganization
- [ ] Reorganize `ssl-certificates-email-validation.md` (if needed)
- [ ] Reorganize `letsencrypt.md` (if needed)
- [ ] Move `ssl-certificate-types.md` from Installation to Explanation
- [ ] Move `ssl-certificates-email-validation.md` from Installation to How-to
- [ ] Convert `ssl-certificate-with-windows.md` to redirect/hub page
- [ ] Remove "Expiring Product Email Notifications" from SSL category (not SSL-specific)

### Phase 7: Frontmatter & Links
- [ ] Add `meta` descriptions to ~35 articles
- [ ] Update all internal links (Standard → Sectigo)
- [ ] Update cross-references between articles
- [ ] Add Glossary links to relevant articles
- [ ] Add Troubleshooting links to relevant articles
- [ ] Test all links

## Files to be Created

1. `content/articles/ssl-certificate-glossary.md`
2. `content/articles/troubleshooting-ssl-certificate-issues.md`

## Files to be Renamed

**Note:** Only files with "Standard" terminology are renamed. All other files keep their existing slug patterns (DNSimple documentation does not use "how-to-" prefixes).

1. `content/articles/standard-vs-letsencrypt.md` → `sectigo-vs-letsencrypt.md`
2. `content/articles/ordering-standard-certificate.md` → `ordering-sectigo-certificate.md`
3. `content/articles/renewing-standard-ssl-certificate.md` → `renewing-sectigo-ssl-certificate.md`

## Files to be Modified

- `categories/ssl_certificates.yaml` - Complete restructure
- ~40 SSL articles - Terminology updates, meta descriptions, link updates

## Redirects to Add

```yaml
# In renamed articles' frontmatter:
redirect_from:
  - /articles/standard-vs-letsencrypt/
  - /articles/ordering-standard-certificate/
  - /articles/renewing-standard-ssl-certificate/
```

## Proposed Category Structure

See `PROPOSED_SSL_CATEGORY_YAML.md` for complete structure. Key changes:

- **Removed:** Separate "Let's Encrypt" section (integrated into task-based groupings)
- **Removed:** "Ordering" section (moved to How-to guides)
- **Added:** "Explanation" section with topic-based organization
- **Added:** "Troubleshooting" section
- **Reorganized:** All content by user intent, not product/topic

## Success Criteria

- [ ] `categories/ssl_certificates.yaml` reflects Diataxis structure
- [ ] "Standard" terminology removed in Sectigo context (except optional legacy note)
- [ ] Glossary created and linked from pillar page
- [ ] Troubleshooting page created and linked
- [ ] All articles have proper frontmatter (title, excerpt, meta, categories)
- [ ] Internal links and redirects are correct
- [ ] Site builds successfully
- [ ] All terminology consistent (Sectigo, not Standard)

## Open Questions

1. Should "Getting Started with SSL Certificates" remain a hub or become a Tutorial?
2. Should we split `ssl-certificates-email-validation.md` or just reorganize?
3. Should `ssl-certificate-with-windows.md` be deleted or converted to redirect page?
4. Should we add a legacy note about "Standard" terminology on the pillar page?

## Implementation Notes

- Follow patterns from Domains revamp for category structure and glossary style
- Keep writing consistent with Content Writing Guidelines (APA style, callouts)
- Prefer cross-links over duplication
- Test all redirects thoroughly
- Update internal documentation if needed

---

**Ready for team review and approval before implementation.**

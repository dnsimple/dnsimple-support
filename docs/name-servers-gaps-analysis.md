# Name servers content: gaps analysis

Internal planning artifact for the Name Servers track. Validate priorities against support volume, search analytics, and tickets before scheduling work.

**Rule:** Each net-new article below should ship as its **own PR** (plus `categories/*.yaml` updates when the article belongs in a category).

---

## Method

1. Listed common reader jobs (questions and tasks) touching name servers, delegation, and related DNS concepts.
2. Mapped each job to existing Help articles where possible.
3. Tagged remaining holes by Diataxis type (Explanation, How-to, Reference, or Getting-started-style onboarding).
4. Prioritized by overlap risk (prefer extending an existing article when scope is small) and likely discovery value.

**Primary corpus reviewed:** articles listed in [`categories/name_servers.yaml`](../categories/name_servers.yaml), plus closely linked pieces ([What Is Domain Delegation?](/articles/what-is-domain-delegation/), [Troubleshoot DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/), [Domain Resolution Issues](/articles/domain-resolution-issues/), [DNS hosting](/articles/dns-hosting/)).

---

## Coverage map (reader jobs)

| Reader job | Covered by (support.dnsimple.com path) | Gap? |
|------------|----------------------------------------|------|
| What is a name server / authoritative role | `/articles/what-is-a-nameserver/` | No (after Explanation refresh) |
| What are vanity name servers | `/articles/what-are-vanity-name-servers/` | No |
| What are glue records | `/articles/what-are-glue-records/` | No |
| What hostnames does DNSimple use | `/articles/dnsimple-nameservers/` | No |
| Delegate domain registered at DNSimple | `/articles/delegating-dnsimple-registered/` | No |
| Delegate domain registered elsewhere | `/articles/delegating-dnsimple-hosted/` | No |
| Choose between those two paths | `/articles/pointing-domain-to-dnsimple/` | No |
| Change delegation inside DNSimple (Edit delegation) | `/articles/setting-name-servers/` | No |
| Delegate a subdomain with NS records | `/articles/add-ns-records-for-subdomain/` | No |
| Reusable NS / glue via sets | `/articles/name-server-sets/` | No |
| Enterprise vanity setup | `/articles/vanity-nameservers/` | No |
| Delegation vs registration (concept) | `/articles/what-is-domain-delegation/` | No |
| Resolution not working / checks | `/articles/troubleshoot-dnsimple-name-servers/`, `/articles/domain-resolution-issues/` | Partial (see backlog) |
| Why propagation / TTL / caching (concept only) | Spread across notes in how-tos + troubleshoot | Yes |
| Authoritative vs recursive resolvers (first-party, concise) | Wikipedia linked from Explanation article only | Yes |
| Category navigation lists troubleshooting under Name Servers | Not today (`troubleshoot-dnsimple-name-servers` is under DNS only) | Maybe (YAML / IA PR) |
| Split DNS / multi-provider at zone edge | Secondary DNS category + integrations | Partial |

---

## Prioritized backlog (candidate articles or IA changes)

| Priority | Reader question (job) | Suggested Diataxis type | Title idea (working) | Related existing articles | Notes |
|----------|------------------------|-------------------------|----------------------|---------------------------|--------|
| P1 | Why does my delegation or record change take time to show up everywhere? | Explanation | How DNS caching and TTL affect delegation and record changes | Troubleshoot DNSimple Name Servers; Domain Resolution Issues; delegating how-tos | First-party Explanation avoids scattered duplicate paragraphs; link out from how-tos |
| P2 | What is the difference between a recursive resolver and my authoritative name servers? | Explanation | Recursive vs authoritative DNS resolvers | [What is a name server?](/articles/what-is-a-nameserver/); [What Is DNS?](/articles/what-is-dns/) | Short; keep narrowly scoped; supports GEO for resolver confusion tickets |
| P2 | I fixed delegation but email or a subdomain still fails | How-to | [Scoped troubleshoot split or extension] | Troubleshoot DNSimple Name Servers; record editor articles | Consider extending domain-resolution-issues vs new article; validate against ticket themes |
| P3 | Single-page delegation checklist (apex only) | Reference | Name server delegation checklist | Pointing a Domain to DNSimple; DNSimple Name Servers | Risk of duplicating Pointing article; only add if analytics show checklist queries |
| P3 | Add Troubleshoot DNSimple Name Servers to Name Servers category YAML | IA (category only) | (no new article) | categories/name_servers.yaml; troubleshoot article | Improves discoverability; one small PR touching YAML only |

---

## Hypotheses not promoted to backlog (until data confirms)

- Standalone "DNS hosting vs delegation vs zone editing" Explanation (might overlap [What Is Domain Delegation?](/articles/what-is-domain-delegation/) and [DNS hosting](/articles/dns-hosting/)) - extend existing first.
- Dedicated Reference duplicating only hostname table from DNSimple Name Servers - avoid unless a distinct use case appears (for example PDF or partner bundle).

---

## Next steps

1. Confirm P1 topic with support analytics and 2-3 recent ticket examples.
2. Open one issue per backlog row in your tracker; link upstream PRs when articles merge.
3. Re-run this map after any major product change to delegation UI or name server sets.

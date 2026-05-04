# Name servers content: gaps analysis

Internal planning artifact for the Name Servers track. Validate priorities against support volume, search analytics, and tickets before scheduling further work.

**Rule:** Each net-new article ships as its **own PR** (plus `categories/*.yaml` updates when the article belongs in a category).

---

## Backlog implementation status

These rows match the prioritized backlog below. Track merge order when `categories/name_servers.yaml` changes in sequence.

| Priority | Backlog topic | Pull request | Article or change |
|----------|----------------|--------------|-------------------|
| P1 | How DNS caching and TTL affect delegation and record changes | https://github.com/dnsimple/dnsimple-support/pull/1917 | `/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/` |
| P2 | Recursive vs authoritative DNS resolvers | https://github.com/dnsimple/dnsimple-support/pull/1918 | `/articles/recursive-vs-authoritative-dns-resolvers/` |
| P2 | Troubleshoot email or subdomains after delegation changes | https://github.com/dnsimple/dnsimple-support/pull/1919 | `/articles/troubleshoot-email-subdomains-after-delegation-changes/` |
| P3 | Name server delegation checklist (Reference) | https://github.com/dnsimple/dnsimple-support/pull/1920 | `/articles/name-server-delegation-checklist/` |
| P3 | List Troubleshoot DNSimple Name Servers under Name Servers category | https://github.com/dnsimple/dnsimple-support/pull/1921 | Category index + `troubleshoot-dnsimple-name-servers` frontmatter |

Related earlier work: Name Servers Explanation refresh and first version of this doc landed in https://github.com/dnsimple/dnsimple-support/pull/1916 (if merged on your default branch, paths above assume the gap article PRs are merged after or rebased onto current `main`).

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
| What is a name server / authoritative role | `/articles/what-is-a-nameserver/` | No (after Explanation refresh, PR 1916) |
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
| Why propagation / TTL / caching (concept only) | `/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/` (PR 1917) | Closed when PR merges |
| Authoritative vs recursive resolvers (first-party, concise) | `/articles/recursive-vs-authoritative-dns-resolvers/` (PR 1918) | Closed when PR merges |
| Category navigation lists troubleshooting under Name Servers | PR 1921 | Closed when PR merges |
| Split DNS / multi-provider at zone edge | Secondary DNS category + integrations | Partial |

---

## Prioritized backlog (candidate articles or IA changes)

| Priority | Reader question (job) | Suggested Diataxis type | Title idea (working) | Related existing articles | Notes |
|----------|------------------------|-------------------------|----------------------|---------------------------|--------|
| P1 | Why does my delegation or record change take time to show up everywhere? | Explanation | How DNS Caching and TTL Affect Delegation and Record Changes | Troubleshoot DNSimple Name Servers; Domain Resolution Issues; delegating how-tos | Shipped: PR 1917 |
| P2 | What is the difference between a recursive resolver and my authoritative name servers? | Explanation | Recursive vs Authoritative DNS Resolvers | [What is a name server?](/articles/what-is-a-nameserver/); [What Is DNS?](/articles/what-is-dns/) | Shipped: PR 1918 |
| P2 | I fixed delegation but email or a subdomain still fails | How-to | Troubleshoot Email or Subdomains After Delegation Changes | Troubleshoot DNSimple Name Servers; record editor articles | Shipped: PR 1919 |
| P3 | Single-page delegation checklist (apex only) | Reference | Name Server Delegation Checklist | Pointing a Domain to DNSimple; DNSimple Name Servers | Shipped: PR 1920 |
| P3 | Add Troubleshoot DNSimple Name Servers to Name Servers category YAML | IA (category only) | (no new article) | categories/name_servers.yaml; troubleshoot article | Shipped: PR 1921 |

---

## Hypotheses not promoted to backlog (until data confirms)

- Standalone "DNS hosting vs delegation vs zone editing" Explanation (might overlap [What Is Domain Delegation?](/articles/what-is-domain-delegation/) and [DNS hosting](/articles/dns-hosting/)) - extend existing first.
- Dedicated Reference duplicating only hostname table from DNSimple Name Servers - avoid unless a distinct use case appears (for example PDF or partner bundle).

---

## Next steps

1. Merge PRs 1917 through 1921 in order if GitHub reports conflicts on `categories/name_servers.yaml`.
2. Confirm P1 and P2 topics against support analytics after articles are live; revise articles if ticket themes differ.
3. Re-run this map after any major product change to delegation UI or name server sets.

---
title: Troubleshoot Email or Subdomains After Delegation Changes
excerpt: Steps to verify delegation to DNSimple and isolate why mail or a subdomain still fails after NS updates.
meta: After delegation changes, confirm DNSimple name servers with dig, then check MX and subdomain records on the authoritative zone. Clear resolver cache if needed.
categories:
- Name Servers
- DNS
- Emails
---

# Troubleshoot Email or Subdomains After Delegation Changes

Delegation can be correct at the registry while mail or a hostname still fails. Use the checks below to confirm that public resolvers reach DNSimple for your zone and that the records you expect exist on the authoritative side.

### Table of Contents {#toc}

* TOC
{:toc}

---

## Before you start {#before-you-start}

Read [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/) so resolver caching does not look like a misconfiguration. Flush local cache if needed ([Check DNS Cache](/articles/check-dns-cache/)).

## Confirm delegation {#confirm-delegation}

<div class="section-steps" markdown="1">
##### Verify name servers in DNS

1. Run `dig NS yourdomain.com +short` (replace `yourdomain.com`).
1. Compare the result to [DNSimple name servers](/articles/dnsimple-nameservers/). All four should appear and no unexpected third-party NS should remain unless you intentionally use [Secondary DNS](/articles/secondary-dns/).
1. If delegation is wrong, follow [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) and wait for caches to expire, then retest.
1. For a quick reference to the four NS targets and `dig` commands, see the [Name Server Delegation Checklist](/articles/name-server-delegation-checklist/).

</div>
> [!NOTE]
> `dig NS example.com +short` uses the resolver you query. Results can be cached, so if you changed delegation recently, you may still see old name servers until the previous delegation TTL expires. For background, see [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/).
Broader checks: [Troubleshoot DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/) and [Troubleshoot Domain Resolution Issues](/articles/domain-resolution-issues/).

## Email still undeliverable {#email-still-undeliverable}

<div class="section-steps" markdown="1">
##### Verify MX and related records

1. Run `dig MX yourdomain.com +short` at a public resolver (for example `dig @8.8.8.8 MX yourdomain.com +short`).
1. Confirm the MX targets resolve (A/AAAA) and match what your mail host expects.
1. In DNSimple, open the zone and confirm [MX records](/articles/mx-record/) (and any required [SPF](/articles/spf-record/), [DKIM](/articles/dkim-record/), or [DMARC](/articles/dmarc-record/) TXT records) exist on the **apex** domain that receives mail.
1. If you send from the domain, review [Email DNS Records Quick Reference](/articles/email-dns-records-quick-reference/) for missing authentication records.

</div>

If delegation was wrong until recently, remote senders may still retry against old paths; combine DNS fixes with [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/).

## Subdomain still fails {#subdomain-still-fails}

<div class="section-steps" markdown="1">
##### Trace authority for the hostname

1. Query the specific name: `dig A full.hostname.yourdomain.com +trace` or `dig CNAME full.hostname.yourdomain.com +trace` depending on record type.
1. Confirm which zone is authoritative. If a parent zone delegates the subdomain with [NS records](/articles/add-ns-records-for-subdomain/), those child name servers must hold the records you expect.
1. If the subdomain should live on DNSimple, ensure no stale NS at the parent points elsewhere.
1. For resolution errors after edits, see [Troubleshoot Record Resolution Issues](/articles/record-resolution-issues/).

</div>

## Have more questions?

If you are stuck after these checks, [contact support](https://dnsimple.com/feedback) with `dig` output for NS and the failing record type, and we will be happy to help.

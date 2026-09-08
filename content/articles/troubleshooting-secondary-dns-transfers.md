---
title: Troubleshoot Secondary DNS Zone Transfers
excerpt: How to diagnose a secondary DNS zone that stops updating, in either direction, using SOA serials and the status DNSimple reports.
meta: Diagnose secondary DNS zone transfers at DNSimple. Compare SOA serials, read the status messages on the Secondary DNS card, check NOTIFY and IP whitelists, and fix a zone that stopped updating.
categories:
- Secondary DNS
---

# Troubleshoot Secondary DNS Zone Transfers

### Table of Contents {#toc}

* TOC
{:toc}

---

Secondary DNS usually fails quietly. The zone keeps resolving, because the secondary continues to serve the last copy it received, so the only visible symptom is that a record you changed does not appear everywhere. This article covers how to find out where the transfer stopped and what to do about it.

## Before starting

Work out which direction you are troubleshooting, because the checks are different:

- **DNSimple as primary (outbound).** You edit the zone at DNSimple and another provider pulls it. Set up in the <label>Secondary DNS</label> card on the domain DNS page. See [Add a secondary DNS server to DNSimple](/articles/secondary-dns/).
- **DNSimple as secondary (inbound).** Another provider holds the zone and DNSimple pulls it. Set up under <label>Secondary DNS zone (with DNSimple as follower)</label>. See [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/).

If you keep two providers in sync by hand or with the API rather than with zone transfers, no transfer is involved and this article does not apply. See [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/).

## Start by comparing SOA serials {#compare-serials}

The SOA serial tells you whether a transfer happened at all. Every provider serving the zone should converge on the same serial shortly after a change.

Query each set of name servers directly rather than through a resolver, so you see what each provider is actually serving:

```
dig +short SOA example.com @ns1.dnsimple.com
dig +short SOA example.com @ns.your-other-provider.net
```

Read the result as follows:

- **Serials match.** The transfer is working. If a specific record is still missing, skip to [a single record is missing](#single-record).
- **Serials differ.** The secondary is behind. Continue with the section for your direction below.
- **The secondary returns nothing, or refuses the query.** The secondary is not serving the zone at all. Check that the zone still exists at that provider before looking at transfers.

> [!TIP]
> Note the serial on each side before you make a change, then repeat the query afterwards. A secondary that never moves is a different problem from one that moves slowly.

## DNSimple as primary: the secondary is behind {#outbound}

DNSimple reports what it can see from each of your secondary name servers on the <label>Secondary DNS</label> card.

### Read the status DNSimple reports {#outbound-status}

Each name server in the configuration is listed with its current state:

- **`Serial: <number>; Refresh: <number>`** - DNSimple read an SOA from that name server. Compare the serial with the one DNSimple is serving.
- **`No information yet`** - DNSimple has not been able to read an SOA from that name server at all. The name server is not serving the zone yet, or it is not reachable.

DNSimple treats a secondary as synchronized only when the serial, the refresh value, **and** the SOA primary name server field all match the zone as published at `axfr.dnsimple.com`. A secondary that copied the zone but rewrites the SOA primary field will keep showing as out of sync even though the records are correct. Raise that with your secondary provider rather than changing the configuration at DNSimple.

You may also see one of these messages:

- **"One or more of the secondary name servers for this configuration are serving stale data."** The secondary answered, but with an older zone. Continue with the checks below.
- **"The registry is missing one or more name servers for this configuration."** The transfer may be fine, but the delegation is not. The message names the name servers to add. Update them at your registrar, or at DNSimple if the domain is registered here, then allow time for the change to propagate.
- **"The domain is not resolving through one or more primary or secondary name servers."** At least one name server in the delegation is not answering for the zone.
- **"The configuration update is propagating to the primary name server."** A change is still being applied. This clears on its own.

### Check the IP whitelist, which also controls NOTIFY {#outbound-whitelist}

The whitelisted IP addresses in your configuration do two separate jobs. They permit AXFR from those addresses, and they are also the addresses DNSimple sends NOTIFY to when the zone changes.

That second job is easy to miss. If your provider transfers from one set of addresses but receives NOTIFY on another, and only the first set is whitelisted, transfers still work but nothing tells the secondary to start one. The secondary then updates only when its own refresh timer expires, which can be hours. Providers usually surface this as a message about the primary not sending NOTIFY and the serials being out of sync.

<div class="section-steps" markdown="1">

1. Open the domain, select <label>DNS</label>, and find the <label>Secondary DNS</label> card.
1. Select <label>Configure</label> to review the configuration.
1. Ask your secondary provider for **every** address it uses, both to request transfers and to receive notifications, and confirm all of them are listed.
1. Save the configuration and make a small zone change to trigger a fresh notification.

</div>

A configuration accepts up to 6 name servers and up to 35 whitelisted IP addresses. Both IPv4 and IPv6 addresses are accepted.

### Confirm the provider can reach the transfer endpoint {#outbound-endpoint}

Your secondary provider pulls the zone from `axfr.dnsimple.com`. Some providers ask for a hostname and others for an IP address:

| Hostname | IP addresses |
|----------|--------------|
| `axfr.dnsimple.com` | `18.189.127.127`, `2600:1f16:ae2:e902:6881:5f5e:c245:887e` |

If the provider allows outbound transfers by address, make sure both are permitted.

## DNSimple as secondary: the zone is not updating at DNSimple {#inbound}

Open the secondary zone from your account to see its transfer state.

### Read the transfer state {#inbound-status}

- **`Last transferred <time> ago`** - a transfer succeeded then. Compare that against when you changed the record.
- **`No zone records have been transferred yet`** - no transfer has ever completed. This is a setup problem, not a sync problem. Recheck the primary server address and port, and confirm your primary allows transfers from DNSimple.

### Check the primary allows the transfer {#inbound-primary}

Your primary must permit zone transfers from DNSimple and should notify DNSimple when the zone changes. The addresses to allow are listed in [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/).

Confirm on your own primary that the transfer is being offered:

```
dig AXFR example.com @your-primary.example.net
```

A primary that refuses this from its own network will refuse it from DNSimple as well.

### Relink the primary server {#inbound-relink}

If the primary is reachable, offers transfers, and DNSimple is still showing an old copy, unlinking and relinking the primary server restarts the transfer.

<div class="section-steps" markdown="1">

1. Open the secondary zone.
1. Select <label>Unlink primary server</label> and confirm.
1. Link the primary server again.
1. Recheck <label>Last transferred</label> after a few minutes.

</div>

> [!WARNING]
> Unlinking a primary server affects the records transferred to the zone. Do this when the zone is already stale, not as a routine check.

## A single record is missing {#single-record}

If the serials match and the zone transferred, but one record never appears, that record was rejected individually rather than the transfer failing.

DNSimple records these per-record failures with the reason each one was rejected, but that detail is visible only to DNSimple staff. Retrying the transfer will not clear it, because the record is rejected again each time.

[Contact support](https://dnsimple.com/feedback) with the zone name, the exact record name and type, and where you can see it on your primary. Support can read the rejection reason and tell you what to change.

## Records change when you did not change anything {#unexpected-changes}

If you monitor your zone, you may see the serial increase and records change with no edit on your side. When DNSimple is the primary and the zone has an ALIAS record, this is expected: ALIAS cannot be transferred as a record type, so DNSimple resolves it to A and AAAA records and refreshes them on a schedule. Each refresh that changes an address changes the zone your secondary pulls.

See [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/) for how this works.

## Related topics {#related}

- [What is Secondary DNS?](/articles/what-is-secondary-dns/) - primary and secondary roles, and how zone transfers work
- [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) - resolution failures that look like transfer failures
- [Empty Non-Terminals](/articles/empty-non-terminals/) - a difference in behavior between providers that can look like a missing record

## Have more questions?

If you have any questions about secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.

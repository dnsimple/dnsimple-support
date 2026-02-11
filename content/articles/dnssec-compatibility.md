---
title: DNSSEC Compatibility With Other DNSimple Features
excerpt: Learn which DNSimple features are compatible with DNSSEC and any limitations to be aware of.
meta: Understand DNSSEC compatibility with DNSimple features like secondary DNS, vanity name servers, ALIAS records, email forwarding, and more.
categories:
- DNSSEC
---

# DNSSEC Compatibility With Other DNSimple Features

Not all DNSimple features are compatible with DNSSEC. The following table summarizes the current compatibility status of each feature when used alongside DNSSEC.

| Feature | Compatible | Notes |
|---|---|---|
| [Secondary DNS (DNSimple is Primary)](/articles/secondary-dns/) | Partially | AXFR zone transfers do not include RRSIG records, secondary providers must maintain their own trust chain. It works for hidden backup, or if the secondary provider performs the signing independently. See [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/). |
| [Secondary DNS (DNSimple is Secondary)](/articles/secondary-dns-dnsimple-as-secondary/) | No | Inbound AXFR replaces the entire zone, removing any existing DNSKEY and RRSIG records. DNSSEC cannot be enabled alongside Secondary DNS with DNSimple as Secondary. |
| [Vanity name servers](/articles/what-are-vanity-name-servers/) | Yes | Vanity name servers uses the same signing architecture of standard name servers. |
| [ALIAS records](/articles/alias-record/) | Yes | ALIAS records are resolved dynamically on DNSimple's name servers and served as standard A/AAAA records, which are signed normally by DNSSEC. |
| [Email forwarding](/articles/email-forwarding/) | Yes | Email forwarding adds standard MX and TXT records, which are signed normally by DNSSEC. |
| [Control Plane](/articles/integrated-dns-providers/) | No | Multi-signer DNSSEC ([RFC 8901](https://www.rfc-editor.org/rfc/rfc8901.html)) is not supported by the current integrated providers, as they do not allow importing external keys into their DNSKEY RRset. DNSSEC record types are not synced between DNSimple and the external provider, and DNSSEC must be configured directly with each provider. |
| [Reverse DNS](/articles/reverse-dns/) | No | Reverse DNS zones do not currently support DNSSEC. |

## Have more questions?

If you have any questions about DNSSEC compatibility with DNSimple features, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

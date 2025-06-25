---
title: What Are CDS and CDNSKEY?
excerpt: CDS and CDNSKEY records help automate DNSSEC key updates by signaling parent zones, reducing manual errors and keeping your domain resolvable.
categories:
- DNSSEC
---

# What Are CDS and CDNSKEY?

CDS (Child Delegation Signer) and CDNSKEY (Child DNS Public Key) are special DNS record types that facilitate the automated management of DNSSEC delegation. They enable child zones (your domain's DNS) to signal their parent zones (typically registries like .com or .org) about changes in DNSSEC-related records, specifically the DS (Delegation Signer) record. 

CDS and CDNSKEY records reduce the need for manual changes and help prevent issues that can make your domain unreachable. At DNSimple, these records are managed automatically, making DNSSEC easier and safer to use.

This automation significantly reduces the need for manual intervention during DNSSEC key rollovers or configuration updates. By automating this process, the risk of human errors, which can lead to critical DNSSEC validation failures and make your domain unreachable, is minimized.

## Why are these records useful?

Without CDS or CDNSKEY, updating your DS records usually means doing everything by hand. You need to sign in to your registrar’s dashboard, find the right settings, and copy long strings of DNSSEC data from your DNS provider to the registrar. It’s not only a slow process, it’s also easy to make mistakes.

If something goes wrong, like entering the wrong data or forgetting to update the DS record after a key change, your domain may stop resolving for people using DNSSEC-aware resolvers. Some users might still reach your site, but others will see errors, which can be confusing and damaging.

CDS and CDNSKEY help avoid this. They allow your DNS provider to tell the parent zone when a DNSSEC change happens, so the DS record can be updated automatically. This makes managing DNSSEC much safer and easier, especially during key rollovers or when enabling or disabling DNSSEC.

## How does automation work?

If a parent zone supports CDS and/or CDNSKEY scanning:

1. Your DNS provider publishes updated CDS and CDNSKEY records when keys change.
1. The parent periodically scans for these records.
1. Based on what it finds, the parent updates the DS records automatically.


This ensures your domain stays secure and resolvable during events like:

- Enabling or disabling DNSSEC
- DNSSEC key rotation
- DNS provider migration

## How DNSimple uses CDS and CDNSKEY

At DNSimple:
CDS and CDNSKEY records are automatically generated for all DNSSEC-signed zones created or updated after January 1st, 2019.


These records are managed by DNSimple. Users do not need to (and should not) manually add or remove them.


If your domain registrar supports CDS/CDNSKEY automation, DS records at the parent will update automatically to reflect any DNSSEC changes made in DNSimple.
However, not all registrars support this automation. In those cases, changes to your DNSSEC configuration may still require manual DS record updates at the registrar level.
The role of DS records in DNSSEC validation
The DS record links the parent and child zones in DNSSEC. If a DS record exists in the parent zone but the corresponding DNSKEY is missing in the child zone, DNS resolvers will not be able to verify your domain. This often results in errors like SERVFAIL.
This mismatch can happen, for example, if DNSSEC is disabled in the child zone, but the DS record remains in the parent.
CDS and CDNSKEY help prevent this by ensuring that DS records are automatically removed when no longer needed, maintaining the integrity of the DNSSEC chain of trust.
Have more questions? 
If you have additional questions or need any assistance with DNSSEC, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 

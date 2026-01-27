---
title: Domain Transfer Reference
excerpt: The formal process, requirements, timelines, and key technical details of domain transfers.
meta: Learn more about the structure, requirements, timelines, and technical details for domain transfers.
categories:
- Domains
---

# Domain Transfer Reference

This article serves as a reference for the formal process, requirements, timelines, and key technical details of domain transfers.

## Domain transfer overview

A domain transfer is the process of moving a domain name registration from one registrar to another. When you transfer a domain to DNSimple, DNSimple becomes the domain registrar, and you can manage your entire domain configuration in your DNSimple account.

## Transfer requirements and restrictions

### Time-based restrictions

**ICANN 60-day lock:** A domain can only be transferred if it was registered more than 60 days ago and has not been transferred within the last 60 days. Additionally, after changing a domain's registrant information, the domain is locked from external transfers for 60 days. This lock cannot be opted out of at DNSimple. If you plan to transfer your domain, update the contact information after the transfer is complete. These restrictions are enforced by ICANN for all generic top-level domains (gTLDs) and many country code TLDs (ccTLDs).

### Domain status requirements

**Unlocked domain:** The domain must be unlocked at the current registrar before a transfer can be initiated.

**WHOIS privacy:** WHOIS privacy services may prevent the proper delivery of the transfer approval email. You must turn the WHOIS privacy service off before starting the transfer.

**Expired domains:** Expired domains can be transferred as long as the domain is still in its grace period and has not entered the redemption period. This applies to ICANN generic top-level domains (gTLDs); country code TLDs (ccTLDs) may have different rules.

### Authorization code

The authorization code (also called transfer code, auth code, or auth info) is required to authorize the transfer of a domain name. This code is typically sent by the current registrar via email to the domain registrant.

## Transfer timeline

**Processing time:** It can take up to seven (7) days for a transfer to complete, depending on the domain's Top Level Domain (TLD).

**Approval process:** For most domain extensions, the current registrant will receive an email from `donotreply@name-services.com` to authorize the transfer. The transfer cannot proceed without approval of this email.

**Automatic approval:** If no action is taken to approve or reject the transfer, the registrar has 5-7 business days to release the domain. The transfer will automatically be approved at the end of this period.

## Transfer types

### Transferring a domain to DNSimple

When transferring a domain to DNSimple, the process involves:

1. Preparing the domain at the current registrar (unlock, disable WHOIS privacy, obtain authorization code)
2. Initiating the transfer at DNSimple (enter domain name, authorization code, select registrant)
3. Approving the transfer request via email
4. Waiting for the transfer to complete (up to 7 days)

For step-by-step instructions, see [Transfer a Domain to DNSimple](/articles/domain-transfer/).

### Transferring a domain away from DNSimple

When transferring a domain away from DNSimple, the process involves:

1. Unlocking the domain and requesting the transfer code at DNSimple
2. Starting the transfer at the gaining registrar
3. Approving the transfer request

For step-by-step instructions, see [Transferring a domain away from DNSimple](/articles/transferring-domain-away/).

### Transferring a domain between DNSimple accounts

You can transfer a domain between DNSimple accounts at any time via the DNSimple interface. This process transfers all associated resources, including DNS records, SSL certificates, and email forwards.

For step-by-step instructions, see [Transferring a Domain to Another DNSimple Account](/articles/transferring-domain-between-accounts/).

## Transfer pricing and expiration extension

**Transfer fee:** The transfer fee covers the cost of transferring the domain and, when applicable, the required domain extension. You can check the transfer fee for your TLD at [dnsimple.com/pricing](https://dnsimple.com/pricing).

**Expiration extension:** For most TLDs, transferred domains will have the minimum required extension period. For example, `.com` domains will always be extended by one year when they are transferred. The price of this extension is included in the transfer fee for most TLDs. However, some TLDs do not extend the expiration date when transferred.

**Extension calculation:** When an extension is applied, it is added to the current expiration date so that you do not lose any registration time that you have already paid for. The extension will not be applied if the domain has reached the maximum registration period allowed for that TLD. Maximum registration periods vary by TLD and may be less than 10 years.

## DNS considerations during transfer

**Name servers:** We don't automatically point your domain to our name servers when the transfer completes. To avoid unexpected downtime, we suggest [pointing your domain to our name servers before the transfer](/articles/before-transferring-domain/).

**DNSSEC:** You should always disable DNSSEC and [remove any existing DS records](/articles/ds-records-changing-dns/) from your domain before transferring. An incorrect DNSSEC setup may cause your domain to be inaccessible. For more information about managing DNSSEC and DS records when changing DNS providers, see [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/).

## Canceling a transfer

If a domain is still in the transfer process, you can cancel the transfer, and the domain won't be moved away from your current registrar. To cancel, navigate to your domain, click "View status" under the "Transferring" card, then click "Cancel transfer".

## TLD-specific considerations

Some TLDs have different transfer procedures or requirements:

- **ccTLDs:** Country code TLDs may have different rules regarding expired domains, transfer timelines, and approval processes.
- **Regulated TLDs:** Some TLDs (such as `.BANK`, `.INSURANCE`) have additional requirements and restrictions.
- **Special procedures:** Some TLDs, such as `.UK`, have different transfer procedures that don't require an authorization code.

For TLD-specific information, check the [list of TLDs supported by DNSimple](https://dnsimple.com/tlds) or contact support.

## Have more questions?

If you have additional questions or need any assistance with domain transfers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

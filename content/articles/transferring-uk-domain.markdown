---
title: Transferring a UK or CO.UK Domain to DNSimple
excerpt: How to transfer your registered UK or CO.UK domain to DNSimple.
categories:
- Domain Transfers
---

# Transferring a UK or CO.UK Domain to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

UK and CO.UK domains have a different transfer process than most other domain registrations. This document explains some of those differences.

## Before you start

<warning>
As with any domain transfer, in order to avoid the possibility of downtime, you should [point the name servers for the domain to DNSimple (or another provider) before you begin the transfer](/articles/before-transferring-domain). This will prevent downtime and will also allow you to perform changes to the DNS records during the domain transfer.
</warning>

<div class="section-steps" markdown="1">
##### To start the transfer

1. Log into DNSimple and click on <label>Add a Domain</label>.
1. Select <label>transfer a domain</label>.
1. Press <label>Transfer Domain</label>
1. Select a registrant and fill in any extended attributes.
1. Press <label>Transfer Domain</label>
</div>

## Approve the transfer

To complete the transfer of a UK or CO.UK domain, you must change the domain's IPS TAG at your current domain registrar. Your registrar may allow you to do this through their web site, or you may need to contact them via email or phone.

Request the change of the IPS TAG to `ENOM` (this is case-sensitive, so make sure it is in all capital letters).

Once you've authorized the transfer, you may have to **wait up to 48 hours for the transfer to complete.**

<callout>
We will only charge your credit card for the transfer once it has completed.
</callout>

## Transfer status

You can go to your domain list at any time to check on the status of pending transfers. Click on <label>transfer in process</label> to view detailed information about the transfer request.

## After the transfer

When the transfer is completed, you will receive a confirmation email from DNSimple. Congratulations! Your domain is now transferred to DNSimple and you can manage it from your DNSimple account.

### Change name servers

It's important to note that **we don't automatically point your domain to our name servers** when the transfer completes.

To avoid unexpected downtime and confusion, we don't change the domain name servers upon a successful transfer. When the domain is transferred to us, we will keep using the same name servers previously configured for the domain.

You can now decide to [point the domain to DNSimple name servers](/articles/delegating-dnsimple-registered) in one click or [manually configure the name servers](/articles/setting-name-servers).

<note>
Generally, we suggest pointing [your domain to our name servers before the transfer](/articles/before-transferring-domain), to avoid downtime during the transfer. In fact, some DNS providers will stop serving the DNS for the domain as soon as the transfer is completed.
</note>

### Expiration extension

UK and CO.UK domains may or may not be extended when they are successfully transferred. If your co.uk domain has less than 3 months remaining until it expires then it will be extended by 2 years. The price of this extension is included in the transfer fee.



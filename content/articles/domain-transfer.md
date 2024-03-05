---
meta: How to transfer your registered domain to DNSimple.
title: Transfer a Domain to DNSimple
excerpt: How to transfer your registered domain to DNSimple.
categories:
- Domain Transfers
---

# Transfer a Domain to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Transferring a domain name to DNSimple is the process of moving your [domain registration](https://dnsimple.com/tlds) to DNSimple. DNSimple will act as a domain registrar, and you will be able to manage your entire domain configuration in your DNSimple account.

## Before starting

<warning>
To avoid the possibility of downtime, you should [point the name servers for the domain to DNSimple (or another provider) before you begin the transfer](/articles/before-transferring-domain). This will prevent downtime and allow you to perform changes to the DNS records during the domain transfer. You should also [remove any existing DS records](/articles/ds-records-changing-dns) from your domain if you are changing DNS providers.
</warning>

## Caveats

- A domain can only be transferred if it was registered more than 60 days ago and has not been transferred within the last 60 days.
- It can take up to seven (7) days for a transfer to complete, depending on the domain's Top Level Domain (TLD). To learn more about how to avoid downtime during this period, check out [this article](/articles/before-transferring-domain).
- Most registrars will not allow an expired domain to be transferred. However, if the domain expires during the transfer, the registrar may not block the transfer due to the expiration.
- WHOIS privacy services may prevent the proper delivery of the transfer approval email. You will need to **turn the WHOIS privacy service off before starting the transfer**.

## Initiating the transfer

<div class="section-steps" markdown="1">
##### Preparing the transfer

At your current Registrar:

1. Unlock your domain.
1. Turn off the WHOIS privacy service.
1. Get your domain authorization code. This code is often sent by your current registrar via email.
1. Make sure you can receive emails at the email address specified for the current registrant of the domain. You may want to [check out how the domain looks in the public whois](https://dnsimple.com/whois) to verify.
</div>

<div class="section-steps" markdown="1">
##### Starting the transfer

At DNSimple:

1. Log in to DNSimple and click on <label>Add</label> in the dashboard.
1. Select <label>Transfer domain</label>.
1. You can also enable "Whois Privacy Protection" by checking the "Enable WHOIS Privacy Protection" check box, so it's enabled immediately upon completion of the transfer.
1. Click <label>Transfer Domain</label>
- Select a registrant, enter your authorization code if it's required, and fill in any extended attributes.
- Press "Transfer Domain".
</div>

## Approving the transfer

Your domain transfer request will now be issued if there are no missing fields. For most domain extensions, the current registrant will receive an email from `donotreply@name-services.com` to authorize the transfer.

Follow the instructions in the email. We cannot issue the transfer request to the registry without approval of this email.

Once you've authorized the transfer, you may have to **wait up to seven days for your domain transfer to complete.**

<info>
The total transfer price will be held on your card immediately.
Your card will be charged once the transfer completes.
If the transfer fails, funds will be released.
</info>

## Transfer status

You can go to your domain list to check on the status of pending transfers. Click on "transfer in process" to view detailed information about the transfer request.

## Canceling the transfer

If the domain is still in the transfer process, you can cancel the transfer, and the domain won't be moved away from your current registrar. To do this, navigate to your domain. Under the "Transferring" card, click "View status", then "Cancel transfer".

## After the transfer

When the transfer is completed, you will receive a confirmation email from DNSimple. Congratulations! Your domain is now transferred to DNSimple and you can manage it from your DNSimple account.

### Changing name servers

**We don't automatically point your domain to our name servers** when the transfer completes.

To avoid unexpected downtime and confusion, we don't change the domain name servers upon a successful transfer. When the domain is transferred to us, we will keep using the same name servers previously configured for the domain.

You can now decide to [point the domain to DNSimple name servers](/articles/delegating-dnsimple-registered) in one click or [manually configure the name servers](/articles/setting-name-servers).

<warning>
We suggest pointing [your domain to our name servers before the transfer](/articles/before-transferring-domain) to avoid downtime during the transfer. Some DNS providers will stop serving the DNS for the domain as soon as the transfer is completed.
</warning>

### Expiration extension

Most transferred domains will be extended the minimum required extension period. For example, `.com` domains will always be extended one year when they are transferred.

The price of this extension is included in the transfer fee.

### Ensure DNSSEC is disabled

If you are currently using DNSSEC, make sure to disable it at your registrar before changing the name servers.

Then you must [remove the current DS record](/articles/ds-records-changing-dns) before transferring your domain away from your current provider.

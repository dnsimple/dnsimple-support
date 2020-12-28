---
title: Transferring a Domain to Another DNSimple Account
excerpt: How to move a domain from one DNSimple account to another.
categories:
- Domains
- Domain Transfers
---

# Transferring a Domain to Another DNSimple Account

### Table of Contents {#toc}

* TOC
{:toc}

---

This article discusses how to move domains internally from one DNSimple account to another. This is different from transferring a domain away. To transfer a domain away from DNSimple, see [this article](https://support.dnsimple.com/articles/transferring-domain-away/).

You can transfer a domain between DNSimple accounts any time via the DNSimple interface. Billing responsibility will be transferred to the new domain account once the move is accepted. Moving a domain to another account will also transfer all associated resources, like DNS records, SSL certificates, and email forwards.

Working with a Reseller? Follow the steps outlined [here](#accepting-a-transfer) to gain access to your account.

<warning>
Once the transfer is accepted, you'll no longer be able to manage the domain.
<br /><br />
Transfers between DNSimple accounts are also subject to an [ICAAN-imposed lock after change of registrant](/articles/icann-60-day-lock-registrant-change/).
</warning>

## Initiating a transfer

To transfer a domain to another DNSimple account, go to the domain's management page, click on the _Settings_ tab and then follow the <label>Transfer ownership</label> link.

![](/files/transfer-ownership.png)

Enter the destination email address of another DNSimple account. Make sure the email address you enter matches the correct account. Once the domain has been transferred, you won't be able to control this domain under your current account.

## Accepting a transfer

If another DNSimple account holder (or Reseller) attempts to push a domain into your account, you have to accept it before it will be added. You'll receive a notification on your domain list indicating the pending push.

![](/files/pending-push-notification.png)

When you review your pending pushes, you'll see a list with the option to accept or reject the domain being pushed to you.

![](/files/pending-pushes.jpg)

Click the <label>Accept</label> button. You'll be prompted to assign an existing contact to the domain, or create a new contact. After you've assigned a contact, the domain will be transferred to your account. From there, you can configure it as needed.

## Rejecting a transfer

To reject a transfer, click the <label>Decline</label> button on the list of pending pushes, and confirm that you want to decline the push.

<info>
If you decline a transfer request, the domain will remain in the possession of the original owner.
</info>

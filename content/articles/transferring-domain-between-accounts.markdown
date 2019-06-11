---
title: Transferring a Domain to Another DNSimple Account
excerpt: How to move a domain from one DNSimple account to another.
categories:
- Domains
- Domain Transfers
---

# Transferring a Domain to Another DNSimple Account

This article discusses transferring domains to other DNSimple accounts (moving domains internally from one DNSimple account to another). This is different from transferring a domain away. To transfer a domain away from DNSimple, see [this article](https://support.dnsimple.com/articles/transferring-domain-away/). 

---

* TOC
{:toc}

---

You can transfer a domain between DNSimple accounts any time via the DNSimple interface. Billing responsibility will be transferred to the new domain account, once the move is accepted. Moving a domain to another account will also transfer all the associated resources, such as DNS records, SSL certificates, and email forwards.

<warning>
Once the transfer is accepted, you will no longer be able to manage the domain.
</warning>

## Initiating a transfer

To transfer a domain to another DNSimple account, go to the domain's management page, click on the _Settings_ tab and then follow the <label>Transfer ownership</label> link.

![](/files/transfer-ownership.png)

Enter the destination email address of another DNSimple account. Make sure the email address you enter matches the correct account. Once the domain has been transferred, you will no longer be able to control this domain under your current account.

## Accepting a transfer

If someone is attempting to push a domain into your account, you have to accept it before it will be added. You'll receive a notification on your domain list indicating the pending push.

![](/files/pending-push-notification.png)

When you review your pending pushes, you'll see a list with the option to accept or reject the domain being pushed to you.

![](/files/pending-pushes.jpg)

Click the <label>Accept</label> button where you'll be prompted to assign an existing contact to the domain or create a new one. After you have assigned a contact, the domain will be transfered to your account and you'll be able to configure it as needed.

## Rejecting a transfer

To reject a transfer, click the <label>Decline</label> button on the list of pending pushes and confirm that you want to decline the push.

<info>
If you decline a transfer request, the domain will remain in the posession of the original owner.
</info>

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

<info>
This article discusses how to transfer domains internally from one DNSimple account to another. This is different from transferring a domain away. To transfer a domain away from DNSimple, see [this article](https://support.dnsimple.com/articles/transferring-domain-away/).
</info>

You can transfer a domain between DNSimple accounts any time via the DNSimple interface. Billing responsibility will be transferred to the new domain account once the move is accepted. Transferring a domain to another account will transfer all associated resources, like DNS records, SSL certificates, and email forwards.

Working with a Reseller? Follow the steps outlined [here](#accepting-a-transfer) to gain access to your account.

<warning>
Once the transfer is accepted, anyone who previously had access to the domain in your account will no longer be able to manage the domain.

When transferring a domain to another DNSimple account, the domain's registrant information will be updated to reflect the new account. This may result in the domain being [locked from external transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).
</warning>

## Initiating a transfer

1. Click on the relevant domain. 
1. Click the **Settings** tab on the left side.
1. In the **Share or transfer domain** card, click **Transfer**.

    <!--- needs screenshot -->

1. Enter the destination email address of another DNSimple account.
1. Click **Move domain**.
1. A banner will appear confirming the request to push the domain. 

<warning>
Make sure to correctly enter the account email address, and use an [account email address](/articles/changing-account-email/), not a [user email address](/articles/changing-user-email/), otherwise the push will fail. **Once the transfer has been initiated, you won't be able to cancel the transfer on your own if the email is incorrect.** If the email is wrong, and you need to cancel the transfer, you will have to contact support for assistance. Once the domain is transferred, you can no longer control it under your current account.
</warning>

## Accepting a transfer

If another DNSimple account holder (this includes Resellers) attempts to push a domain into your account, you have to accept it before it will be added. You'll receive a notification on your domain list and an email to the account email address indicating the pending push.

![screenshot: Notification of pending pushes](/files/pending-push-notification.png)

When you review your pending pushes, you'll see a list with options to **Accept** or **Reject** the domain(s).

![screenshot: Accept or reject pending push](/files/pending-pushes.jpg)

Click **Accept**. You'll be prompted to assign a contact to the domain — this will typically be you or someone on your team. You can choose an existing contact or create a new one. After you've assigned a contact, the domain will be transferred to your account. From there, you can configure it as needed.

## Rejecting a transfer

To reject a transfer, click the **Reject** on the list of pending pushes, and confirm that you want to reject the push.

<info>
If you reject a transfer request, the domain will remain in the possession of the original owner. 
</info>

## Have more questions? 

If you need any assistance transferring domains to other DNSimple accounts or have more questions, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 

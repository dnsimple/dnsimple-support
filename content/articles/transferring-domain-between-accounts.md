---
title: Transferring a Domain to Another DNSimple Account
excerpt: How to move a domain from one DNSimple account to another.
meta: Learn how to easily transfer your domain between DNSimple accounts with our step-by-step guide, ensuring a smooth transition and continued management of your domain.
categories:
- Domains and Transfers
- Domains and Transfers
---

# Transferring a Domain to Another DNSimple Account

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> This article discusses how to transfer domains internally from one DNSimple account to another. This is different from transferring a domain away. To transfer a domain away from DNSimple, see [this article](https://support.dnsimple.com/articles/transferring-domain-away/).

You can transfer a domain between DNSimple accounts any time via the DNSimple interface. Billing responsibility will be transferred to the new domain account once the move is accepted. Transferring a domain to another account will transfer all associated resources, like DNS records, SSL certificates, and email forwards.

Working with a Reseller? Follow the steps outlined [here](#accepting-a-transfer) to gain access to your account.

> [!WARNING]
> Once the transfer is accepted, anyone who previously had access to the domain in your account will no longer be able to manage the domain.
> When transferring a domain to another DNSimple account, the domain's registrant information will be updated to reflect the new account. This may result in the domain being [locked from external transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).

## Initiating a transfer

> [!NOTE]
> Once the domain is transferred, you can no longer control it under your current account.

1. Click on the relevant domain.
1. Click the **Settings** tab on the left side.
1. In the **Move domain to another DNSimple account** card, click **Move**.
You will be prompted to enter the destination account identifier of the account that will receive the domain.

## How the recipient can find their account identifier

1. Open the **account switcher** in the **top-right corner** and select the correct account.
1. From the account switcher, click **Account Settings**.
1. On the left, make sure **General** is selected.
1. The **Account Identifier** appears in the **Account** card on the right, under the account name and notification email. They should copy that value and share it with you


## Completing the transfer

1. Enter the **destination account identifier**.
1. Click **Move domain**.
1. A banner will appear confirming the request to push the domain.

> [!WARNING]
> Make sure to correctly enter the account identifier. **Once the transfer has been initiated, you won't be able to cancel the transfer on your own if the identifier is incorrect.** If the identifier is wrong, and you need to cancel the transfer, you will have to contact support for assistance.

## Accepting a transfer

If another DNSimple account holder (this includes Resellers) attempts to push a domain into your account, you have to accept it before it will be added. You'll receive a notification on your domain list and an email to the account email address indicating the pending push.

![screenshot: Notification of pending pushes](/files/pending-push-notification.png)

When you review your pending pushes, you'll see a list with options to **Accept** or **Reject** the domain(s).

![screenshot: Accept or reject pending push](/files/pending-pushes.jpg)

Click **Accept**. You'll be prompted to assign a contact to the domain — this will typically be you or someone on your team. You can choose an existing contact or create a new one. After you've assigned a contact, the domain will be transferred to your account. From there, you can configure it as needed.

## Rejecting a transfer

To reject a transfer, click the **Reject** on the list of pending pushes, and confirm that you want to reject the push.

> [!NOTE]
> If you reject a transfer request, the domain will remain in the possession of the original owner.

## Have more questions?

If you need any assistance transferring domains to other DNSimple accounts or have more questions, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

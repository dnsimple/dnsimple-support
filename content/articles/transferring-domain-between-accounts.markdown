---
title: Transferring a domain to another DNSimple account
excerpt: How to move a domain from one DNSimple account to another.
categories:
- Domains
- Domain Transfers
---

# Transferring a domain to another DNSimple account

* TOC
{:toc}

---

You can transfer (_move_) a domain between DNSimple accounts at any time via the DNSimple interface. Billing responsibility will be transferred to the new domain account, once the move is accepted. Moving a domain to another account will also transfer all the associated resources, such as DNS records, SSL certificates and email forwards.

<warning>
Once the move is accepted, you will no longer be able to manage the domain.
</warning>

## Initiate move

To move a domain to another DNSimple account, go to the domain's management page, click on the _Settings_ tab and then follow the <label>Transfer ownership</label> link.

![](/files/transfer-ownership.png)

Enter a destination email address of another DNSimple account. Please be certain that the email address you enter matches the correct account. Once the domain is moved you will no longer be able to control this domain under your current account.

## Accept move

If someone is attempting to push a domain into your account you will first have to accept it before it will be added. You will receive a notification on your domain list indicating the pending push.

![](/files/pending-push-notification.png)

When you review your pending pushes you will see a list with the option to accept or reject the domain being pushed to you.

![](/files/pending-pushes.jpg)

Click the <label>Accept</label> button where you will be prompted to assign an existing contact to the domain or create a new one. After you have assigned a contact, the domain will be moved to your account and you will be able to configure it as needed.

## Reject move

To reject a move, simply click the <label>Decline</label> button on the list of pending pushes and confirm that you really want to decline the push.

<info>
If you decline a move request, the domain will remain in the posession of the original owner.
</info>

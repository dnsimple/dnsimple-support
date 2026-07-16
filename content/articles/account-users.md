---
title: Managing Multiple Members on One Account
excerpt: How to invite and remove members on a multi-user DNSimple account.
meta: Invite and remove members on Teams and Enterprise accounts. Set access levels and manage collaboration on a shared DNSimple account.
categories:
- Account
---

# Managing Multiple Members on One Account

### Table of Contents {#toc}

* TOC
{:toc}

---

Invite and remove members on accounts with multiple users. Each member signs in with their own user email and credentials.

> [!NOTE]
> To add multiple members to one account, you must [be subscribed to an eligible plan](https://dnsimple.com/pricing).

When you add someone to an account, they become a [member](/articles/users-accounts-and-members-at-dnsimple/#members) with their own user login and multi-factor authentication settings. You can set their [level of access](/articles/what-is-domain-access-control/) when you invite them. For how users, accounts, and members relate, see [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/). If you are onboarding a new team, follow the [First Steps Guide to Setting Up Your Team](/articles/guide-getting-started-with-your-team/).

## Adding members to an account {#adding-members-to-an-account}

<div class="section-steps" markdown="1">
##### To add a member to an account

1. Click the gear icon ⚙️ next to the account name in the account switcher to open <label>account settings</label>.

    ![Visit settings for selected account](/files/multiple-accounts-nav.png)

1. Select the <label>Members and seats</label> tab.

    ![Select the members tab](/files/add-member-account-link.png)

1. Click <label>Invite</label>. If there are no available seats on the account, the link will display <label>Add seats to invite new members</label>. You will need to add another seat before you can send the invitation.

    ![Add a new member](/files/add-member-link-members-screen.png)

1. 1. Enter the email address of the person you want to invite. They can already have a DNSimple user, or create one when they accept. Choose their access level when you send the invitation. See [What is Domain Access Control?](/articles/what-is-domain-access-control/).

    ![Add a new member form](/files/add-member-screen.png)

1. The invitation appears in the pending invitation section until the user accepts it. You can resend or remove a pending invitation. Removing it cancels the invitation immediately.

</div>

> [!NOTE]
> You cannot add a user whose email address matches the account notification email. First [change the notification email](/articles/changing-email/#setting-or-changing-the-notification-email) (we recommend a generic address such as `admin@` or `billing@`), then add the user.

## Removing members from an account {#removing-members-from-an-account}

<div class="section-steps" markdown="1">
##### To remove a member from an account

1.  Click the gear icon ⚙️ next to the account name in the account switcher to open <label>account settings</label>.

    ![Visit settings for selected account](/files/multiple-accounts-nav.png)

1. Select the <label>Members and seats</label> tab.

    ![Select the members tab](/files/add-member-account-link.png)

1. Click <label>Remove</label> for the member you want to remove, and confirm the removal.
1. After you remove them, that user no longer appears on the members tab, and you have an available seat for a new member. See [Managing Seats](/articles/managing-seats/) for seat management.

</div>

> [!NOTE]
> Members cannot remove themselves from an account. An account administrator must remove them.

## Managing member access {#managing-member-access}

To limit which domains each member can manage, use [Domain Access Control](/articles/domain-access-control/). For what each access level means, see [What is Domain Access Control?](/articles/what-is-domain-access-control/).

## Have more questions?

If you have questions about managing members on your account, [contact support](https://dnsimple.com/feedback), and we will be happy to help.

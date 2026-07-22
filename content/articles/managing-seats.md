---
title: Managing Seats
excerpt: How to add, remove, and manage seats and members on a DNSimple account.
meta: Manage seats on Teams and Enterprise plans. Add or remove seats, invite members to your DNSimple account, and set each member's level of access.
categories:
- Account
---

# Managing Seats

### Table of Contents {#toc}

* TOC
{:toc}

---

Manage how many members can access your DNSimple account and allocate seats on eligible plans.

> [!NOTE]
> Account seats for additional team members are only available on Teams or Enterprise plans.

The Teams plan includes one seat at no additional cost, allowing you to have one member actively involved in domain management. Any seats beyond the initial one incur extra costs. Enterprise plans have custom pricing and seat numbers. [See our pricing page for more details](https://dnsimple.com/pricing).

A DNSimple account can have one or more [members](/articles/users-accounts-and-members-at-dnsimple/#members). When you add a member, you can set their [level of access](/articles/what-is-domain-access-control/). For how users, accounts, and members relate, see [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/).

## Increasing the number of seats {#increasing-seats}

<div class="section-steps" markdown="1">
##### To increase the number of seats

1. Open <label>account settings</label> for the relevant account.
1. Select the <label>Members and seats</label> tab.
1. On the <label>Seats</label> card, click <label>Manage</label>.

    ![screenshot of manage seats link](/files/manage-seats.png)

1. Choose the desired number of seats.
1. Click <label>Update seats</label> to save your changes.

    ![screenshot of updating seats](/files/update-seats.png)

</div>

## Decreasing the number of seats {#decreasing-seats}

<div class="section-steps" markdown="1">
##### To decrease the number of seats

1. Open <label>account settings</label> for the relevant account.
1. Select the <label>Members and seats</label> tab.
1. On the <label>Seats</label> card, click <label>Manage</label>.
1. Choose the new seat quantity.
1. If the new seat count is lower than your current member count, remove excess members to match the new seat allocation. You will also see members who have been invited but have not accepted the invitation.

</div>

Below is an example of decreasing seats when the number of account members exceeds the newly selected seat count:

![Decreasing seats when the number of account members exceeds the newly selected seat count](/files/decreasing-seats.png)

<div class="section-steps" markdown="1">
##### To remove a member when decreasing seats

1. Click <label>Remove</label> for the member you want to remove, and confirm the removal.
1. After you remove them, that user no longer appears on the <label>Members</label> card.

</div>

## Inviting new members {#inviting-new-members}

<div class="section-steps" markdown="1">
##### To invite new members

1. Open <label>account settings</label> for the relevant account.
1. Select the <label>Members and seats</label> tab.
1. On the <label>Members</label> card, click <label>Invite</label>.

    ![screenshot invite team member](/files/invite-member.png)

1. If additional seats are required, click <label>Add seats to invite new members</label> to allocate more seats before sending the invitation.

</div>

You can increase the seat count and invite members in one process.

![Increasing seats to invite new members](/files/adding-seats-when-inviting-new-members.png)

> [!NOTE]
> You cannot add a user whose email address matches the account notification email. First [change the notification email](/articles/changing-email/#setting-or-changing-the-notification-email) (we recommend a generic address such as `admin@` or `billing@`), then add the user.

## Automatic seat allocation with SSO {#automatic-seat-allocation-with-sso}

If you have configured [single sign-on (SSO)](/articles/what-is-sso-at-dnsimple/) with [Google](/articles/google-identity-provider/), [Okta](/articles/okta-identity-provider/), or [Microsoft Entra](/articles/entra-identity-provider/), seat allocation can be managed automatically based on your organization configuration.

## Have more questions?

If you have questions about managing seats or upgrading to a plan that offers seats, [contact support](https://dnsimple.com/feedback), and we will be happy to help.

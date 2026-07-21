---
title: Account Notification Emails
excerpt: The automated account, billing, and security emails DNSimple sends, and which address receives each.
meta: DNSimple sends automated emails for security, billing, and account activity. Security emails go to your user email; billing and account notices go to the notification or billing email.
categories:
- Account
---

# Account Notification Emails

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple sends automated emails about account security, billing, and account activity. This article lists the account-level emails and which address receives each. Domain, DNS, and certificate notifications are documented in their own categories.

DNSimple routes account email to three kinds of addresses:

- **Your user email:** your personal sign-in address. See [user email and notification email](/articles/users-accounts-and-members-at-dnsimple/#user-email-and-notification-email).
- **Notification recipients:** the account [notification email](/articles/changing-email/#setting-or-changing-the-notification-email), or all account administrators if no notification email is set.
- **Billing recipients:** on eligible plans, the account billing email if one is set. Otherwise billing messages fall back to the notification recipients above.

## Security and sign-in emails {#security}

| Email | When DNSimple sends it | Sent to |
|---|---|---|
| Password reset link | You request a password reset. See [Forgot Password](/articles/forgot-password/). | Your user email |
| Password reset required | DNSimple requires you to reset your password before signing in again. | Your user email |
| Password changed | Your user password is changed. | Your user email |
| Email address change requested | A change to your user email is requested. | Your current user email |
| Email verification | You sign up, change your user email, or verify a contact email. | The address being verified |
| Sign-in method enabled | Single sign-on is enabled for your user. See [What is SSO at DNSimple](/articles/what-is-sso-at-dnsimple/). | Your user email |

For more on securing your account, see [Account Security](/articles/account-securing/) and [Multi-Factor Authentication](/articles/multi-factor-authentication/).

## Account access and membership emails {#access}

| Email | When DNSimple sends it | Sent to |
|---|---|---|
| Account invitation | You are invited to join an account as a member. | The invited address |
| New single sign-on member | A member signs in through single sign-on for the first time. | Notification recipients |
| Reauthorization needed | Your identity provider requires members to sign in again. | Notification recipients |
| Account reactivation | Reactivation of a canceled account begins. | Notification recipients |
| Activity or audit log export | You request an [activity](/articles/activity-tracking/) or audit log export. | The address that requested it |

## Billing and subscription emails {#billing}

These emails go to the account's billing recipients.

| Email | When DNSimple sends it |
|---|---|
| Trial period ending | Your trial period is about to end. |
| Payment receipt | A payment is collected. The subject ends in `Paid`. |
| Payment failed | DNSimple cannot collect a payment. The subject ends in `Failed Payment`. |
| Payment refunded | A payment is returned. The subject ends in `Refunded`. |
| Dunning notice | A subscription renewal payment fails. Sent as the [dunning period](/articles/account-invoice-history/#invoice-state-dunned) starts, continues, and reaches its final notice. |
| Subscription change reminder | A scheduled [plan change](/articles/changing-plans/) takes effect in one week. |
| Subscription change failed | DNSimple could not apply a scheduled plan change at renewal. |
| Low wallet funds | The [digital wallet](/articles/wallet-replenishment/) balance runs low. |

For how renewals and failed payments work, see [Subscription Renewals](/articles/subscription-renewals/) and [What Happens if I Stop Paying for My DNSimple Subscription?](/articles/what-happens-if-i-stop-paying/).

## Change these addresses {#change}

- Change your **user email** in [user settings](/articles/changing-email/#changing-the-user-email).
- Set or change the **notification email** in [account notification settings](/articles/changing-email/#setting-or-changing-the-notification-email).
- Set a separate **billing email** on eligible plans in [Billing Settings](/articles/billing-settings/).

## Have more questions?

If you have any questions about the emails DNSimple sends, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.

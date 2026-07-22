---
title: Account Glossary
excerpt: "Definitions for DNSimple Account terms including user, account, member, user email, notification email, billing email, seats, Domain Access Control roles, SSO, and MFA."
meta: "Account glossary for DNSimple terms: user, account, member, user email, notification email, billing email, seats, Full Access, Limited Access, Domain Manager, Zone Operator, SSO, MFA, and subscription."
categories:
- Account
---

# Account Glossary

### Table of Contents {#toc}

* TOC
{:toc}

---

A reference for Account terminology at DNSimple. For how users, accounts, and members fit together, see [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/).

## Users, accounts, and members {#users-accounts-and-members}

### User

A person who signs in to DNSimple. A user has credentials (user email and password, and MFA if enabled) and can belong to one or more accounts.

Learn more:

- [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/#users)
- [Multiple Accounts Per User](/articles/account-multi/)

### Account

A DNSimple workspace that holds a subscription, domains, billing settings, and (on eligible plans) members. You choose the active account from the account switcher.

Learn more:

- [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/#accounts)
- [Account Creation](/articles/account-creation/)

### Member

A user who has been invited into an account. Members sign in with their own user email and credentials. On Teams and Enterprise plans, members can be assigned seats and Domain Access Control permissions.

Learn more:

- [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/#members)
- [Managing Multiple Members on One Account](/articles/account-users/)

### Seat

A paid slot that allows a member to access an account on Teams or Enterprise plans. The Teams plan includes one seat; additional seats incur extra cost. Enterprise seat counts are custom.

Learn more:

- [Managing Seats](/articles/managing-seats/)

## Email addresses {#email-addresses}

### User email

The email address tied to a DNSimple user. It is used to sign in and to receive user-level messages such as password reset and email verification. It is not the same as a notification email.

Learn more:

- [Changing Email](/articles/changing-email/#changing-the-user-email)
- [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/#user-email-and-notification-email)

### Notification email

The email address where DNSimple sends account messages for a specific account, such as renewals and payment notices. If none is set, account administrators receive those messages by default.

Learn more:

- [Changing Email](/articles/changing-email/#setting-or-changing-the-notification-email)
- [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/#user-email-and-notification-email)

### Billing email

On Teams plans and higher, an optional address for invoice delivery. It is separate from the user email and from the notification email. A billing email alone does not grant account access.

Learn more:

- [Billing Settings](/articles/billing-settings/#changing-the-billing-email)

## Access and permissions {#access-and-permissions}

### Domain Access Control (DAC)

A feature on eligible plans that limits what each member can see and change, including access per domain. Combined with MFA and activity tracking, it supports least-privilege access.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/)
- [Domain Access Control](/articles/domain-access-control/)

### Full Access

An account-level access setting that lets a member use all resources in the account, including domains, contacts, certificates, templates, billing, and account settings.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#full-access)

### Limited Access

An account-level access setting that lets a member join the account without domain access until you grant Domain Manager or Zone Operator permissions on specific domains.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#limited-access)

### Domain Manager

A domain-level role for a member with Limited Access. A Domain Manager can manage the full domain, including DNS, registration details, certificates, and other domain operations where access is permitted.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#domain-manager)

### Zone Operator

A domain-level role for a member with Limited Access. A Zone Operator can manage only the DNS zone for that domain (records, import/export, One-click Services) and cannot change registration, billing, or other domain settings outside the zone.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#zone-operator)

### User token

An API token tied to a user. When used against an account, access follows the Domain Access Control permissions of that member.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#api-access)
- [Account tokens vs user tokens](/articles/api-access-token/#account-tokens-vs-user-tokens)

### Account token

An API token tied to an account. Account tokens have full account access for automation and are not limited by the Domain Access Control permissions of an individual member.

Learn more:

- [What is Domain Access Control?](/articles/what-is-domain-access-control/#api-access)
- [Account tokens vs user tokens](/articles/api-access-token/#account-tokens-vs-user-tokens)

## Sign-in and security {#sign-in-and-security}

### Single sign-on (SSO)

A way for users on eligible plans to sign in to DNSimple through an identity provider instead of (or in addition to) a password-only login.

Learn more:

- [What is SSO at DNSimple](/articles/what-is-sso-at-dnsimple/)

### Identity provider (IdP)

An external system that authenticates users for SSO. DNSimple supports Google, Okta, and Microsoft Entra as identity providers.

Learn more:

- [Google as an Identity Provider](/articles/google-identity-provider/)
- [Okta as an Identity Provider](/articles/okta-identity-provider/)
- [Entra as an Identity Provider](/articles/entra-identity-provider/)

### Multi-factor authentication (MFA)

An extra verification step at sign-in, such as a one-time password from an authenticator app or a security key. MFA is configured on the user, not on the account subscription.

Learn more:

- [Multi-Factor Authentication](/articles/multi-factor-authentication/)
- [Account Security](/articles/account-securing/)

### MFA enforcement

An account setting on eligible plans that requires every member to have MFA enabled before they can access the account.

Learn more:

- [Enforce Account-Wide Multi-Factor Authentication](/articles/multi-factor-authentication-enforcement/)

### Activity tracking

An audit log of actions in an account. Use it to review who changed domains, members, billing, or other settings.

Learn more:

- [Activity Tracking](/articles/activity-tracking/)

## Billing and subscription {#billing-and-subscription}

### Subscription

The recurring plan that keeps an account active for DNSimple services. Subscriptions renew on a billing cycle. Canceling or failing to pay can stop service while domains and records may remain in the account.

Learn more:

- [Subscription Renewals](/articles/subscription-renewals/)
- [Unsubscribe From Your DNSimple Plan](/articles/cancel-subscription/)
- [Reactivate Your Subscription](/articles/reactivate-subscription/)

### Dunned invoice

A renewal invoice that failed collection and is in the retry window. DNSimple retries periodically, and you can also retry manually from invoice history.

Learn more:

- [Account Invoice History](/articles/account-invoice-history/#invoice-state-dunned)
- [Subscription Renewals](/articles/subscription-renewals/#failed-renewal)

### Deactivated account

An account where DNSimple services have stopped. Domains using DNSimple name servers no longer resolve, auto-renewal and WHOIS privacy are disabled, and the domains, records, and account history remain in the account. Deactivation follows either a canceled subscription after failed payment, which you can resolve by reactivating, or a DNSimple restriction for billing, security, or policy reasons, which requires contacting support. Sometimes described as a suspended account.

Learn more:

- [Deactivated Account](/articles/account-deactivated/)
- [What Happens if I Stop Paying for My DNSimple Subscription?](/articles/what-happens-if-i-stop-paying/)
- [Reactivate Your Subscription](/articles/reactivate-subscription/)

## Have more questions?

If you have questions about Account terminology, [contact support](https://dnsimple.com/feedback), and we will be happy to help.

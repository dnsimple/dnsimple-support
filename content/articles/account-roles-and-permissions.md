---
title: Account Roles and Permissions
excerpt: A reference of the account and domain roles at DNSimple and what each role can do.
meta: Compare DNSimple account roles. Full Access and Limited Access are account-level roles. Domain Manager and Zone Operator are per-domain roles assigned through Domain Access Control.
categories:
- Account
---

# Account Roles and Permissions

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple has two account-level roles and two domain-level roles. Full Access and Limited Access apply to the whole account. Domain Manager and Zone Operator apply to a single domain and are assigned through [Domain Access Control](/articles/what-is-domain-access-control/).

For how these roles work and why per-domain permissions matter, see [What is Domain Access Control?](/articles/what-is-domain-access-control/). To assign roles, see [Domain Access Control](/articles/domain-access-control/).

> [!NOTE]
> Limited Access and the domain-level roles are available on eligible [plans](https://dnsimple.com/pricing). On other plans, every [member](/articles/users-accounts-and-members-at-dnsimple/#members) has Full Access.

## Account roles {#account-roles}

Account roles apply across the entire account.

### Full Access {#full-access}

A member with **Full Access** can use every resource in the account. This includes all domains, contacts, certificates, templates, billing, and account-level settings. It is the appropriate role for account administrators and trusted team members who manage the account as a whole.

### Limited Access {#limited-access}

A member with **Limited Access** can join and see the account but cannot access any domains until you grant permission. For each domain the member needs to work on, you assign either the Domain Manager or Zone Operator role.

## Domain roles {#domain-roles}

Domain roles apply to a single domain and are only available to members with Limited Access.

### Domain Manager {#domain-manager}

For an assigned domain, a **Domain Manager** can manage the full domain, not only its DNS zone:

- View and manage DNS records.
- Change registration details, including the registrant and name servers.
- Create certificates.
- Enable or disable the DNS service.
- Set up Vanity Name Servers, if available on the account.

A Domain Manager cannot manage billing or account-level settings.

### Zone Operator {#zone-operator}

For an assigned domain, a **Zone Operator** can manage only the DNS zone:

- View and change DNS records using the Record Editor and One-click Services.
- Import and export zone records.

A Zone Operator cannot change registration details, name servers, certificates, billing, or any setting outside the DNS zone.

## Permissions matrix {#matrix}

The account roles apply account-wide. The domain roles apply only to the domains where a member has been assigned that role.

| Capability | Full Access | Limited Access | Domain Manager | Zone Operator |
|---|:---:|:---:|:---:|:---:|
| Sign in and see the account | Yes | Yes | Yes | Yes |
| Manage billing, subscription, and payment | Yes | No | No | No |
| Manage account settings, members, and seats | Yes | No | No | No |
| Access every domain in the account | Yes | No | No | No |
| Manage DNS records for an assigned domain | Yes | No | Yes | Yes |
| Import and export zone records | Yes | No | Yes | Yes |
| Change registration details and name servers | Yes | No | Yes | No |
| Create and manage certificates | Yes | No | Yes | No |
| Enable or disable the DNS service | Yes | No | Yes | No |
| Configure Vanity Name Servers | Yes | No | Yes | No |

## Roles in the API {#api}

Roles apply to the DNSimple web interface and to **user tokens**. A member using their user token has the same permissions they have in the interface. A Zone Operator can use their user token to manage DNS records for a permitted domain, but cannot change registration details or billing.

**Account tokens** are not limited by these roles. An account token has full account access, similar to Full Access, and is intended for account-level automation. See [account tokens vs user tokens](/articles/api-access-token/#account-tokens-vs-user-tokens) for details.

## Have more questions?

If you have any questions about account roles or permissions, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.

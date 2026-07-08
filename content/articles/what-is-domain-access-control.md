---
title: What is Domain Access Control?
excerpt: What Domain Access Control is, why per-domain permissions matter, and what Full Access, Limited Access, Domain Manager, and Zone Operator mean.
meta: Domain Access Control lets eligible DNSimple accounts limit which members can manage which domains. Learn how access levels work in the DNSimple interface and API.
categories:
- Account
- Enterprise
---

# What is Domain Access Control?

### Table of Contents {#toc}

* TOC
{:toc}

---

Domain Access Control (DAC) lets you control what each [member](/articles/users-accounts-and-members-at-dnsimple/#members) of an account can see and change.

Instead of giving every member full access to every domain, DAC lets you assign access per person and per domain. This helps teams make sure each person has the access they need, without exposing unrelated domains, billing settings, or account-wide resources.

> [!NOTE]
> Domain Access Control is available on eligible [plans](https://dnsimple.com/pricing).

Combined with [multi-factor authentication](/articles/multi-factor-authentication/) and [activity tracking](/articles/activity-tracking/), DAC helps teams follow the principle of least privilege: each person gets only the access they need to do their work.

## Why granular access control matters {#why-it-matters}

In organizations with multiple members, not everyone needs full access to every domain. Some members may only need to manage DNS records for specific domains, while others may need broader access to registrations, contacts, certificates, or billing.

Without granular access control, a member with account access could make changes across the account, including changes to domains they do not need to manage. This increases the risk of accidental or unauthorized changes.

With Domain Access Control, you can limit access to sensitive domains while still allowing team members to work on the domains they are responsible for.

## How access works {#how-access-works}

Domain Access Control has two main access levels:

- **Full Access** gives a member access to all resources inside the account.
- **Limited Access** lets a member access only the domains you give them permission to manage.

When a member has Limited Access, you can assign a role for each domain they need to manage. The available domain-level roles are **Domain Manager** and **Zone Operator**.

> [!NOTE]
> A member must have Limited Access before you can fine-tune their access at the domain level.

## Access levels {#access-levels}

### Full access {#full-access}

A member with **Full Access** can use all resources inside the account. This includes all domains, contacts, certificates, templates, billing, and account-level settings.

Full Access is usually best for account administrators or trusted team members who need to manage the account as a whole.

### Limited access {#limited-access}

A member with **Limited Access** can join and see the account, but they cannot access any domains until you grant permission.

After a member has Limited Access, you can assign specific permissions for each domain they need to manage. For each domain, you can choose between the [Domain Manager](#domain-manager) and [Zone Operator](#zone-operator) roles.

Limited Access is useful when a team member only needs to work on specific domains, or when you want to keep sensitive domains restricted to a smaller group of people.

## Domain-level roles {#domain-level-roles}

### Domain Manager {#domain-manager}

For a specific domain, a **Domain Manager** can manage the full domain, not just its DNS zone.

A Domain Manager can:

- View and manage DNS records for the domain.
- Change registration details, including the registrant and name servers.
- Create new certificates.
- Disable DNS service.
- Set up Vanity Name Servers, if available on the account.
- Perform other domain-level operations where access is permitted.

Use this role when someone needs to manage most settings for a specific domain, but does not need full access to the entire account.

### Zone Operator {#zone-operator}

For a specific domain, a **Zone Operator** can manage only the DNS zone.

A Zone Operator can:

- View and change DNS records in the zone using the Record Editor and One-click Services.
- Import and export zone records for the zone.

A Zone Operator cannot change registration details, billing, certificates, name servers, or other domain settings outside the DNS zone.

Use this role when someone only needs to manage DNS records for a domain.

## API access {#api-access}

Domain Access Control applies to the DNSimple web interface and to **user tokens**.

If a member accesses a domain through their user token, their API access follows the same permissions they have in the DNSimple interface. For example, a Zone Operator can use their user token to manage DNS records for a domain where they have access, but they cannot manage registration details or billing.

This applies to user tokens only.

**Account tokens** are different. Account tokens have full account access, similar to a member with Full Access. They are designed for account-level automation and are not limited by an individual member's Domain Access Control permissions.

This distinction is important when designing automated systems or integrations that need to access domains with limited permissions.

See [account tokens vs user tokens](/articles/api-access-token/#account-tokens-vs-user-tokens) for more details.

## Configure access {#configure-access}

To set or change access for members and domains, see [Domain Access Control](/articles/domain-access-control/).

That article includes the video walk-through, screenshots, and step-by-step instructions for configuring access by member or by domain.

## Have more questions?

If you have questions about Domain Access Control or how to implement it for your organization, [contact support](https://dnsimple.com/feedback), and we will help you get sorted.

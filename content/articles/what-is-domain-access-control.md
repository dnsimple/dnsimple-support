---
title: What is Domain Access Control?
excerpt: What Domain Access Control is, why per-domain permissions matter, and what Full Access, Limited Access, Domain Manager, and Zone Operator mean.
meta: Domain Access Control lets Teams and Enterprise accounts limit which members can manage which domains. Learn the access levels and how they apply to the DNSimple interface and API.
categories:
- Account
- Enterprise
---

# What is Domain Access Control?

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> Domain Access Control is available on eligible [plans](https://dnsimple.com/pricing).

Domain Access Control (DAC) lets you limit what each **member** of an account can see and change. Instead of giving everyone full access to every domain, you assign access per person and per domain.

Combined with [multi-factor authentication](/articles/multi-factor-authentication/) and [activity tracking](/articles/activity-tracking/), DAC helps teams follow the principle of least privilege: people get only the access they need.

## Why granular access control matters {#why-it-matters}

On accounts with multiple members, not everyone needs to manage billing, every domain, or every DNS zone. Without DAC, any member with account access could change any domain in the account.

DAC reduces the risk of accidental or unauthorized changes to critical domains while still letting team members work on the domains they are responsible for.

## Access levels {#access-levels}

### Full access {#full-access}

A member with **Full Access** can use all resources in the account: all domains, contacts, certificates, templates, and billing.

### Limited access {#limited-access}

A member with **Limited Access** can see the account but cannot access domains until you grant permission. You then assign a role per domain.

### Domain Manager {#domain-manager}

For a specific domain, a **Domain Manager** can manage the full domain, including DNS zone and records, registration details, name servers, certificates, and other domain operations where access is permitted.

### Zone Operator {#zone-operator}

For a specific domain, a **Zone Operator** can manage only the DNS zone: view and edit DNS records, and import or export zone files. A Zone Operator cannot change registration details, billing, or other domain settings outside the zone.

## API access {#api-access}

DAC applies to the DNSimple web interface and to **user tokens**. A member's API access matches their role.

**Account tokens** have full account access, similar to a member with Full Access. See [account tokens vs user tokens](/articles/api-access-token/#account-tokens-vs-user-tokens).

## Configure access {#configure-access}

To set or change access for members and domains, see [Domain Access Control](/articles/domain-access-control/).

## Have more questions?

If you have questions about Domain Access Control or how to implement it for your organization, [contact support](https://dnsimple.com/feedback), and we will help you get sorted.

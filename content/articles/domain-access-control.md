---
title: Domain Access Control
excerpt: Control what each account member can access on a per-domain or per-zone basis.
meta: Learn about Domain Access Control, how granular access permissions work, and why they matter for team security and domain management.
categories:
- Account
- Domains
- Enterprise
---

# Domain Access Control

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> Domain Access Control is only available on eligible [plans](https://dnsimple.com/pricing).

The Domain Access Control feature lets you set the level of access for each team member in your account. Take control over who can access and manage your organization's domains, and ensure access is limited based on your needs.

Combined with other DNSimple security features, like [multi-factor authentication (MFA)](/articles/multi-factor-authentication/) and [activity tracking](/articles/activity-tracking/), your domains are as secure as possible in your DNSimple account.

## Why granular access control matters

In organizations with multiple team members, not everyone needs full access to all domains. Some team members may only need to manage DNS records for specific domains, while others may need broader access. Domain Access Control implements the principle of least privilege, granting users only the access they need to perform their work. This reduces the risk of accidental or malicious changes to critical domains and provides better security isolation.

Without granular access control, any user with account access can modify any domain, which increases the risk of unauthorized changes or mistakes. With Domain Access Control, you can limit access to sensitive domains while still allowing team members to work on domains they need to manage.

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/GlC2uvevIlc?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Setting access for a team member

Access for team members can be configured at the account level, allowing you to set roles for multiple domains at once. Team members can be assigned either [**Full Access**](#full-access) or [**Limited Access**](#limited-access) across all domains in the account.

![Manage Access](/files/manage-access.png)

### Full access

Any team member can be granted **Full Access**. This gives them access to all resources inside an account – including all domains, contacts, certificates, templates, and billing.

![Full Access](/files/domain-access-control-full-access.png)

### Limited access

You can specify **Limited Access** when inviting a team member. The new team member will be able to join and see the account, but cannot access any domains until you grant permission.

![screenshot: invite a user with limited access](/files/invite-with-limited-access.png)

If you invited someone with full access and want to change it, team members can be granted access to specific domains by setting their permission to **Limited Access**. When limited access is configured, you can assign specific roles for each domain, choosing between [Zone Operator](#zone-operator) or [Domain Manager](#domain-manager) permissions.

![screenshot: set team member as limited access](/files/limited-access-team-member.png)

![screenshot: assign roles per domain](/files/roles-per-domain.png)

## Setting access for a domain

> [!NOTE]
> A team member must have limited access before you can fine-tune their access at the domain level.

Domain Access Control can be configured for individual domains, allowing you to set specific permissions for each team member on a per-domain basis. This provides granular control over who can access and modify each domain in your account.

![screenshot: roles per domain](/files/access-per-domain.png)

### Domain Manager

Domain Managers can access all functionality under a specific domain. In addition to managing the zone, Domain Managers can:

- Change registration details for a domain – including the registrant and name servers.
- Create new certificates.
- Perform all other operations on a domain where access is permitted.
- Disable DNS service.
- Set up Vanity Name Servers (if available on your account).

![Domain Manager](/files/domain-access-control-domain-manager.png)

### Zone Operator

Team members with the Zone Operator role for a domain only have access to the DNS zone. They can:

- View and make changes to the DNS records in the zone using the Record Editor and One-click Services.
- Import and export zone records for the zone.

![Zone Operator](/files/domain-access-control-zone-operator.png)

## API access

If a team member accesses a domain in an account via their user token, they'll have the same level of access as defined by their role. A Zone Operator can use their user token to manage a zone, but not other parts of the domain.

**This applies to user tokens only**. Account tokens have full access, similar to a team member with full account access.

> [!NOTE]
> [Learn the difference](/articles/api-access-token/#account-tokens-vs-user-tokens) between account tokens and user tokens.

API access respects the same access control rules as the web interface. This means that programmatic access through the API is subject to the same restrictions as manual operations through the dashboard. User tokens are tied to individual user accounts and inherit that user's access permissions, while account tokens are designed for system-level operations and bypass user-level restrictions. This distinction is important when designing automated systems or integrations that need to access domains with limited permissions.


## Have more questions?

If you have any questions about Domain Access Control or how to implement it for your organization, [contact support](https://dnsimple.com/feedback), and we'll help you get sorted.

Want to limit access to other parts of your DNSimple accounts? [Let us know](https://dnsimple.com/feedback) what permissions you're interested in, and you may see it in a future feature release.

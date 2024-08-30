---
title: Domain Access Control
excerpt: Control what each account member can access on a per-domain or per-zone basis.
categories:
- Account
- Domains
---

# Domain Access Control

### Table of Contents {#toc}

* TOC
{:toc}

---

<info>
Domain Access Control is only available on eligible [plans](https://dnsimple.com/pricing).
</info>

The Domain Access Control feature lets you set the level of access for each team member in your account. Take control over who can access and manage your organization's domains, and ensure access is limited based on your needs.

Combined with other DNSimple security features, like [multi-factor authentication (MFA)](/articles/multi-factor-authentication/) and [activity tracking](/articles/activity-tracking/), your domains are as secure as possible in your DNSimple account.

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/GlC2uvevIlc?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Setting access for a team member

To set a team member's role for multiple domains at once:

1. Go to your Account page.
1. Click the **Members and seats** tab on the left side. On the Members card, you'll find each team member along with **Manage Access** and **Remove** buttons.
1. Click **Manage Access** on a specific team member to configure their access level as [**Full Access**](#full-access) or [**Limited Access**](#limited-access).

![screenshot: set team member access](/files/team-member-access.png)

### Full access

Any team member can be granted **Full Access**. This gives them access to all resources inside an account – including all domains, contacts, certificates, templates, and billing.

![Full Access](/files/domain-access-control-full-access.png)

### Limited access

You can specify **Limited Access** when inviting a team member. The new team member will be able to join and see the account, but cannot access any domains until you grant permission.

![screenshot: invite a user with limited access](/files/invite-with-limited-access.png)

If you invited someone with full access and want to change it, team members can be granted access to specific domains by setting their permission to **Limited Access**.

1. Click **Manage access** for the specific team member.
1. Select **Limited Access**.
1. You'll see a list of each domain in your account, along with dropdown menus with options for [Zone Operator](#zone-operator) or [Domain Manager](#domain-manager).

    ![screenshot: set team member as limited access](/files/limited-access-team-member.png)

4. You can search for specific domains, or enter a role to view domains for which that team member has been assigned a role.

    ![screenshot: assign roles per domain](/files/roles-per-domain.png)

## Setting access for a domain

<info>
A team member must have limited access before you can fine-tune their access at the domain level.
</info>

You can set up the Domain Access Control feature for any individual domain.

1. Locate and click the domain you want to set access for in your Domain List.
1. Choose the **Access control** tab at the bottom left.
1. You'll see a list of all team members along with their current role. Use the drop down menu to update the type of access they have to each specific domain.

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

<info>
[Learn the difference](/articles/api-access-token/#account-tokens-vs-user-tokens) between account tokens and user tokens.
</info>


## Have more questions?

If you have any questions about Domain Access Control or how to implement it for your organization, [contact support](https://dnsimple.com/feedback), and we'll help you get sorted.

Want to limit access to other parts of your DNSimple accounts? [Let us know](https://dnsimple.com/feedback) what permissions you're interested in, and you may see it in a future feature release.

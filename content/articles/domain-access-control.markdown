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
**Domain Access Control** is only available on [eligible plans](https://dnsimple.com/pricing).
</info>

With the Domain Access Control feature, you can set the level of access for each team member in your account.

## Setting access for a team member

To set a team member's role for multiple domains at once, go to the Account > Members page. Click on the Manage Access button to configure the team member's access. You can give the team member [Full Access](#full-access) or [Limited Access](#limited-access). 

![Account Member's Page](/files/domain-access-control-members-page.png)

### Full Access

Any team member can be granted "Full Access". This gives them access to all resources inside an account – including all domains, contacts, certificates, templates, and billing.

![Full Access](/files/domain-access-control-full-access.png)

### Limited Access

A team member can be granted access to specific domains by first setting their permission to "Limited Access". From there, you'll see a list of your account's domains, along with a control to set them as a [Zone Operator](#zone-operator) or [Domain Manager](#domain-manager) for each domain in the account. You can also enter part of a domain name, and you'll only see domains matching that search part, or you can enter a role name, and see the domains where the team member has that role.

![Limited Access](/files/domain-access-control-limited-access.png)

<info>
If you specify "Limited Access" when inviting a team member, the new team member will see the account, but won't be able to access any domains until you grant permission.
</info>

## Setting access for a domain

You can set up the Domain Access Control feature for any individual domain by going to the Example.com > Members page. There, you'll see a list of all team members along with their current role and be able to update their access.

![Domain's Member Page](/files/domain-access-control-domain-page.png)

### Domain Manager

Domain Managers can access all functionality under a specific domain. In addition to managing the zone, Domain Managers may change registration details for a domain, including the domain's registrant and the name servers for the domain, create new certificates, and perform all of the other operations on a domain where access is permitted.

A team member with the Domain Manager role can also disable DNS service for the domain completely and can set up Vanity Name Servers, if that feature is available on your account.

![Domain Manager](/files/domain-access-control-domain-manager.png)

### Zone Operator

Team members with the Operator role for a domain only have access to the DNS zone for that domain. They can see and make changes to the DNS records in the zone using the DNS editor and one-click services.

Team members with the Zone Operator role on a domain can view and change one-click services used for a zone and can add or remove DNS records for the domain's zone. They can also import and export zone records for the zone.

![Zone Operator](/files/domain-access-control-zone-operator.png)

## API Access

If a team member uses their user token to access a domain in an account, they'll have the same level of access as defined by their role. So an Operator on a domain will be able to use their user token to manage a zone, but not other parts of the domain.

Note that this is for user tokens only. Account tokens currently still have full access, similar to a team member with full account access.

## Conclusion

With Domain Access Control you now have more control over who on your team can access and manage your organization's domains. You can ensure domain access is limited based on your needs. Combined with other DNSimple security features, like two-factor authentication and activity logging, your domains remain secure in your DNSimple account.

If you're interested in limiting access to other parts of your DNSimple accounts, please [reach out](https://dnsimple.com/contact), and let us know.

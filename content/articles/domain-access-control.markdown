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

With the Domain Access Control feature, you can control what each member can access on a per-domain or per-zone basis. There are three levels of access you may assign to team members: [Full Account Access](#full-access), [Domain Manager](#domain-manager) and [Zone Operator](#zone-operator).

<!-- [Account Owner](#account-owner),  -->


## How It Works

You can set up the Domain Access Control feature for any individual domain by going to YourDomain.com > Members tab. There, you will see a list of all team members along with their current role and be able to update their access.

To set a team member's role for multiple domains at once, you can go to the Account > Members page and use the Manage Access button to configure the team member's domain access. You'll have the option to give the team member Full Access or Limited Access. When you select Limited Access, you will then see a list of your account's domains and a control for selecting the role for the member on the domain. You can also enter part of a domain name and you will see only domains matching that search part, or you can enter a role name and you will see the domains where the team member has that role.

When you invite a new team member to an account, you may select whether they have Full or Limited Access. A newly invited team member receives an email with a link to join your team. If you specify Limited Access, then the new team member will see the account, but will have no access until to you grant permission to specific domains.

<!-- ## What is an account admin? -->
<!-- An Account Owner will have full access to the account and all of its resources. They cannot be removed from the account. -->

## What is Full Account Access?

Any team member may be given full access to the account, which gives them access to all domains and full account management.

A member with Full Account Access will have full access to the account and all of its resources.

## What is Limited Access?

Stuff.

## What's a Zone Operator?

A Zone Operator of a domain will be able to manage the DNS records of the granted domain. This team member will only have access to the granted domains.

Let's start with the Operator role. Team members with the Operator role for a domain may only access the DNS zone for that domain. They are permitted to see and make changes to the DNS records in the zone using the DNS editor and one-click services.

Team members with the Zone Operator role on a domain will be able to view and change one-click services used for a zone and can add or remove DNS records for the domain's zone. They can also import and export zone records for the zone.

## What's a Domain Manager?

A Domain Manager of a domain will be able to manage the DNS records and certificates of the granted domain. This team member will only have access to the granted domains.

Next is the Domain Manager role. Domain Managers may access all functionality under a specific domain. In addition to managing the zone, Domain Managers may change registration details for a domain, including the domain's registrant and the name servers for the domain, create new certificates, and perform all of the other operations on a domain where access is permitted.

A team member with the Domain Manager role on a domain can perform all of the operations that a Zone Operator can perform, as well as all registration and delegation operations on the domain. This includes the permission to change the name servers for a domain, request SSL certificates, manage email forwarding on the domain, manage DNSSEC, and enable vanity name servers if permitted by your plan.

[]

A team member with the Domain Manager role can also disable DNS service for the domain completely and can set up Vanity Name Servers, if that feature is available on your account.

## What about API Access?

If a team member uses their user token to access a domain in an account, then they will have the same level of access as defined by their role. Thus, an Operator on a domain will be able to use their user token to manage a zone, but not other parts of the domain.

Note that this is for user tokens only. Account tokens currently still have full access similar to a team member with full account access.

## Conclusion

With Domain Access Control you now have more control over who on your team can access and manage your organization's domains. You can ensure that domain access is properly limited based on your needs. Combined with other DNSimple security features like two-factor authentication and activity logging, your domains remain secure in your DNSimple account.

If you are interested in limiting access to other parts of your DNSimple accounts, please reach out to us at support and let us know.

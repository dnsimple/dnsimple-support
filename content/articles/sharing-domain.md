---
title: Sharing Domain Management with Other Users
excerpt: With DNSimple, you can share a domain with other users to share management.
categories:
- Domains
---

# Sharing Domain Management with Other Users

<info>
Starting July 2024, shared domains are being deprecated in favor of our [Domain Access Control](/articles/domain-access-control) feature. Check our [blog](https://blog.dnsimple.com) for the latest information.
</info>

In DNSimple, you can share a domain with other users so they can manage it. That way, if you have a large organization, you can share access to the domains with one or more users.

You can share DNS management responsibilities with others, but you can't give them privileges to add or modify domain registrations, transfers, or SSL certificates.

To set up domain management sharing, go to your domain settings, click on the link "Share management", then "Share with another user".

![Share Management](/files/share-management-card.png)

Enter the user's email address and click "Share". If they already have an account with DNSimple, they will see an alert in their dashboard where they can "Accept" the invitation. 

![Dashboard shared domain alert](/files/shared-domain-dashboard-alert.png)

To accept the invitation, the user must choose which account they will see the domain in (for their eyes only).

![Accepting a shared domain](/files/shared-domain-accept.png)

If they don't have an account, an invitation email will be sent indicating that a domain has been shared with them and that they can create an account to manage that domain.

Accounts that have access to a shared domain are limited as to what they can do with the domain. They can only add, edit, and remove records from the domain or add and remove services. They can't renew domains, change domain contact information, delete the domain, etc. The [full list of restrictions](#limitations) is available below.

If you're only working on shared domains, you don't need to activate your account.

## Limitations

Users given shared management **will not** be able to:

- Transfer a domain in to or out of your account.
- Renew a domain in your account.
- Register or add a domain to your account.
- Enable or disable auto-renewal for domains in your account.
- Delete a domain from your account.
- Access any domain other than the ones you give them permission to manage.
- Share the domain with another user.

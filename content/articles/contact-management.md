---
meta: This article explains how to manage your contacts for your domains and SSL certificates.
title: Managing your contacts
excerpt: This article explains how to manage your contacts for your domains and SSL certificates.
categories:
- Contacts
---

# Managing your contacts

* TOC
{:toc}

## The importance of a contact

Contacts are more than just a detail when you register a new domain or purchase a new SSL certificate. This article explains why they're important and how you can manage them within DNSimple.

A contact must have correct, up-to-date information, because you might be contacted by [ICANN for contact verification](/articles/icann-domain-validation/) after purchasing a domain.

Use an email address that does not belong to the custom domain you're managing. If the domain becomes unavailable, expires, or is not configured correctly, you might not be able to receive notifications. This list of [8 tips for domain management](https://blog.dnsimple.com/2017/05/domain-management-tips/) has more ideas on how to avoid potential issues with your domains.

Contacts are tied to your account. If you use multiple accounts, make sure you're under the correct account when looking for your contacts.

## Creating a new contact

If your account does not have any contact when registering a domain or getting a new SSL certificate, you'll be prompted to create a contact during this flow. You'll only need to do this once. Once a contact is created, it's available for future operations.

![creating a contact during domain registration](/files/contact-creation.png)

You can also create a new contact at any time through the contact page.

![creating a new contact](/files/change-contact-1.png)

## Updating contacts

If a contact is associated with a domain, updating that contact updates all the contact information associated with these domains. You don't need to individually update these domains if they point to the same contact.

If you want to update a specific domain only, you can either [replace the contact entirely](/articles/changing-domain-contact/#replacing-a-domain-contact) with a new one, or [update the contact](/articles/changing-domain-contact/#updating-a-domain-contact).

<warning>
Changing or updating your domain contact information may result in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).
</warning>

### Deleting a contact

If a contact is associated with at least one domain or SSL certificate, this contact cannot be deleted. You must remove all associated domains or SSL certificates with the contact before you can delete it.

In the screenshot below, the only contact without any association is the last one. If you can delete a contact, a "deletion" icon will appear next to it.

![contact deletion](/files/contact-delete.png)

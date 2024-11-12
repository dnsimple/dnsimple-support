---
title: Managing Your Contacts
excerpt: This article explains how to manage your contacts for your domains and SSL certificates.
categories:
- Contacts
---

# Managing Your Contacts

* TOC
{:toc}

## Why domain contacts are important

Domain contacts are required for registering a new domain or purchasing a new SSL certificate.

A contact must have correct, up-to-date information, as it may be used by [ICANN for contact verification](/articles/icann-domain-validation/) after purchasing a domain. If the information is incorrect you  may not recieve the validation request. Failure to validate your registrant email address results in suspension of the domain name after 15 days of non-compliance. 

Use an email address that does not belong to the custom domain you're managing (e.g. if you own `example.buisness`, don't use `Hello@example.business`). If the domain becomes unavailable, expires, or is not configured correctly, you might not be able to receive notifications. Read this list of [8 tips for domain management](https://blog.dnsimple.com/2017/05/domain-management-tips/) for more ways to avoid potential issues with your domains.

Contacts are tied to your account. If you use multiple accounts, make sure you're under the correct account when looking for your contacts.

## Creating a new contact

If this is the first time you're registering a domain or ordering a new SSL certificate, and you haven't created any contacts yet, you'll be prompted to create one during this flow. Once a contact is created, it's available for future domain management operations.

![creating a contact during domain registration](/files/contact-creation.png)

You can also create a new contact at any time through the contact page.

![creating a new contact](/files/change-contact-1.png)

## Updating contacts

If a contact is associated with a domain, updating that contact also updates all the contact information associated with these domains. You don't need to individually update these domains if they're associated with the same contact.

To update the contact for a specific domain, you'll need to [replace the contact](/articles/changing-domain-contact/#replacing-a-domain-contact) with a new one.

<warning>
Changing or updating your domain contact information may result in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).
</warning>

### Deleting a contact

If a contact is associated with at least one domain or SSL certificate, this contact cannot be deleted. You must remove all associated domains or SSL certificates with the contact before you can delete it.

In the screenshot below, the only contact without any association is the last one. If you can delete a contact, a "deletion" icon will appear next to it.

![contact deletion](/files/contact-delete.png)

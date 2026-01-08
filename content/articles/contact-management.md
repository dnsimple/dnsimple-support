---
title: Managing Your Contacts
excerpt: This article explains how to manage your contacts for your domains and SSL certificates.
categories:
- Contacts
---

# Managing Your Contacts

* TOC
{:toc}

> [!INFO]
> These instructions apply only to domains registered with DNSimple. If you are hosting the domain with us, and the domain is registered elsewhere, you will have to manage the contact information at your current registrar, or transfer the domain to DNSimple.

## Why domain contacts are important

For domains registered with DNSimple, [Domain Managers](/articles/domain-access-control/#domain-manager) and anyone with [Full Access](/articles/domain-access-control/#full-access) can manage contacts associated with domains.

Domain contacts are required for registering a new domain or purchasing a new SSL certificate. Domain contact information is associated with accounts rather than individual users. Adding someone as a domain contact does not give them access to your DNSimple account or user.

A contact must have correct, up-to-date information, as it may be used by [ICANN for contact verification](/articles/icann-domain-validation/) after purchasing a domain. If the information is incorrect the contact  may not recieve the validation request. Failure to validate the registrant email address will result in suspension of the domain name after 15 days of non-compliance. 

Use an email address that does not belong to the custom domain you're managing (e.g. if you own `example.buisness`, don't use `Hello@example.business`). If your email is tied to the domain, and it becomes unavailable, expires, or is not configured correctly, you might not be able to receive notifications. 

Read this list of [8 tips for domain management](https://blog.dnsimple.com/2017/05/domain-management-tips/) for more ways to avoid potential issues with your domains.

## Creating a new contact

If this is the first time you're registering a domain or ordering a new SSL certificate, and you haven't created any contacts yet, you'll be prompted to create one during this flow. Once a contact is created, it's available for future domain management operations.

![creating a contact during domain registration](/files/contact-creation.png)

You can also create a new contact at any time through the **Contacts** page.

![creating a new contact](/files/change-contact-1.png)

## Updating contacts

If a contact is associated with multiple domains, updating that contact also updates all the contact information associated with these domains. You don't need to individually update these domains if they're associated with the same contact.

To update the contact for a specific domain, you will need to [replace the domain contact](/articles/changing-domain-contact/#replacing-a-domain-contact) with a new one.

> [!INFO]
> When a domain contact has been changed, you will receive a confirmation email from no-reply@ispapi.net. You may also see a message that the contact change results in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).

### Deleting a contact

If a contact is associated with at least one domain or SSL certificate, this contact cannot be deleted. You must remove all associated domains or SSL certificates with the contact before you can delete it.

If you can delete a contact, you will see a trash can icon next to their name. 

![contact deletion](/files/contact-delete.png)

## Have more questions?

If you have any further questions or need assistance with your domain contacts, [contact our support team](https://dnsimple.com/contact), and we'll be happy to help.

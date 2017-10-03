---
title: Managing your contacts
excerpt: This article explains how to manage your contacts for your domains and SSL certificates.
categories:
- Contacts
---

# Managing your contacts

* TOC
{:toc}

## The importance of a contact

Even though contacts seem to be a detail when you register a new domain or purchase a new SSL certificate, this article will explain why they are important and how you can manage them within DNSimple.

It is critical for a contact to have the correct and latest up to date information since you might be contacted by [ICANN for contact verification](/articles/icann-domain-validation/) after purchasing a domain.

Ideally, use an email address that does not belong to the custom domain that you are managing. If the domain becomes unavailable, expires, or is not configured correctly, you might not be able to receive notifications. Have a look at this list of [8 tips for domain management](https://blog.dnsimple.com/2017/05/domain-management-tips/) for more ideas on how to avoid potential issues with your domains.

Contacts are tied to your account. If you use multiple accounts, make sure you are under the correct account when looking for your contacts.

## Creating a new contact

If your account does not have any contact when registering a domain or getting a new SSL certificate, you'll be prompted to create a contact during this flow. You'll need to do this only once. Once a contact is created, it is available for future operations.

![creating a contact during domain registration](/files/contact-creation.png)

You can also create a new contact at any time through the contact page.

![creating a new contact](/files/change-contact-1.jpg)

## Updating contacts

If a contact is associated with a domain, updating that contact updates all the contact information associated with these domains. You don't need to individually update these domains if they point to the same contact.

If you wish to update a specific domain only, you can either [replace the contact entirely](/article/changing-domain-contact/#replacing-a-domain-contact) with a new one, or [update the contact](/articles/changing-domain-contact/#updating-a-domain-contact) like we just mentioned to make that change.

### Contact lock

If the contact is associated with multiple domains, we'll notify you of which domains could potentially be locked for 60 days due to the new [ICANN policies](/articles/icann-60-day-lock-registrant-change/).

![locked domains](/files/contact-lock.png)

### Deleting a contact

If a contact is associated with at least one domain or SSL certificate, this contact cannot be deleted. You would need to remove all associated domains or SSL certificates with the contact before being able to delete it.

In the screenshot below, the only contact without any association is the last one. If you can delete a contact, a "deletion" icon will appear next to the contact.

![contact deletion](/files/contact-delete.png)

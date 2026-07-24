---
title: Managing Your Contacts
excerpt: How to create, update, and delete the domain contacts in your DNSimple account.
meta: Create, update, and delete domain contacts in your DNSimple account. Keep contact information accurate to avoid ICANN verification issues.
categories:
- Contacts
---

# Managing Your Contacts

### Table of Contents {#toc}

* TOC
{:toc}

---

Domain contacts hold the registrant details required to register a domain or order an SSL certificate. Contacts belong to your account rather than to an individual user, so adding someone as a contact does not give them access to your DNSimple account. You manage them from the <label>Contacts</label> tab in the header.

> [!NOTE]
> These instructions apply only to domains registered with DNSimple. If you are hosting the domain with us, and the domain is registered elsewhere, you will have to manage the contact information at your current registrar, or transfer the domain to DNSimple.

## Why domain contacts are important {#why}

For domains registered with DNSimple, [Domain Managers](/articles/what-is-domain-access-control/#domain-manager) and anyone with [Full Access](/articles/what-is-domain-access-control/#full-access) can manage contacts associated with domains.

A contact must have correct, up-to-date information, because it may be used for [ICANN contact verification](/articles/icann-domain-validation/) after you register a domain. If the information is incorrect, the contact may not receive the validation request. Failure to validate the registrant email address results in suspension of the domain name after 15 days of non-compliance.

Contacts may also receive [NIS2 contact email verification](/articles/nis2-contact-verification/), which confirms the address is reachable but does not suspend the domain.

Use an email address that does not belong to the domain you are managing. If you own `example.business`, do not use `hello@example.business`. If your email is tied to the domain, and the domain becomes unavailable, expires, or is not configured correctly, you might not receive notifications.

For what each field requires, see the [domain contact field reference](/articles/domain-contact-field-reference/).

## Creating a new contact {#create}

If you are registering a domain or ordering an SSL certificate for the first time and have not created any contacts yet, you will be prompted to create one during that flow. Once a contact is created, it is available for future domain management operations.

![creating a contact during domain registration](/files/contact-creation.png)

You can also create a contact at any time from the <label>Contacts</label> tab.

![creating a new contact](/files/change-contact-1.png)

> [!NOTE]
> If the email address on the contact has not been verified to comply with [NIS2 regulations](https://nis2directive.eu/what-is-nis2/), you will receive a verification email. Follow the link in the email to complete the verification. For details, see [NIS2 Contact Email Verification](/articles/nis2-contact-verification/).

## Updating contacts {#update}

If a contact is associated with multiple domains, updating that contact updates the contact information for all of those domains. You do not need to update each domain individually when they share the same contact.

To change which contact a specific domain uses, [replace the domain contact](/articles/changing-domain-contact/#assigning-a-new-domain-contact) instead.

> [!NOTE]
> When you update a domain contact:
> - You will receive a confirmation email from noreply@emailverification.info.
> - You may also see a message that the contact change results in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).
> - If you update the contact's email address, you may also receive a separate email to verify the new address.

## Deleting a contact {#delete}

You can delete a contact from the <label>Contacts</label> tab. If a contact can be deleted, a trash can icon appears next to its name.

![contact deletion](/files/contact-delete.png)

A contact cannot be deleted while either of the following is true:

- **The contact is the registrant of at least one domain.** Assign a different contact to those domains first. See [Changing Domain Contacts](/articles/changing-domain-contact/).
- **The contact has a registrant change still in progress.** Wait for the change to complete, or cancel it from the <label>Registration</label> tab of the affected domain.

The second case is easy to miss. A contact can look unused because no domain currently lists it as the registrant, and still refuse to delete because a registrant change naming it has not finished.

Contacts used on an SSL certificate order are not blocked from deletion.

## Have more questions?

If you have any further questions or need assistance with your domain contacts, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

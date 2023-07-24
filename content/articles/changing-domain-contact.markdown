---
title: Changing domain contacts
excerpt: How to change or update the contact assigned to a domain or part of its data.
categories:
- Contacts
---

# Changing domain contacts

### Table of Contents {#toc}

* TOC
{:toc}

---

You can change the contact associated to a domain registered with DNSimple at any time.

<note>
#### Domain Not Registered with DNSimple

The following instructions apply only to a domain registered with DNSimple. If you are hosting the domain with us but the domain is registered elsewhere, you will have to transfer it or update the contact information at your current registrar.
</note>

## Replacing a domain contact

If you want to assign a new contact to one of your domains, create the new contact record, then associate the domain to the new contact.

<div class="section-steps" markdown="1">
##### To change the contact information

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Contacts</label> tab, then click <label>New Contact</label>.

    ![Add contact](/files/change-contact-1.png)

1.  Fill in the form with the new contact information, and click <label>Add contact</label>.
1.  Go to your domain page.
1.  On the header, click the <label>Domains</label> tab, locate the relevant domain, then click the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  On the domain details page, click the <label>Registration</label> link.

    ![Domain registration details](/files/domain-registration-details.png)

1.  On the card displaying the contact information of your domain, click the <label>Change Contact</label> link.

    ![Change domain contact](/files/change-contacts.png)

1.  You will see a list of all your existing contacts. The one currently assigned to the domain is automatically selected. By selecting a contact, you will see the chosen contact information with its extended attributes. Clicking <label>Next</label> lets you confirm the contact information.

    ![Change contact preview](/files/change-contact-preview.png)

1.  You will see a confirmation of the new contact information for the domain. If you see a message that the contact change results in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/), click the <label>Change Contact</label> link to change the contact.

    ![Change contact confirmation](/files/change-contact-confirmation.png)

</div>



## Updating a domain contact

If you want to change existing contact information, just update the contact details. We will immediately update the registry data and the WHOIS record with the new information.

<div class="section-steps" markdown="1">
##### To change the contact information

1.  Log in to DNSimple with your user credentials.
1.  On the header, click the <label>Contacts</label> tab, locate the contact you want to change, and click <label>Edit</label>.

    ![Edit contact data](/files/edit-existing-contact-1.png)

1.  Update the information you want to change and confirm.
1.  You will see your changes confirmed. If a contact validation is required, you will receive an email for each associated domain.

    ![Change contact confirmation](/files/contact-change-confirmation.png)

</div>


## Monitoring a contact change

Some TLDs require extra steps before authorizing a registrant change.

1.  On the domain details page, click the <label>Registration</label> link.

    ![Domain registration details](/files/domain-registration-details.png)

1.  If action is required, the card displaying the contact information of your domain will show a list of instructions that need to be completed for the registrant change to succeed. If you want to cancel the change, click <label>Cancel change</label>.

    ![Contact change pending](/files/contact-change-monitor.png)


## Special WHOIS policies

Some registries adopt specific contact update policies that may cause the WHOIS update task to fail. Check [this article](/articles/changing-whois-contact) for a list of the most common registrar-specific policies.

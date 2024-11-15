---
title: Changing Domain Contacts
excerpt: How to change or update the contact assigned to a domain or part of its data.
categories:
- Contacts
---

# Changing Domain Contacts

### Table of Contents {#toc}

* TOC
{:toc}

---

For domains registered with DNSimple, [Domain Managers](https://support.dnsimple.com/articles/domain-access-control/#domain-manager) and anyone with [Full Access](https://support.dnsimple.com/articles/domain-access-control/#full-access) can change the contact associated with a domain at any time.

<info>
#### Domains not registered with DNSimple

These instructions apply only to domains registered with DNSimple. If you are hosting the domain with us, and the is domain registered elsewhere, you will have to update the contact information at your current registrar, or transfer the domain to DNSimple.
</info>

## Assigning a new domain contact

To assign a new contact to one of your domains, create the new contact record, then associate the domain to the new contact.

<div class="section-steps" markdown="1">
##### Adding and changing contact information

1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Contacts</label> tab, then click <label>New Contact</label>.

    <!--- needs screenshot -->

1.  Fill in the form with the new contact information, and click <label>Add contact</label>.
1.  Go to your domain page.
1.  On the header, click the <label>Domain Names</label> tab, locate the relevant domain, then click the name to access the domain page.
1.  On the domain details page, click the <label>Registration</label> tab on the left side.
1.  On the card displaying the contact information of your domain, click <label>Change Contact</label>.

      <!--- needs screenshot -->
    
1.  You will see a list of all your existing contacts. The one currently assigned to the domain is automatically selected. By selecting a contact, you will see the chosen contact information with its extended attributes. Click <label>Next</label>.
1.  You will see a confirmation of the new contact information for the domain. You may see a message that the contact change results in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/). Click <label>Change contact</label> to confirm the change.

    <!--- needs screenshot -->

</div>

## Updating a domain contact

You can update the contact details to change existing contact information. DNSimple will immediately update the registry data and the WHOIS record with the new information. 

<div class="section-steps" markdown="1">
##### To change the contact information

1.  On the header, click <label>Contacts</label>, locate the contact you want to change, and click <label>Edit</label>.

        <!--- needs screenshot -->

1.  Update the information and click <label>Update contact</label>.
1.  You will see your changes confirmed. If a contact validation is required, you will receive an email for each associated domain. 

    ![Change contact confirmation](/files/contact-change-confirmation.png)

</div>

## Monitoring a contact change

<info>
When a domain contact has been changed, you will receive a confirmation email from no-reply@ispapi.net. You may also see a message that the contact change results in the domain being [locked from transfers for 60 days](/articles/icann-60-day-lock-registrant-change/).
</info>

Some TLDs require extra steps before authorizing a registrant change.

1.  On the domain details page, click the **Registration** tab on the left side.

    ![Domain registration details](/files/domain-registration-details.png)

1.  If action is required, the card displaying the contact information of your domain will show a list of instructions that need to be completed for the registrant change to succeed. If you want to cancel the change, click **Cancel change**.

    ![Contact change pending](/files/contact-change-monitor.png)


## Special WHOIS policies

Some registries adopt specific contact update policies that may cause the WHOIS update task to fail. View [this article](/articles/changing-whois-contact) for a list of the most common registrar-specific policies.

## Have more questions? 

If you have any questions about changing contacts for your domains, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

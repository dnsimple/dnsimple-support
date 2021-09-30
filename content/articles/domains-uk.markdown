---
title: .UK Domains
excerpt: This article explains the requirements and special procedures for .UK domain names.
categories:
- Domains
---

# .UK Domain Names

* TOC
{:toc}

---

This article explains the requirements and special procedures for .UK domain names.

## .UK top-level registration policy {#policy-tld}

Domain registration directly at the `.UK` top-level domain was made available by Nominet on June 10th, 2014. Before that date it was only possible to register a `.UK` domain under one of the available suffixes (e.g. `.CO.UK`, `.ORG.UK`), not at the top level domain.

Because of that, domain name registrations at the second level in `.UK` name registrations are ruled by a [strict reservation policy](http://registrars.nominet.org.uk/sites/default/files/sldr_rules_140507_final_0.pdf). In summary:

- if a domain name with a `.CO.UK` (or similar extension) was registered before than October 28th, 2013, the corresponding .UK domain name is reserved for 5 years to the existing owner. If more than one qualifying 3rd level .UK domains existed before that date, the precedence will always be given to `.CO.UK`, then `.ORG.UK` ([learn more](http://registrars.nominet.org.uk/sites/default/files/sldr_rules_140507_final_0.pdf))
- if no qualifying 3rd level `.UK` domain existed before that date, then after June 10th, 2014 the `.UK` domain name will be available on a first-come-first-served basis.

`.CO.UK` domain owners have the right to register the associated `.UK` domain within a 5 years period. If a `.UK` is registered and then cancelled prior to these 5 years, the initial owner will lose the right for its re-registration.

## Registering a .UK domain {#registering}

Because of the [reservation policy](#policy-tld), registering a .UK domain requires some extra diligence. Assuming you have the right to register a `.UK` domain, you will need to use the same registration information (specifically the contact information) you used to register the corresponding `.CO.UK` or `.ORG.UK` domain.

<warning>
Providing a different contact information will [cause the domain registration to fail](#account-name-registrant-no-rights). To minimize the risk of registration errors, contact information must be identical, including registrant name, company name, email and phone numbers. Spaces, symbols or different string case (e.g. camelcase vs lowercase) may also cause the registration to fail.
</warning>

If the corresponding domain is registered with DNSimple, the `.UK` domain name registration may be slightly easier.

### The corresponding domain is registered with DNSimple

If the corrisponding domain is already registered with DNSimple, the `.UK` domain name registration is easier. In fact, in DNSimple you are required to associate each domain with a contact record. To register the `.UK` domain, simply associate the same contact (do not create a new one!) you already used for the previous domain registration, and we will send to the registry the same contact details.

This will drastically reduce the risk that your `.UK` domain registration is rejected because of registrant validation errors.

### The corresponding domain is not registered with DNSimple

If the corresponding domain is not registered with DNSimple, then you need to login into the control panel of your current registrar and copy/paste the current contact information into a new contact in DNSimple (or update the DNSimple contact you want to use).

Use this contact when registering the new `.UK` domain.

<note>
#### Compare the contact information

We noticed that several `.UK` domain name registrations failed because users manually entered their contact information into DNSimple, either assuming they remembered them or did not correctly copy the contact information from the existing 3rd level domain name.

Please make sure the information of the contact in DNSimple matches the information at the current 3rd level domain registrar. Use copy and paste to avoid typos and spelling errors.
</note>

<tip>
Instead of creating a new contact in DNSimple, it's perfectly fine to reuse an existing contact, as long as you change the contact information to match the ones copied from your current 3rd level .UK domain **before** registering the `.UK`. Please note that changing the contact information of an existing contact will cause all the domains associated with it to be updated with the new contact details at the registry.
</tip>

## Transferring a .UK domain to DNSimple {#transferring}

`.UK` and `.CO.UK` domains have a different transfer process than most other domain registrations. These steps explains some of those differences.

### Before you start

<warning>
It is important you follow these steps in strict order. Otherwise, there is a risk of losing your domain's registration.
</warning>

<warning>
As with any domain transfer, to avoid the possibility of downtime you should [point the name servers for the domain to DNSimple (or another provider) before you begin the transfer](/articles/before-transferring-domain). This will prevent downtime and will also allow you to perform changes to the DNS records during the domain transfer.
</warning>

<div class="section-steps" markdown="1">
##### 1. Starting the transfer

1. Log into DNSimple and click on <label>Add a Domain</label>.
1. Select <label>transfer a domain</label>.
1. Press <label>Transfer Domain</label>
1. Select a registrant and fill in any extended attributes.
1. Press <label>Transfer Domain</label>
</div>

<div class="section-steps" markdown="1">
##### 2. Approving the transfer

To complete the transfer of a `.UK` or `.CO.UK` domain, you must change the domain's IPS TAG at your current domain registrar. Your registrar may allow you to do this through their website, or you may need to contact them via email or phone.

Request the change of the IPS TAG to `1API-DE`. **This is case-sensitive, so make sure the IPS TAG is in all capital letters.**

Once you've authorized the transfer, you may have to **wait up to 48 hours for the transfer to complete.**
</div>

<info>
We will only charge your credit card for the transfer once it has completed.
</info>

### Transfer status

You can go to your domain list at any time to check on the status of pending transfers. Click on <label>transfer in process</label> to view detailed information about the transfer request.

### After the transfer

When the transfer has completed, you will receive an email from DNSimple confirming that your domain has been transferred to DNSimple. You can now manage your domain from your DNSimple account.

### Changing name servers

<warning>
We don't automatically point your domain to our name servers when the transfer completes. We suggest pointing [your domain to our name servers before the transfer](/articles/before-transferring-domain) to avoid downtime during the transfer. Some DNS providers will stop serving the DNS for the domain as soon as the transfer has completed.
</warning>

You can now decide to [point the domain to DNSimple name servers](/articles/delegating-dnsimple-registered) in one click, or [manually configure the name servers](/articles/setting-name-servers).

### Expiration extension

`.UK` and `.CO.UK` domains may or may not be extended when they are successfully transferred. If your `.CO.UK` domain has less than 3 months remaining before expiration, then it will be extended by 2 years. The price of this extension is included in the transfer fee. If your `.CO.UK` domain has 3 or more months remaining, then it will not be automatically extended.


## Transferring a .UK domain away from DNSimple {#transferring-outgoing}

To transfer a `.UK` domain away from DNSimple, the procedure is similar to the [instructions to transfer in](#transfer), but you will need to get the IPS tag of the gaining registrar.

<div class="section-steps" markdown="1">
#### Initiating the transfer

1.  Go to the registration section and click <label>Transfer Out</label>.

    ![Transfer out link](/files/domain-transfer-out-action.png)

#### Approving the transfer

1. Enter the IPS tag of the gaining registrar. **This is case-sensitive, so make sure the IPS TAG is in all capital letters.**

    ![IPS Tag](/files/uk-domain-transfer-out-ips-tag.png)

1. Click <label>Request Transfer Out</label>.

    This will unlock the domain and submit the request to the registry within 24 hours.
</div>

## Change of Registrant

Any contact change that results in a change of registrant must be executed directly at Nominet, the .UK registry. A change of registrant occurs when you are modifying the *Organization Name* for organizations or *First/Last Name* for individuals.

<div class="section-steps" markdown="1">
##### Updating the Registrant at Nominet

1. [Nominet Online Services](https://secure.nominet.org.uk/auth/login.html) using the email address listed as the domain's Contact in your DNSimple dashboard.

   ![Nominet Online Services Login](/files/nominet-uk-1.png)

1. Go to the <label>Domain Manager</label> section. You should find all your .UK domains listed there.
1. Select the domain you want to update the registrant for. Clicking on the right arrow on the domain header will expand the details.

   ![Domain Manager](/files/nominet-uk-2.png)

1. Under the <label>Registrant</label> section, click <label>Edit</label> to modify the information.
1. Edit the registrant details making sure they match exactly the information for the contact associated to the domain in your DNSimple account. Your contact is classified as organization is you specified an organization name, otherwise it's considered an individual.
   1. For individuals, change Registrant to match exactly the First/Last Name in your DNSimple contact. Select an appropriate Registrant Type if applicable.
   2. For organizations, change Registrant to match exatly the Organization Name in your DNSimple contact. Also make sure to fill out the Trading As with the exact same value. Finally, select an appropriate Registrant Type if applicable.

   ![Enter Registrant](/files/nominet-uk-3.png)
   ![Select Registrant Type](/files/nominet-uk-4.png)

1. Click <label>Update Details</label> to save.
1. To verify the changes are applied, go to our [WHOIS tool](https://dnsimple.com/whois) and query the WHOIS information for the domain. Verify the *Last updated* field has changed, and that the WHOIS response contains the updated information.
1. Once you completed and verified the change at Nominet, please [contact us](https://dnsimple.com/contact) so we can synchronize the information in your DNSimple dashboard.
</div>

If you have trouble logging in or following the process above, reach out to us, and we'll be happy to assist you.

## Troubleshooting

Here's a list of common `.UK` registration errors:

##### Your request for domain 'example.uk' has failed because the 'account-name' for the registrant does not fully match any registrant with rights to this domain {#account-name-registrant-no-rights}

**If you are registering a second-level `.UK` domain (e.g. example.uk)**, this is likely to be a result of the [reservation policy](#policy-tld). Please make sure that:

1. The `.UK` domain is not reserved
2. If the `.UK` domain is reserved, you must be the owner of the `.CO.UK` or corresponding 3rd level domain to register it.
3. If you have the right to register the associated `.UK`, you followed the instructions to [register a .UK domain](#register).

If you have any questions, [contact us](https://dnsimple.com/contact), and we'll help you register the domain.

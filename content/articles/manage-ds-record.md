---
title: Managing DS Records
excerpt: Instructions to add and remove an DS record in DNSimple.
categories:
- DNS
- DNSSEC
---

# Managing DS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

DS (Delegation Signer) records are used in [DNSSEC](/articles/dnssec/) to secure your domain.

## Locating the DS records page

To view and manage the delegation signer (DS) records for a domain:

1. In your Domain List, click the domain name to acccess the domain's management page.
1. Click the **DNSSEC** tab on the left side, then click **Manage** in the **DS Records** card.
  ![screenshot: manage ds records](/files/ds-records-manage.png)

## Listing DS records

On the DS Records page, you will see a list of the DS records currently provisioned for the domain.

## Adding a DS record

<info>
The form fields shown on the **Add DS Record** page will differ based on whether the TLD of the domain requires them to be set up with the DS-Data interface or the KEY-Data interface. This is automatically populated based on the TLD.
</info>

On the DS records page, click <label>Add DS record</label>.

![screenshot: adding a ds record](/files/ds-record-add.png)

<div class="section-steps" markdown="1">

#### To add a DS record using the DS-Data interface

1. Enter the DS record information.
  ![Add DS Record with DS Data](/files/ds-records-add-ds-data.png)

  - **Algorithm**: the algorithm used to generate the signature.

  - **Keytag**: a numerical value that identifies the referenced DNSKEY record.

  - **Digest Type**: the type of algorithm used to create the digest.

  - **Digest**: the hash value of the DNSKEY record, in hexadecimal format.

  Click <label>Add DS Record</label> to create the record.

2. The record is created and visible in the record list.

</div>

<div class="section-steps" markdown="1">

#### To add a DS record using the KEY-Data interface

1. Enter the DS record information. The Flags and Protocol form fields will be pre-filled with the appropriate values.
  ![Add DS Record with Key Data](/files/ds-records-add-key-data.png)

  - **Algorithm**: the algorithm used to generate the signature.
  - **Public Key**: public key of the Key-signing key of your zone signing configuration.

  Click <label>Add DS Record</label> to create the record.

1.  The record is created and visible in the record list.

</div>

## Removing a DS record

<div class="section-steps" markdown="1">
#### To remove a DS record

1.  On the DS records page, search for the record, and click on the _trash_ icon to delete it.

    ![screenshot: Delete DS Record](/files/ds-records-delete.png)

2.  Confirm the dialog to delete the record.

    ![screenshot: Showing confirmation prior to deleting DS record](/files/ds-records-delete-confirmation.png)

3.  The record is deleted and no longer visible in the record list.
</div>

## Have more questions?

If you have any questions or need more help managing your DS records, just [contact support](https://dnsimple.com/feedback), and we'll assist you.

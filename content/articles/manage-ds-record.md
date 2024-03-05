---
meta: Instructions to add and remove an DS record in DNSimple.
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

## Locating the DS records page

To view and manage the delegation signer (DS) records for a domain, click on the DNSSEC tab on a domain's management page, then click on the <label>Manage</label> link in the DS Records section.

![Manage DS Records link](/files/ds-records-manage.png)

## Listing DS records

On the DS Records page, you will be able to see a list of the DS records currently provisioned for the domain.

![List DS Records](/files/ds-records-list.png)

## Adding a DS record

On the DS records page, click <label>Add DS record</label>.

![Add DS Record](/files/ds-records-add-ds-record.png)

The Add DS Record page will load. The form fields shown on the Add DS record page will differ based on whether the TLD of the domain requires them to be set up with the DS-Data interface or the KEY-Data interface.

<div class="section-steps" markdown="1">

#### To add a DS record using the DS-Data interface

1.  Enter the DS record information.

    ![Add DS Record with DS Data](/files/ds-records-add-ds-data.png)

    - _Algorithm_: the algorithm used to generate the signature.

    - _Keytag_: a numerical value that identifies the referenced DNSKEY record.

    - _Digest Type_: the type of algorithm used to create the digest.

    - _Digest_: the hash value of the DNSKEY record, in hexadecimal format.

    Once you're ready, click <label>Add DS Record</label> to create the record.

2.  The record is created and visible in the record list.

</div>

<div class="section-steps" markdown="1">

#### To add a DS record using the KEY-Data interface

1.  Enter the DS record information. The Flags and Protocol form fields will be pre-filled with the appropriate values.

    ![Add DS Record with Key Data](/files/ds-records-add-key-data.png)

    - _Algorithm_: the algorithm used to generate the signature.

    - _Public Key_: public key of the Key-signing key of your zone signing configuration.

    Once you're ready, click <label>Add DS Record</label> to create the record.

2.  The record is created and visible in the record list.

</div>

## Removing a DS record

<div class="section-steps" markdown="1">
#### To remove an DS record

1.  In the DS records page, search for the record and click on the _trash_ icon to delete it.

    ![Delete DS Record](/files/ds-records-delete.png)

2.  Confirm the dialog to delete the record.

    ![](/files/ds-records-delete-confirmation.png)

3.  The record is deleted and no longer visible in the record list.
</div>

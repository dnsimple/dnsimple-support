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

## Locating the DS records page

To view and manage the delegation signer (DS) records for a domain, click on the DNSSEC tab on a domain's management page, then click on the <label>Manage</label> link in the DS Records section, to access the DS Records page.

![](/files/ds-records-manage.png)

## Listing DS records

On the DS Records page, you will be able to see a list of the DS records currently configured for the domain.

![](/files/ds-records-list.png)

## Adding a DS record

On the DS records page, click <label>Add DS record</label>.

The Add DS Record page will load. The form fields shown on the Add DS record page will differ based on whether the TLD of the domain supports the DS-Data interface or the KEY-Data interface.

<div class="section-steps" markdown="1">

#### To add a DS record using the DS-Data interface

1.  On the DS records page, click <label>Add DS record</label>.

2.  Enter the DS record information.

    ![](/files/ds-records-add-ds-data.png)

    - _Algorithm_: the algorithm used to generate the signature.

    - _Keytag_: a numerical value that identifies the referenced DNSKEY record.

    - _Digest Type_: the type of algorithm used to create the digest.

    - _Digest_: the hash value of the DNSKEY record, in hexadecimal format.

    Once you're ready, click <label>Add DS Record</label> to create the record.

3.  The record is created and visible in the record list.

</div>

<div class="section-steps" markdown="1">

#### To add a DS record using the KEY-Data interface

1.  On the DS records page, click <label>Add DS record</label>.

2.  Enter the DS record information. The Flags and Protocol fields are pre-filled with the appropriate fixed values.

    ![](/files/ds-records-add-key-data.png)

    - _Algorithm_: the algorithm used to generate the signature.

    - _Public Key_: public key of the Key-signing key of your zone signing configuration.

    Once you're ready, click <label>Add DS Record</label> to create the record.

3.  The record is created and visible in the record list.

</div>

## Removing a DS record

<div class="section-steps" markdown="1">
#### To remove an DS record

1.  In the DS records page, search for the record and click on the _trash_ icon to delete it.

    ![](/files/ds-records-delete.png)

2.  Confirm the dialog to delete the record.

3.  The record is deleted and no longer visible in the record list.
</div>

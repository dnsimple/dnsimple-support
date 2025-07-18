---
title: Adding and Removing DS Records
excerpt: Instructions to add and remove a DS record in DNSimple.
meta: Learn how to efficiently manage DS records in DNSimple with our comprehensive guide, covering both adding and removing records for optimal DNS configuration.
categories:
- DNS
- DNSSEC
---

# Adding and Removing DS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

DS (Delegation Signer) records are used in [DNSSEC](/articles/dnssec/) to secure your domain.

## Adding a DS record

<note>
DS records can only be manually added for domains not registered with DNSimple. For domains registered at DNSimple, DS records are automatically handled when DNSSEC is enabled.
</note>

1. Use the **account switcher** at the top of the page to select the appropriate account.
   
1. From your **Domain Names** list, click the domain name to access its management page.
   
1. Click the **DNSSEC** tab on the left.
   
1. Click **Manage** in the **DS Records** card.
   
1. On the **DS Records** page, click **Add DS Record**.

The form fields that appear will depend on the domain's TLD. The system will show either the DS-Data or KEY-Data interface automatically.
![screenshot: add ds record](/files/ds-record-add.png)

### Adding a DS record using the DS-Data interface

1.  Enter the DS record information.

    ![Add DS Record with DS Data](/files/ds-records-add-ds-data.png)

    - **Algorithm**: the algorithm used to generate the signature.

    - **Keytag**: a numerical value that identifies the referenced DNSKEY record.

    - **Digest Type**: the type of algorithm used to create the digest.

    - **Digest**: the hash value of the DNSKEY record, in hexadecimal format.

1.  Click **Add DS Record** to create the record.

1.  The record is created and visible in the record list.

### Adding a DS record using the KEY-Data interface

1.  Enter the DS record information. The **Flags** and **Protocol** form fields will be pre-filled with the appropriate values.

    ![Add DS Record with Key Data](/files/ds-records-add-key-data.png)

    - **Algorithm**: the algorithm used to generate the signature.

    - **Public Key**: public key of the Key-signing key of your zone signing configuration.

1. Click **Add DS Record** to create the record.

1. The record is created and visible in the record list.

<info>
To add a DS record with the DNSSEC API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#createDomainDelegationSignerRecord).
</info>

## Removing a DS record

<note>
#### Important 
You can only manually remove a DS record if it is not managed by DNSimple. If DNSSEC is enabled and managed by DNSimple, the only way to remove the DS record is by disabling DNSSEC.
</note>

1. Use the **account switcher** at the top of the page to select the appropriate account.
   
1. From your **Domain Names** list, click the domain name to access its management page.
   
1. Click the **DNSSEC** tab on the left.
   
1. Click **Manage** in the **DS Records** card.
   
1. On the **DS records** page, search for the record, and click the **trash** icon to delete it.

    ![screenshot: Delete DS Record](/files/ds-records-delete.png)

1.  Click **Delete** to delete the record.

    ![screenshot: Showing confirmation prior to deleting DS record](/files/ds-records-delete-confirmation.png)

1.  The record is deleted and no longer visible in the record list.

<info>
To remove a DS record with the DNSSEC API, check out our [developer documentation](https://developer.dnsimple.com/v2/domains/dnssec/#deleteDomainDelegationSignerRecord).
</info>

## Have more questions?

If you have any questions or need help managing your DS records, just [contact support](https://dnsimple.com/feedback), and we'll assist you.

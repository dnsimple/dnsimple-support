---
title: Managing Integrated Zone Records
excerpt: Adding, updating, and deleting the DNS zone records at DNSimple and/or Integrated DNS Providers.
categories:
- DNS
---

# Managing Integrated Zone Records in the Record Editor

On the Record Editor page, you can see which records are present at which DNS provider(s). Records that are present at a provider will be marked with the corresponding label for that provider.

![Managing integrated zone records in the Record Editor](/files/record-editor-integrated-zones-manage-records.png)

## Adding an integrated zone record in the record editor

### Adding a record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the Record Editor page, click **Add record**.

    ![Record Editor Add Integrated Record button](/files/record-editor-integrated-zones-add-record-button.png)

1. From the menu, select the DNS record type you want to add and enter the required information.
1. Use the checkboxes to choose which DNS providers the record should be added to.
    - You can select DNSimple, one or more Integrated DNS Providers, or both.
    - The record will only be created at the providers you check.

    ![Record Editor Add Integrated Record](/files/record-editor-integrated-zones-add-record.png)

1. Click Add record to finish creating the record.

## Updating an integrated zone record in the Record Editor

You can update a zone record at one or more [Integrated DNS Providers](/articles/what-are-integrated-providers/) from the [Record Editor](/articles/record-editor/).

### Updating a record

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the Record Editor, locate the record you want to update and click the **edit** icon at the end of the row.

    ![Record Editor Update Integrated Record button](/files/record-editor-integrated-zones-edit-record-button.png)

1.  Update the record details with the required information.
1. Use the checkboxes to choose which DNS providers the record should be updated at.
    - You can select DNSimple, one or more Integrated DNS Providers, or both.
    - If the record does not already exist at a provider, it will be created there when you save.

    ![Record Editor Update Integrated Record](/files/record-editor-integrated-zones-edit-record.png)
   
1. Click **Update record** to finish saving the changes.
   
<info>
You can include a note when updating a record. Notes are only stored if DNSimple is one of the selected providers. If you only update the record at an Integrated DNS Provider, the note will not be saved.
</info> 

## Deleting an integrated zone record in the Record Editor

You can delete a zone record at one or more [Integrated DNS Providers](/articles/what-are-integrated-providers/) from the [Record Editor](/articles/record-editor/).


### Deleting a record

1.  Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right to open the **Record Editor**.
1. In the Record Editor, locate the record you want to delete and click the **trash** icon at the end of the row.

    ![Record Editor Delete Integrated Record button](/files/record-editor-integrated-zones-delete-record-button.png)

1.  In the confirmation popup, select the DNS providers where you want the record to be deleted by checking the corresponding boxes.
    - You can select DNSimple, one or more Integrated DNS Providers, or both.
    - The record will only be deleted at the providers you check

    ![Record Editor Delete Integrated Record](/files/record-editor-integrated-zones-delete-record.png)

1. Click **Delete record** to confirm and delete.

<info>
You can include a note when deleting a record. Notes are only stored if DNSimple is one of the selected providers. If you only delete the record at an Integrated DNS Provider, the note will not be saved.
</info>

## Have more questions?
If you have additional questions or need any assistance with your integrated zone records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

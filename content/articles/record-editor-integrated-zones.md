---
meta: Manage and sync the DNS records of a zone at DNSimple and/or Integrated DNS Providers.
title: Record Editor for Integrated Zones
excerpt: Manage and sync the DNS records of a zone at DNSimple and/or Integrated DNS Providers.
categories:
- DNS
---
# Record Editor for Integrated Zones

From the [Record Editor](/articles/record-editor) page, you can view the records and sync state for zones at DNSimple and any configured [Integrated DNS Providers](/articles/integrated-dns-providers).

## Managing integrated zone records in the Record Editor

On the Record Editor page, you can see which records are present at which DNS provider(s). Records that are present at a provider will be marked with the corresponding label for that provider.

![Managing integrated zone records in the Record Editor](/files/record-editor-integrated-zones-manage-records.png)

### Adding an integrated zone record in the Record Editor

In the Record Editor, you can add a zone record to one or more DNS providers that support the [record type](/articles/integrated-dns-providers#supported-record-types).

<div class="section-steps" markdown="1">

##### Adding a record

1.  From the Record Editor page, click <label>Add Record</label>, and choose the type of record you're adding.

    ![Record Editor Add Integrated Record button](/files/record-editor-integrated-zones-add-record-button.png)

1.  Enter the required information, and click <label>Add Record</label> to create the record.  Ensure the corresponding checkbox is checked for each DNS provider the record should be added to. The record note will only be saved if DNSimple is one of the selected providers.

    ![Record Editor Add Integrated Record](/files/record-editor-integrated-zones-add-record.png)
</div>

### Updating an integrated zone record in the Record Editor

You can update a zone record at one or more DNS providers from the Record Editor.

<div class="section-steps" markdown="1">

##### Updating a record

1.  From the Record Editor page, click the edit icon to edit the record.

    ![Record Editor Update Integrated Record button](/files/record-editor-integrated-zones-edit-record-button.png)

1.  Enter the required information, and click <label>Update Record</label>. Ensure the corresponding checkbox is checked for each DNS provider the record should be updated at. If the record didn't already exist, it will be added to the selected provider. The record note will only be saved if DNSimple is one of the selected providers.

    ![Record Editor Update Integrated Record](/files/record-editor-integrated-zones-edit-record.png)
</div>

### Deleting an integrated zone record in the Record Editor

You can delete a zone record at one or more DNS providers from the Record Editor.

<div class="section-steps" markdown="1">

##### Deleting a record

1.  From the Record Editor page, click the trash icon to delete the record.

    ![Record Editor Delete Integrated Record button](/files/record-editor-integrated-zones-delete-record-button.png)

1.  Enter the required information and click <label>Delete Record</label>. Ensure the corresponding checkbox is checked for each DNS provider the record should be deleted at. The record note will only be saved if DNSimple is one of the selected providers.

    ![Record Editor Delete Integrated Record](/files/record-editor-integrated-zones-delete-record.png)
</div>

## Importing integrated zone records {#importing-integrated-zone-records}

If you have made changes to integrated zone records outside of DNSimple, you can import them to DNSimple using the <label>Import DNS records from Integrated Providers</label> button in the Record Editor, located under the <label>Import/Export</label> dropdown.

![Record Editor Import Integrated Records](/files/record-editor-integrated-zones-import-records.png)

You can also visit the [Domain Names](/articles/managing-integrated-zones#refreshing-and-importing-integrated-zones) page to refresh the state of all integrated zones in your DNSimple account.

## Syncing integrated zone records between DNS providers {#record-syncing}

When your zone is out of sync across its DNS providers, a warning message will appear at the top of the Record Editor page.

![Record Editor Integrated Records Out of Sync](/files/record-editor-integrated-zones-out-of-sync.png)

<div class="section-steps" markdown="1">

##### Syncing zone records

1.  From the Record Editor page, click <label>Synchronize DNS records</label>.

    ![Record Editor Sync Records button](/files/record-editor-integrated-zones-sync-button.png)

1.  In the popup, select the DNS provider that will be the source of the zone records and the destination DNS provider. Records in the destination zone can be created, updated, and deleted to make the records in the destination zone match those in the source zone. Only [record types supported](/articles/integrated-dns-providers#supported-record-types) at both providers will be affected. Only record field information (e.g. record TTL) supported at DNSimple will be preserved.

    ![Record Editor Delete Integrated Record](/files/record-editor-integrated-zones-sync-records.png)
</div>

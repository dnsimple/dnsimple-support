---
title: Deployment Editor
excerpt: Manage and sync the DNS records of a zone, whether it is at DNSimple and/or at external DNS provider(s).
categories:
- DNS
---

# Deployment Editor

From the Deployment editor page, you can view the records for a zone, both at DNSimple and also [external DNS provider(s)](/articles/external-zones) and also sync them. The Deployment editor page groups records together, so that you can easily see which records are at which DNS provider(s).

<div class="section-steps" markdown="1">
##### Accessing the Deployment Editor from the Zones page

1.  From the [Zones](/articles/managing-external-zones) page, click on any listed zone to enter the Deployment Editor for that zone.

    ![Zones page](/files/zones-page.png)
</div>

<div class="section-steps" markdown="1">
##### Accessing the Deployment Editor from the Record editor page

1.  From the [Record Editor](/articles/record-editor) page, click on the menu icon next to the <label>Record editor<label> heading.

    ![Deployment Editor Link](/files/deployment-editor-from-record-editor.png)

1.  In the popup menu, click on the <label>View as Deployment editor</label> link, in order to navigate to the <label>Deployment Editor</label> page.

    ![Deployment Editor](/files/deployment-editor-link-menu.png)
</div>

## Managing zone records in the Deployment Editor

On the Deployment editor page, you can easily see which records are present and at which DNS provider(s).

![Managing zone records in the deployment editor](/files/deployment-editor-manage-records.png)

### Adding a zone record in the Deployment Editor

In the deployment editor, you can add a zone record to one or more DNS providers that support the record type.

<div class="section-steps" markdown="1">
##### Adding a record

1.  From the Deployment Editor page, click on the <label>Add record</label> button and choose the type of record you are adding.

    ![Deployment Editor Add Record button](/files/deployment-editor-add-record-button.png)

1.  Enter the required infomation and press <label>Add Record</label> to create the record. For each DNS provider that the record should be added to, ensure that the corresponding checkbox is checked. Note that the record note will only be saved if DNSimple is one of the selected providers.

    ![Deployment Editor Add Record](/files/deployment-editor-add-record.png)
</div>

<div class="section-steps" markdown="1">
##### Quickly add a record from one DNS provider to another DNS provider

1.  From the Deployment Editor page, click on a record to see the expanded options. If a record exists at one DNS provider but not at another, you can quickly add it to the other DNS provider by clicking on the <label>Add</label> button.

    ![Deployment Editor quick add of record](/files/deployment-editor-quick-add.png)
</div>

### Updating a zone record in the Deployment Editor

You can update a zone record at one or more DNS providers from the Deployment Editor.

<div class="section-steps" markdown="1">
##### Updating a record

1.  From the Deployment Editor page, click on a record to see the expanded options, and then click on the edit icon to edit the record.

    ![Deployment Editor Update Record button](/files/deployment-editor-edit-record-button.png)

1.  Enter the required infomation and press <label>Update Record</label> to update the record. For each DNS provider that the record should be updated at, ensure that the corresponding checkbox is checked. For any selected DNS provider, if the record did not already exist there, it will be added to the provider.  Note that the record note will only be saved if DNSimple is one of the selected providers.

    ![Deployment Editor Update Record](/files/deployment-editor-edit-record.png)
</div>

### Deleting a zone record in the Deployment Editor

You can delete a zone record at one or more DNS providers from the Deployment Editor.

<div class="section-steps" markdown="1">
##### Deleting a record

1.  From the Deployment Editor page, click on a record to see the expanded options, and then click on the trash icon to delete the record.

    ![Deployment Editor Delete Record button](/files/deployment-editor-delete-record-button.png)

1.  Enter the required infomation and press <label>Delete Record</label> to delete the record. For each DNS provider that the record should be deleted at, ensure that the corresponding checkbox is checked. Note that the record note will only be saved if DNSimple is one of the selected providers.

    ![Deployment Editor Delete Record](/files/deployment-editor-delete-record.png)
</div>


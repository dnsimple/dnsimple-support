---
title: How to Use the Record Editor
excerpt: The Record Editor gives you the ability to view, create, and manage the DNS records for a domain.
meta: Learn how to use DNSimple's Record Editor to view, add, update, and delete DNS records for your domain. Master DNS record management with step-by-step guidance.
categories:
- DNS
---

# How to Use the Record Editor

### Table of Contents {#toc}

* TOC
{:toc}

---

## How to use DNSimple's Record Editor

The Record Editor is DNSimple's DNS editor. It lets you view, add, update, and delete DNS records for your domain in DNSimple.

Any supported [DNS record](/articles/supported-dns-records/) type can be managed from the Record Editor, except [system records](https://support.dnsimple.com/articles/system-records/).

You'll need access to the account or domain to make changes. Make sure the domain is delegated to DNSimple so your records propagate.

## Accessing the Record Editor
**Option 1: From the top navigation bar**
1. Use the account switcher at the top of the page to select the appropriate account.
1. From the Domain Names list, click the domain you want to manage
1. Click the DNS tab on the left.
1. Locate the DNS record section and click Manage 

**Option 2: From the domain page**
1. Use the **account switcher** at the top of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain you want to manage.
1. On the domain page, click **DNS** at the top-right of the screen (next to the star icon). This takes you directly to the Record Editor.

![record editor DNS badge](/files/dns-badge.png)

## Adding a record
1. In the Record Editor, click the **Add a record** button. 
1. Select the DNS record type you want to add (for example, A, CNAME, MX, etc.).
1. Fill out the required fields for the new record.
1. Click **Add record** to save it.
   
![Select Record Type](/files/rec-editor-new-record.png)

## Updating a record
1. In the Record Editor, find the record you want to update.
1. Click the edit icon (🖊️) at the end of the record row.
1. Make your changes.
1. Click **Update record** to save.

![modify a record](/files/modify-record.png)

## Deleting a record
1. In the Record Editor, find the record you want to delete.
1. Click the trash icon at the end of the record row.
1. Confirm the deletion

![delete record](/files/delete-record.png)

<warning>
There is no way to undo deleting a record. The only way to restore a deleted record is to 
recreate it.
</warning>

## Managing integrated zone records
The Record Editor is also used to manage records for your integrated zones. Refer to [Record Editor for Integrated Zones](/articles/record-editor-integrated-zones/)  for more details.

## Viewing Activity in the Record Editor
From the Record Editor, you can also view the Activity log to see who made changes to your domain. This helps you track updates and keep an audit trail of all DNS changes.

- If you're on the Teams plan or higher, you'll see the full activity history.
- If you're on the Solo plan, you can view the last 30 days of activity.

For step-by-step instructions and filtering options, see [How to View the Activity Log](https://support.dnsimple.com/articles/activity-tracking/).

## Have more questions?
If you have any questions or need assistance with the Record Editor, reach out to support, and we'll be happy to help.

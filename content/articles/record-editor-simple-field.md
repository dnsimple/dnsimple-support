---
title: Understanding DNSimple's Record Editors Simple vs. Field-Specific
excerpt: The Record Editor gives you the ability to view, create, and manage the DNS records for a domain.
meta: Understand the difference between DNSimple's simple and field-specific record editors. Learn when to use each editor for optimal DNS record management.
categories:
- DNS
---

# Understanding DNSimple's Record Editors: Simple vs. Field-Specific

DNSimple provides two distinct interfaces for adding and managing your DNS records in the [Record Editor](/articles/record-editor/), each designed to optimize for different use cases: the simple editor and the record fields editor. While both achieve the same goal of configuring your domain's DNS, they offer different levels of guidance and flexibility. Understanding when to use each can streamline your DNS management process.

## The simple editor: flexible for common records and pasting
The Simple Editor presents a streamlined interface, primarily asking you to provide three universal pieces of information for a DNS record:
- **Name**: This is the hostname for the record (e.g., `www`, `blog`, `_dmarc`).
    - Leave it blank to configure a record for the root domain (e.g., `example.com`).
    - Enter the subdomain part for a specific hostname (e.g., `subdomain`).
    - You can also enter an `*` for a wildcard record, which matches any subdomain not explicitly defined.
- **Content**: This is a single, free-form text field where you enter the entire content of the DNS record's data.
- **TTL (Time-to-Live)**: This value determines how long DNS lookups for that record can be cached by resolvers around the internet. The default value is typically 1 hour (3600 seconds), but you can adjust it.

![simple record editor](/files/switch-to-simple-editor.png)

### When to use the simple editor
The simple editor is highly beneficial for:
- Adding common, straightforward records like A records or basic TXT records where the content is a single IP address or a simple text string.
- Pasting DNS record content directly from a third-party service provider. Many services (like email providers or site verification tools) will provide you with a full record string (e.g., `"v=spf1 include:_spf.google.com ~all"` for [SPF](/articles/spf-record/)). The Simple Editor allows you to paste this directly into the Content field, letting DNSimple handle the parsing.

Check out [How to Add Common DNS Records](/articles/how-to-add-dns-records/) for more information on how to create these common records in DNSimple.

## The record fields editor: guided input for complex records
The record fields editor is a specialized form available for certain DNS record types. Instead of a single `Content` field, it breaks down the record's data into separate, specific input fields.

**How it works**: For records like [MX](/articles/mx-record/), [SRV](/articles/srv-record/), or [CAA](/articles/caa-record/), which have multiple distinct parts (e.g., priority, weight, port, specific tags), the Record Fields Editor provides individual fields for each component.

### When to use the record fields editor
This editor is particularly useful for:
- **Complex record types**: It guides you through entering the correct data for records that have multiple, structured parts (e.g., separating priority, weight, port for [SRV records](/articles/add-srv-record/), or specific tags for [CAA records](/articles/manage-caa-record/)).
- **Enhanced error messages**: By having discrete fields, the editor can provide more specific and helpful validation messages in real-time, reducing errors during configuration. For example, it might warn you if a port number is out of range or if a hostname isn't a valid format for a specific field.
- **Ensuring correct formatting**: It ensures that each part of the record is entered in the correct format, even if you're not intimately familiar with the RFC specifications.
  
## Switching between editors
You can typically switch between the simple editor and the record fields editor using the tabs provided at the top of the record creation/editing interface. This allows you the flexibility to paste a full string in the simple editor and then switch to the record fields editor to review the parsed components, or vice-versa.

## Why DNSimple offers both editors
DNSimple provides both editing experiences to cater to different user needs and preferences:

**Flexibility for experts**: Experienced users or those integrating with third-party services can quickly paste raw record content.

**Guidance for all users**: The structured fields help ensure accuracy for complex records, providing clear guidance and validation to minimize errors. This simplifies DNS management for users regardless of their technical expertise.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.




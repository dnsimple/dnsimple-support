---
title: How to Use Templates
excerpt: How to use templates to facilitate the entry of DNS records.
meta: Discover how to streamline your DNS record management with templates in DNSimple, making the process faster and more efficient for your domain configurations.
categories:
- Templates
---

# Templates

### Table of Contents {#toc}

* TOC
{:toc}

---

Templates are reusable groups of DNS records that can be applied to any of your domains. They speed up the entry of DNS records and reduce possible mistakes like typos and other errors.

You can access your templates at any time from the top navigation bar, next to your domains and contacts.

> [!INFO]
> Templates do not override any existing DNS records on your domain.

## Creating a template

To create a new template, click **Templates** on the top navigation bar, then click **New template**.
![screenshot of adding a new template](/files/template-list.png)


Fill in the form for your template. This example shows a template to automate the creation of a CNAME record pointing to a specific address in Heroku.

![Template new](/files/template-new.png)

Now that you have the basic information for the template, create the record for it.
![screenshot of tooltip for managing a templates dns](/files/template-manage-dns.png)
![screenshot of list of dns records for a template](/files/template-records.png)

The example below shows one record, but there is no limit to the number of records you can have on a template.

The keyword `{{domain}}` automatically fills in the domain name to which the template is applied.

![Template new record](/files/template-new-record.png)


## Applying a template

Navigate to the [record editor](/articles/record-editor/) and select **Templates** from the dropdown.

![Apply the template from the record editor](/files/template-apply-template.png)

Select the template that you wish to apply. In this example, you will apply the template that you just created above.

![Apply the template from the record editor](/files/template-select-template.png)

If the template is applied successfully, you will see the new record.

![Apply the template from the record editor](/files/template-record-created.png)

If the template has not been applied, it's possible the content of the template conflicts with an existing record on your domain. For example, if your domain already has a `beta` CNAME record, the template will not apply.

## Have more questions?

If you have additional questions or need any assistance creating or applying templates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

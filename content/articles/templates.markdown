---
title: How to use templates
excerpt: How to use templates to facilitate the entry of DNS records
categories:
- Templates
---

# Templates

### Table of Contents {#toc}

* TOC
{:toc}

## What are templates?

Templates are reusable groups of DNS records that can be applied to any of your domains. They speed up the entry of DNS records and reduce possible mistakes like typos and other errors.

You can access your templates at any time for the top navigation bar, next to your domains and contacts.

## Creating a template

To create a new template, browse to `https://dnsimple.com/templates` or use the "templates" link on the top navigation bar. Click on "New Template"

![Template main page](/files/template-main-page.png)

Fill in the form for your template. In this example, we are going to create a template that can automate the create of a CNAME record to point to a specific address in Heroku.

![Template new](/files/template-new.png)

Now we have the basic information for the template, it is time to create the record for it. In this example, we are only creating one record, but there is no limit to the number of records that you can have on a template.

We are using a special keyword `{{domain}}` that automatically fills in the domain name to which the template is applied.

![Template new record](/files/template-new-record.png)

## Applying a template

Navigate to the [record editor](/articles/advanced-editor) and select "Template" from the dropdown.

![Apply the template from the record editor](/files/template-apply-template.png)

Then select the template that you wish to apply. In this example, we are going to apply the template that we just created above.

![Apply the template from the record editor](/files/template-select-template.png)

If the template could be applied sucessfully, you should see the new record.

![Apply the template from the record editor](/files/template-record-created.png)

If the template could not be applied, it's possible that the content of the template conflicts with an existing record on your domain. For example, if our domain already had a "beta" CNAME record, the template could have not been applied. Templates do not override any existing DNS records on your domain.

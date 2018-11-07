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

To create a new template use the "Templates" link on the top navigation bar. 
![Template tab](/files/templates-tab.png)


Click on "New Template"

![Template main page](/files/template-main-page.png)

Fill in the form for your template. In this example,  you will create a template to automate the creation of a CNAME record pointing to a specific address in Heroku.

![Template new](/files/template-new.png)

Now that you have the basic information for the template, it is time to create the record for it. In this example, you are only creating one record, but there is no limit to the number of records that you can have on a template.

The keyword `{{domain}}` automatically fills in the domain name to which the template is applied. The symbol `@` can also be used as it is equivalent to `{{domain}}`.

![Template new record](/files/template-new-record.png)

## Applying a template

Navigate to the [record editor](/articles/record-editor) and select "Template" from the dropdown.

![Apply the template from the record editor](/files/template-apply-template.png)

Select the template that you wish to apply. In this example, you will apply the template that you just created above.

![Apply the template from the record editor](/files/template-select-template.png)

If the template is applied sucessfully, you will see the new record.

![Apply the template from the record editor](/files/template-record-created.png)

If the template is not being applied, it is possible that the content of the template conflicts with an existing record on your domain. For example, if your domain already has a "beta" CNAME record, the template will not apply. Templates do not override any existing DNS records on your domain.

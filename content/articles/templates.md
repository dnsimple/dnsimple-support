---
title: How to Use Templates
excerpt: How to use templates to facilitate the entry of DNS records.
meta: Create reusable DNS record templates in DNSimple and apply them to any domain, so common record sets can be added in one step instead of typed each time.
categories:
- Templates
---

# How to Use Templates

### Table of Contents {#toc}

* TOC
{:toc}

---

Templates are reusable groups of DNS records that you can apply to any of your domains. They speed up the entry of DNS records and reduce mistakes like typos. For what happens to a zone when a template is applied, see [How DNS Templates Work](/articles/how-dns-templates-work/).

Templates are reached from the <label>Templates</label> tab in the header, between <label>Certificates</label> and <label>Contacts</label>.

> [!NOTE]
> The <label>Templates</label> tab appears only for users who can manage the account. If you do not see it, you have domain-level access rather than account-level access.

> [!NOTE]
> Templates do not override any existing DNS records on your domain.

## Creating a template {#create}

<div class="section-steps" markdown="1">
##### Create a template and add records to it

1. On the header, click the <label>Templates</label> tab, then click <label>New template</label>.

    ![screenshot of adding a new template](/files/template-list.png)

1. Fill in the form for your template and save it. The example below creates a template that adds a CNAME record pointing to a Heroku address.

    ![Template new](/files/template-new.png)

1. Open the template and add its records.

    ![screenshot of tooltip for managing a templates dns](/files/template-manage-dns.png)

    ![screenshot of list of dns records for a template](/files/template-records.png)

1. Add each record as you would in the record editor. There is no limit to the number of records a template can hold.

    ![Template new record](/files/template-new-record.png)

</div>

Template records support two substitutions. The keyword `{{domain}}` is replaced with the name of the domain the template is applied to, and `@` on its own is replaced with the same value for certain record types. See [Template Record Variables and Syntax](/articles/template-record-variables/) for the full rules.

## Applying a template {#apply}

<div class="section-steps" markdown="1">
##### Apply a template to a domain

1. Navigate to the [record editor](/articles/record-editor/) for the domain.
1. Select <label>Templates</label> from the dropdown.

    ![Apply the template from the record editor](/files/template-apply-template.png)

1. Select the template you want to apply.

    ![Apply the template from the record editor](/files/template-select-template.png)

1. Confirm the new records appear in the zone.

    ![Apply the template from the record editor](/files/template-record-created.png)

</div>

If the template does not apply, the most likely cause is a conflict with a record that already exists on the domain. For example, if your domain already has a `beta` CNAME record, a template that creates the same record will not apply.

## Have more questions?

If you have additional questions or need any assistance creating or applying templates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

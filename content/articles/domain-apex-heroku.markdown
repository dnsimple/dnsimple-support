---
title: Pointing the Domain Apex to Heroku
excerpt: How to point your domain to your Heroku application using DNSimple.
categories:
- Heroku and DNSimple
---

# Pointing the Domain Apex to Heroku

### Table of Contents {#toc}

* TOC
{:toc}

---

Your domain apex is the second or third level domain provided to you by your domain registrar. For example, `dnsimple.com` is the apex domain for DNSimple.

To point your apex to Heroku you have 2 options:

1. Use the Heroku one-click service.
1. Manually add an [ALIAS record](/articles/alias-record/).


Once your apex domain is pointing to correct place you will have to configure the custom domain at Heroku.

## Using the Heroku one-click service

You can only use the one-click service if you are not using SSL on your Heroku application. If you are please follow the instructions in [the next section](#point-using-alias).

To apply the Heroku one-click service to your domain follow [these instructions](/article/adding-services/#adding-services).

## Adding an ALIAS record {#point-using-alias}

<warning>
If you are using an SSL certificate, you must point the alias to the [Heroku SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) or your browser will display a [certificate error](/articles/ssl-certificate-
herokuapp-error/) when accessing the HTTPS version of the site.
</warning>

These are the steps that you will need to follow to add an ALIAS record that points your apex domain to your Heroku application:

<div class="section-steps" markdown="1">
##### Creating an ALIAS for the apex domain

1. Log into your DNSimple account.
1. Follow [these instructions](/articles/advanced-editor/#access-the-record-editor) to edit your domain's records.
1. Click *Add a Record* and select the *ALIAS* record type.
  ![Add a Record](/files/add-alias-heroku-1.jpg)
1. In the form enter the following settings:
  ![Alias Settings](/files/add-alias-heroku-2.jpg)
  - <label>Name</label>: leave it blank as we want to create an `ALIAS` for the apex domain.
  - <label>Alias for</label>: enter your Heroku endpoint URL. If you are **not** using SSL the endpoint it will look like `myapp.herokuapp.com`. If you are using SSL the endpoint it will look like `myapp.herokussl.com`
1. Press <label>Add Record</label> to create the record.

</div>


## Setting up your custom domain at Heroku {#set-up-domain-heroku}

Once you have set up the domain using either the one-click service or adding an ALIAS record you will have to configure your custom domain at Heroku. Their support site has [a comprehensive article](https://devcenter.heroku.com/articles/custom-domains) on how to accomplish this.

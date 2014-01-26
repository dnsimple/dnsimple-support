---
title: Pointing the Domain Apex to Heroku
excerpt: 
category: Heroku and DNSimple
---

# Pointing the Domain Apex to Heroku

Your domain apex is the second or third level domain provided to you by your domain registrar. For example, `dnsimple.com` is the apex domain for DNSimple.

To point your apex to Heroku you have 2 possibilities:

- Use the Heroku one-click service (for non-SSL usage)
- Add an [ALIAS record](/articles/alias-record) pointing your custom Heroku end point (for non-SSL and SSL usage)

## Creating an ALIAS for the apex domain

Go to the advanced editor page for your domain to manage your DNS records. Click *Add a Record* and select the *ALIAS* record type.

![Add a Record](http://f.cl.ly/items/3s2k3N2h1N0q182P1D1g/dnsimple-alias-record.png)

In the form enter the following settings:

- **Name**: leave it blank (we want to create an `ALIAS` for the apex domain)
- **Alias for**: enter your Heroku endpoint (for non-SSL) or Heroku SSL endpoint (for SSL).

**Important:** If you are using an SSL certificate, you must point the alias to the [Heroku SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) or your browser will display a [certificate error](/articles/ssl-error-herokuapp) when accessing the HTTPS version of the site.

![Alias Settings](http://f.cl.ly/items/2i2C093D3D3E092E151L/dnsimple-alias-herokussl.png)

Press *Add Record* to create the record.

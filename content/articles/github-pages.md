---
title: GitHub Pages
excerpt: How to point your root or apex domain to host your site with GitHub Pages using DNSimple.
categories:
- Services
- Integrations
---

# Pointing your apex domain to GitHub Pages

### Table of Contents {#toc}

* TOC
{:toc}

---

Your domain apex is the second or third level domain provided to you by your domain registrar. For example, dnsimple.com is the root domain for DNSimple.

To point your root domain to your GitHub Pages you have two options:

  1. Use the one click service that DNSimple provides.
  2. Manually add an [ALIAS record](/articles/alias-record).


## Using the one click service

From your domain list, click on the *Services* button.

Look for the GitHub Pages service and just click *Add* to setup your domain records. That will create the `ALIAS` record you need to make your apex domain point to your GitHub Pages.

Finally, don't forget to complete the [final step](#one-final-step)


## Adding an ALIAS record

Go to the advanced editor page for your domain to manage your DNS records. Click *Add a Record* and select the `ALIAS` record type.

![Add a Record](/files/dnsimple-alias-record-1.png)

In the form enter the following settings:

- **Name**: leave it blank (we want to create an `ALIAS` for the apex domain)
- **Alias for**: enter your GitHub Pages endpoint .

Now you only have [complete the setup](https://help.github.com/articles/setting-up-a-custom-domain-with-pages#setting-the-domain-in-your-repo) of your domain in your GitHub repo.


## One final step

Setting up your domain on DNSimple is the first step. But you also have to let GitHub know that you are using a custom domain and what domain that is.

Even if you are only pointing your domain apex to GitHub Pages using an `ALIAS` record you will need to [add the custom domain to GitHub pages](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).

Carefully read [how to setup a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) and complete the steps required there to make your domain work correctly.

---
title: GitHub Pages
excerpt: How to point your root or apex domain to host your site with GitHub Pages using DNSimple.
categories:
- Services
- Integrations
---

# Pointing Your Apex Domain to GitHub Pages

### Table of Contents {#toc}

* TOC
{:toc}

---

Your domain apex is the second or third level domain provided to you by your domain registrar. For example, dnsimple.com is the root domain for DNSimple.

To point your root domain to your GitHub Pages you have two options:

  1. Use the One-click Service that DNSimple provides.
  2. Manually add an [ALIAS record](/articles/alias-record).

## Using the One-click Service

1. From the domain list, click on the domain name you want to update.
2. Click the **DNS** tab on the left side.
3. Scroll down to the **One-click services** card, and click **Add**.

<!--- needs screenshot: https://drive.google.com/file/d/1RtGQ2mmwIaqZKNIu1_YcIWgfyIVdHofy/view?usp=sharing -->

4. Select the **Hosting** tab, and scroll down the page until you find the GitHub Pages service. Click **Add**.

The service has been added. You can remove it any time by following the steps in [how to remove a service](/articles/services/#removing-services).

## Adding an ALIAS record

Go to the advanced editor page for your domain to manage your DNS records. Click **Add a Record**, and select the `ALIAS` record type.

![Add a Record](/files/dnsimple-alias-record-1.png)

Enter the following settings:

- **Name**: leave this blank (we want to create an `ALIAS` for the apex domain).
- **Alias for**: enter your GitHub Pages endpoint.

Now, [complete the setup](https://help.github.com/articles/setting-up-a-custom-domain-with-pages#setting-the-domain-in-your-repo) of your domain in your GitHub repo.

## Setting up your custom domain with GitHub

Read GitHub's guide on [how to setup a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/), and complete the required steps to ensure your domain works correctly.

Even if you are only pointing your domain apex to GitHub Pages using an `ALIAS` record, you will need to [add the custom domain to GitHub pages](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).

## Have more questions?

If you have additional questions or need any assistance with our One-click Services, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

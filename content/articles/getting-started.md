---
title: Getting Started
excerpt: A collection of guides to help you get started with DNSimple quickly.
meta: Explore our comprehensive guide to getting started with DNSimple, featuring essential articles and resources to help you configure and manage your domain effortlessly.
categories:
- DNSimple
---

# Getting Started With DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

Prefer to watch? Try our video tutorials:
<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/ddvFzwebkhE?si=L1qvfgJXxVFg_9AU" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/73seK9zdrE4?si=ZLceNwaAwGMaGjDe" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/r1Nbh-D_8cg?si=fCV66iZFKe5IAGFq" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Introduction
This how-to guide shows you how to accomplish basic tasks with DNSimple. Our services are streamlined and make managing your DNS, domains, and certificates straightforward with our simple interface and powerful tools. 

We recommend having this guide open alongside your DNSimple account so you can follow along. When you've completed this, you will be able to register, transfer, and set up DNS for your domain. If you don't have an account, check out [our plans](https://support.dnsimple.com/articles/dnsimple-plans/) to register and follow along.

Before you skip to a section, let's go over how to navigate the main interface of the dashboard. 

To get to the dashboard, log in to your DNSimple account, and you will be brought to it. If you haven't created an account yet, make one, then select **Skip to Dashboard** at the bottom of the **Get started** page.

![Get Started](/files/getting-started-account-get-started.png)

The dashboard gives you an overview of your DNS, domains, and certificates through DNSimple and brings you to where you manage them.

![Dashboard with Multiple Accounts](/files/getting-started-dashboard-multi-account.png)

<note>
This shows a dashboard with multiple accounts, but you can still follow along with just one.
</note>

<note>
The process for registering, transferring, or managing DNS for domains is the same for a Solo or Teams account.
</note>

If you don't have a domain yet, try [Transferring](#transferring-a-domain) or [Registering](#registering-a-domain) a domain.

Have a domain and want to set up DNS? [Learn how to add DNS records to your account](#host-dns-on-dnsimple).

## Adding Domains to DNSimple

Domain management on DNSimple starts in two ways: [registration](#registering-a-domain) and [transferring](#transferring-a-domain). A domain is registered if it isn't already owned, and it's transferred if you already own the domain through another registrar.

### Registering a Domain

How do you register a domain? Registering a domain is the first step to an online presence. This is best if you don't have a domain already, as you need a domain to set up DNS services.

<note>
You do not have to register your domain through DNSimple to use our services. [Try adding DNS to a domain you own through another registrar](#adding-dns-to-an-external-domain).
</note>

1. Navigate to the DNSimple Dashboard. Click **Add** at the top right, then navigate to the **Register domain** option in the dropdown.

    ![Add Menu - Register](/files/getting-started-register-add-menu.png)

2. On the *Register domain* page, enter the domain name you would like to register. Once you are satisfied with your domain, click *Continue*.

    ![Register domain](/files/getting-started-register-domain-name.png)

3. Enter your contact information, or select a contact from the dropdown list. Finally, click **Register ____** to complete your registration.

    ![Registration Form](/files/getting-started-register-form.png)

You just registered your domain successfully.

![Registration Confirmation](/files/getting-started-register-confirmation.png)

Now that you have your own domain, [try adding DNS](#adding-dns-to-an-internal-domain) to get your site running.

### Transferring a Domain

How do you transfer a domain? Transferring a domain is recommended when you already own a domain through another registrar. 

<note>
A domain transfer requires access to the registrar the domain is registered to in order to obtain an authorization code.
</note>

1. Navigate to the DNSimple Dashboard, click **Add**, and choose **Transfer Domain** from the list of options.

    ![Add Menu - Transfer](/files/getting-started-transfer-add-menu.png)

2. Enter your domain name in the form, then click **Continue**.

    ![Enter Domain Name](/files/getting-started-transfer-domain.png)

3. Follow the requirements for the transfer process on your current registrar's site, then enter your authorization code, as well as registrant information. Once you are ready, click **Register ____** to start the transfer process.

    <note>
    Not all TLDs require an authorization code and might require special conditions ([typically .uk](https://support.dnsimple.com/articles/domains-uk/) or other country code TLDs). In that case, follow the instructions for that domain.
    </note>

    <tip>
    If your domain supports it, enable our [WHOIS Privacy Protection](https://support.dnsimple.com/articles/whois-privacy/). This hides your contact information from any look-ups.
    </tip>

    ![Transfer Form](/files/getting-started-transfer-form.png)

    An example of a TLD that allows for [WHOIS Privacy Protection](https://support.dnsimple.com/articles/whois-privacy/):

    ![Domain that supports WHOIS Privacy Protection](/files/getting-started-transfer-WHOIS-domain.png)

4. The transfer process will be started, and you should be able to start setting up DNS records for when it is transferred. Try [setting up DNS](#host-dns-on-dnsimple).

    ![Transfer Confirmation](/files/getting-started-transfer-submitted.png)

That's it —  you just transferred your domain to DNSimple.

The transfer process will take anywhere from 5 to 7 days. During this time, you can check the status of it on your domain's management page. If your domain's name servers are pointed to ours or another DNS provider with records, your domain will continue to operate during this time.

## Host DNS on DNSimple

<warning>
Hosting DNS is required to resolve your endpoint from your domain, and requires a domain. If you don't have one, try [registering a domain with DNSimple](#registering-a-domain) or [transferring one you own](#transferring-a-domain).
</warning>

### Setting up a DNS Record

How do you host DNS? Setting up a DNS Record is the fundamental step to hosting DNS and is what is used to resolve your domain. What DNS records should you add? Try looking at [common DNS records](https://support.dnsimple.com/articles/common-dns-records/) to see what your setup might look like.

#### Adding DNS to an Internal Domain

If you have a domain registered through DNSimple, follow these steps to add DNS records for your domain.

1. Begin by navigating to the DNSimple Dashboard, then click **Registered Domains** under your account.

    ![Add Menu - Add DNS to Internal Domain](/files/getting-started-dns-internal-dashboard.png)

2. On the **Domain Names** page, search for the domain you want to add DNS to. Click on it to open the management page for that domain.

    ![Domain Names Tab](/files/getting-started-dns-internal-domain-names-tab.png)

3. On the domain's management page, click the **DNS** tab on the left side, then find the **DNS records** card on the right. Click **Add** to navigate to the **Record Editor**.

    ![Domain Management Page](/files/getting-started-dns-internal-management.png)

    <note>
    The domain's DNS zone must be active in order to resolve.
    </note>

4. In the Record Editor, click **Add record**, then choose an **A record** from the list of record types. This will bring you to a page where you will fill out the fields of the record type you select.

    ![Record Editor](/files/getting-started-dns-internal-record-editor.png)

    <tip>
    An A Record maps your domain to the IPv4 address of your endpoint. It is required to resolve your domain to your site. [Learn more about A Records.](https://support.dnsimple.com/articles/a-record/)
    </tip>

5. Fill out the fields for your record type. When you are finished, click **Add Record**.

    ![Add A Record](/files/getting-started-dns-internal-a-record.png)

You have successfully added DNS to your domain through DNSimple.

You can continue to add more records based on your needs. If you aren't sure what that looks like, try seeing what [common DNS records are on many domains](https://support.dnsimple.com/articles/common-dns-records/) for inspiration.

#### Adding DNS to an External Domain

If you don't have your domain in your DNSimple account, follow these steps to add a DNS zone for a domain you already have through another domain registrar.

1. Begin by navigating to the DNSimple Dashboard, then click  **Add**, and select **DNS zone** from the list of options.

    ![Add Menu](/files/getting-started-dns-external-add-menu.png)

2. Enter the domain name that you want to set up a DNS zone for. If your domain is under a different registrar, you will need to [add DNSimple name servers at your registrar](https://support.dnsimple.com/articles/delegating-dnsimple-hosted/).

    ![Domain Name for Zone](/files/getting-started-dns-external-domain-form.png)

3. On the next page, you can import DNS from another provider, connect to a service, use our One-click Services, or enter DNS records manually. Try adding an [A record](https://support.dnsimple.com/articles/a-record/) for the root domain by leaving the name field blank and adding in the IPv4 address of your host.

    ![Adding A Record](/files/getting-started-dns-external-add-record.png)

    <tip>
    If you need more examples of records to add, try looking at [Common DNS Records](https://support.dnsimple.com/articles/common-dns-records/).
    </tip>

4. Once you are ready, click **Activate DNS zone**, then confirm the activation of your DNS zone on the next page.

    ![Activate Zone](/files/getting-started-dns-external-activate-zone.png)

You just added a DNS zone for your domain.

<tip>
If you want to change or edit your DNS, navigate to the DNS tab under your domain's management page.
</tip>

![DNS Zone Management](/files/getting-started-dns-external-manage.png)

## What's next?

Now that you have successfully done some tasks in DNSimple, what's next? You can [automate domain management or get analytics with our API](https://dnsimple.com/api). If you want to protect your site in the case of DNS servers going offline, [try setting up Secondary DNS](https://support.dnsimple.com/articles/secondary-dns/). To add secure connections between your domain and a client, [learn how an SSL Certificate makes that happen](https://support.dnsimple.com/articles/ssl-certificates/). Check out our [DNSimple Services](https://support.dnsimple.com/articles/dnsimple-services/) page for a full overview of everything we offer. Check out [Our Comics](https://dnsimple.com/comics/) to see how DNS and the surrounding technologies work.

## Have more questions?

If you have any questions or need assistance getting started with your DNSimple account, [contact support](https://dnsimple.com/contact/), and we'll be happy to help.

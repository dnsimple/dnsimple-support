---
title: DNSimple and ClickFunnels
excerpt: Get started with your new DNSimple account quickly.
meta: Move your domain from ClickFunnels to your own DNSimple account. Step-by-step guide for requesting the domain push, accepting it, and managing your domain and certificates.
categories:
- DNSimple
---

# DNSimple and ClickFunnels

### Table of Contents {#toc}

* TOC
{:toc}

---

ClickFunnels uses DNSimple as its domain registrar. When you purchase a domain through ClickFunnels, the domain is registered under their reseller account. To manage the domain yourself, you need to move it into your own DNSimple account.

> [!NOTE]
> If you already have a DNSimple account but cannot find your domain, see [I Can't Find My Domain](/articles/finding-missing-domain/).

## Create a DNSimple account {#create-account}

If you do not already have a DNSimple account, create one before requesting the domain transfer.

<div class="section-steps" markdown="1">
1. Go to [dnsimple.com](https://dnsimple.com) and click <label>Get Started</label>.
1. Enter your email address and password, then click <label>Join</label>.
1. Choose the [plan](/articles/dnsimple-plans/) that fits your needs.
1. Add your credit card details, then click <label>Start my free trial</label>. Your [account will not be activated](/articles/account-activation/) until you add a credit card.
</div>

> [!TIP]
> You can cancel any time during your 30-day trial without being charged for your [DNSimple subscription](/articles/dnsimple-services/).

## Request the domain move from ClickFunnels {#request-move}

Send an email to [billing@clickfunnels.com](mailto:billing@clickfunnels.com) using the email address associated with your ClickFunnels account. Include the following information:

- Confirmation that you have a paid DNSimple account.
- The email address associated with your ClickFunnels account.
- Your DNSimple **Account Identifier**. Find it by opening the **account switcher** in the top-right corner, selecting your account, clicking <label>Account Settings</label>, and locating the identifier in the **Account** card.
- The domain name(s) you want to transfer.
- The last 4 digits and expiration date of the card on file with your ClickFunnels account.

ClickFunnels will reply when the domain has been moved. You will also receive an email from DNSimple letting you know a [domain push](/articles/transferring-domain-between-accounts/) is pending.

## Accept the domain push {#accept-push}

<div class="section-steps" markdown="1">
1. [Log in to DNSimple](https://dnsimple.com/login). You will see a notification on your dashboard about the pending push.
1. Click <label>View</label> to see the pending domain push, then click <label>Accept</label>.
1. You will be prompted to assign a [contact](/articles/changing-domain-contact/) to the domain. This updates the registrant information from ClickFunnels to you.
1. Click <label>Accept Push</label> to complete the transfer.
</div>

For more details on the push process, see [Transferring a Domain to Another DNSimple Account](/articles/transferring-domain-between-accounts/#accepting-a-transfer).

> [!WARNING]
> Changing the registrant information [locks the domain from external transfers for 60 days](/articles/icann-60-day-lock-registrant-change/). You will receive a verification email to confirm the contact change. Verify it promptly - ignoring it will lead to a [suspended domain](/articles/icann-domain-validation/).

## Manage your DNS {#dns}

Your DNS records transfer with the domain. If your site was working before the move, it will continue to work without changes.

- Your [name servers](/articles/what-is-a-nameserver/) do not need to change. The domain was already using DNSimple name servers through ClickFunnels.
- To view or edit your DNS records, click on the domain, then select the <label>DNS</label> tab. See the [record editor](/articles/record-editor/) guide for details.
- If you are no longer using ClickFunnels for your website and have switched to another hosting provider, you will need to update your DNS records to point to the new host. Contact your hosting provider for the records you need to add.

## Set up a certificate {#certificates}

ClickFunnels includes a certificate with their service. After moving the domain, you will need to manage your own certificate.

- For most sites, a [Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/) provides the security you need at no extra cost. Let's Encrypt certificates cover your root domain and `www` subdomain.
- If you need a [wildcard certificate](/articles/ordering-wildcard-certificate/) to cover all subdomains, check which [plans](/articles/dnsimple-plans/) support this feature.
- To compare certificate options, see [Sectigo vs Let's Encrypt](/articles/standard-vs-letsencrypt/).

> [!NOTE]
> If a certificate from ClickFunnels transferred with your domain but is set to [auto-renew](/articles/ssl-auto-renewal/), the renewal may fail if the certificate type requires a higher-tier plan. You can disable auto-renewal and order a new certificate that fits your plan.

## Have more questions?

If you have any questions about getting set up with DNSimple after moving from ClickFunnels, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

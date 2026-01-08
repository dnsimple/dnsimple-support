---
title: How to Use CoreDNS as an Integrated DNS Provider
excerpt: A how-to guide on connecting your CoreDNS instances with DNSimple.
meta: Easily sync your DNSimple-managed zones with multiple CoreDNS instances, streamlining your DNS management for enhanced performance and reliability.
categories:
- DNS
- Integrations
---

# How to Use CoreDNS as an Integrated DNS Provider

This tutorial will guide you through the process of connecting your CoreDNS instance with DNSimple. By integrating these services, you will be able to manage your CoreDNS zones directly from your DNSimple account, simplifying DNS management for your on-premise or self-hosted services.

You can follow along with the video below, or use it as a reference as you go through the numbered steps.

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">

  <iframe loading="lazy" src="https://www.youtube.com/embed/9yO2Oo_N1ms" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

</div>

> [!INFO]
> The **Integrations** link in the navigation menu referenced in the video has been deprecated. After [connecting](/articles/integrated-dns-providers/#connecting-an-integrated-dns-provider-to-your-account/) CoreDNS to your DNSimple account as an Integrated DNS Provider, use the **DNS Zone Providers** card in the DNS section of your domain's management page to [add](/articles/integrated-dns-provider-zones/#adding-a-zone-to-an-integrated-dns-provider), [remove](/articles/integrated-dns-provider-zones/#removing-integrated-zones-from-dnsimple/), or [delete](/articles/integrated-dns-provider-zones/#deleting-a-zone-from-an-integrated-dns-provider/) CoreDNS configuration for a zone.

## 1. Prerequisites

Before you begin, ensure you have the following:

- **A DNSimple account**.
- A running **CoreDNS instance** with the `coredns-dnsimple` plugin installed. You can either use the official DNSimple CoreDNS Binary or the DNSimple CoreDNS Docker Container.
- A [**DNSimple API access token**](/articles/api-access-token/) and **account ID** for the account you want to connect.

## 2. Setting up the integration

This section will prepare your CoreDNS instance to sync with your DNSimple account.

### Configure CoreDNS

1. Edit your `Corefile` and add a `dnsimple` plugin block for each zone you want to sync. The `Corefile` should include your API access token and account ID.  
   For example, to sync `example.com` and `example.org`, your `Corefile` would look like this:

  ```
  example.com {
    dnsimple example.com {
      access_token YSHAMES7AMTNMo7qHLGUkkg06p4rs
      account_id 131072
    }
  }
  example.org {
    dnsimple example.org {
      access_token YSHAMES7AMTNMo7qHLGUkkg06p4rs
      account_id 131072
    }
  }
  ```

2. Restart your CoreDNS instance to load the new configuration.

## 3. Syncing DNS records

Once the integration is set up, you can synchronize records from DNSimple to CoreDNS.

### One-way sync

The CoreDNS Integrated Provider supports a **one-way sync** from DNSimple to CoreDNS. All records configured for the zone at DNSimple will be synced to CoreDNS on startup and again during each refresh interval.

To sync records from DNSimple to CoreDNS:

1. Go to the relevant zone in your DNSimple account.  
1. Add or edit records in the DNSimple record editor.  
1. The CoreDNS instance will automatically sync these changes on its next refresh interval.

## 4. Verification

The best way to validate that your integration is working is to perform a check using a tool like `dig`.

1. Open your terminal and use `dig` to query for a record you've synchronized, specifying your CoreDNS instance as the server.  
   - E.g., `dig @localhost -p 53 example.com`  
1. The `ANSWER SECTION` of the output should show the IP address you expect, confirming that the record is being served correctly by your CoreDNS instance.

## Have more questions?
If you have additional questions or need any assistance with your Integrated DNS Providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

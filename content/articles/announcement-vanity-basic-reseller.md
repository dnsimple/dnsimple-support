---
title: Vanity name servers on legacy Basic Resellers plans no longer supported
excerpt: How to set a DS record on registered domains for Cloudflare DNSSEC.
categories:
---

# Vanity name servers on legacy Basic Resellers plans no longer supported

<info>
This article contains information that is only relevant to customers on legacy Basic Reseller plans. If you are impacted, you will receive an email from us asking you to take action.
</info>


### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our commitment to providing streamlined and reliable DNS management services, DNSimple will no longer support the use of vanity name server features for legacy Basic Reseller plans.

The Basic Reseller plan has never included the vanity name servers feature by default. However, access was grandfathered in for some accounts when the plan was first introduced 10 years ago.

The following IP addresses were primarily used by Basic Reseller accounts to configure vanity name servers, and they are now officially deprecated:

- 198.241.10.53
- 198.241.11.53
- 50.31.242.53
- 50.31.243.53
- 2620:111:8000::53
- 2620:111:8001::53
- 2620:111:8002::53
- 2620:111:8003::53

These IPs were replaced in 2016 and have since been removed from our public documentation. However, they were kept active due to some domains still actively using them.

We previously [anticipated this change in 2023](https://blog.dnsimple.com/2023/03/cache-edge-layer/), and are now ready to share an updated timeline.

## Who's impacted?

Accounts subscribed to the legacy Basic Reseller plan will be impacted if they have any domains using [vanity name servers](/articles/vanity-nameservers/) to either provide or delegate to vanity name servers.

## What's changing and how it will impact your domains

Beginning June 30, 2024:

- Basic Reseller accounts will no longer have access to the vanity name servers feature. They will no longer be able to enable vanity name servers on a domain unless the account is upgraded to a plan that includes the feature.
- The IP addresses listed above are officially deprecated and will be retired later this year (will follow up with a more detailed timeline).
- Vanity name servers will be removed for any domains still using the feature.
- Any domains in your account that provide vanity name servers will have the glue records removed and the vanity name servers feature turned off.
- Any domains in your account delegating to one of the previously configured vanity name server domains will stop resolving unless the domain is delegated to DNSimple name servers. If your domain is registered with DNSimple, we will automatically perform the changes for you.

## What do you need to do?

#### For domains registered with DNSimple

For all domains registered with DNSimple, we will automatically perform the necessary changes. The vanity name server feature will be shut down, and the delegation will be changed to DNSimple's name servers.

#### For domains not registered with DNSimple

For domains in your DNSimple account that are using vanity name servers but are not registered with DNSimple:

- Change the delegation to the default DNSimple name servers at your current registrar.
- Disable the vanity name servers feature.

## Access to vanity name servers

If you are interested in retaining your vanity name servers, you can upgrade to a plan that includes this feature before June 30, 2024. Just contact us at support@dnsimple.com, and we will be happy to assist you with the necessary changes or answer any questions.

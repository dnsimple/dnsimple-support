---
title: Discontinuation of grandfathered vanity name servers
excerpt: DNSimple will no longer support vanity name servers for grandfathered domains starting September 30, 2024. Affected customers will be notified via email.
categories:
---

# Discontinuation of grandfathered Vanity name servers

<info>
This article contains information that is only relevant to customers on certain plans. If you are impacted, you will receive an email from us asking you to take action.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our commitment to providing streamlined and reliable DNS management services, we are modernizing our name server infrastructure and discontinuing the use of vanity name servers for all plans on which the feature is not currently available. We will begin disabling the feature on September 30, 2024.

## Who's impacted?

Plans like Personal, Professional, Solo, and Teams have never included the vanity name servers feature by default. However, access was grandfathered in for some accounts.

Accounts subscribed to the Personal, Professional, Solo, or Teams plan will be impacted if they have any domains using [vanity name servers](https://support.dnsimple.com/articles/vanity-nameservers/) to either provide or delegate to vanity name servers.

## What's changing and how it will impact your domains

If you have affected domains, you have until September 30, 2024 to take action. After that date:

* Vanity name servers will be disabled for any domains still using the feature.
* Any domains in your account that provide vanity name servers will have the glue records removed and the vanity name servers feature turned off.
* Any domains in your account delegating to one of the previously configured vanity name server domains will stop resolving unless the domain is delegated to DNSimple name servers.

## What do you need to do?

* Review any domains you own, either at DNSimple or any third party registrar, and switch the delegation to the default DNSimple name servers if they delegate to a vanity name server. Any domain delegating to a legacy vanity name server will stop resolving once the feature is turned off.

* For domains in your DNSimple account that are using vanity name servers but are not registered with DNSimple, change the delegation to the default DNSimple name servers at your current registrar, and disable the vanity name servers feature.

### For domains registered with DNSimple

For all domains registered with DNSimple, we will automatically perform the necessary changes. The vanity name server feature will be shut down, and the delegation will be changed to DNSimple's name servers.

## Access to vanity name servers

If you are interested in retaining your vanity name servers, you can upgrade to a plan that includes this feature before September 30, 2024. Just contact us at <support@dnsimple.com>, and we will be happy to assist you with the necessary changes or answer any questions.

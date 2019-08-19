---
title: DNSimple SuperLock
excerpt: Protect your domain from accidental transfers with the DNSimple SuperLock.
categories:
- Domains
---

# Protect your domain from accidental transfers with the DNSimple SuperLock.

<info>
This article describes a feature in Private Beta.
</info>

<info>
This article describes a feature that is only available to the [new plans](/articles/new-plans#newer-plans-only).
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is the DNSimple SuperLock?
With the DNSimple SuperLock we introduce a mechanism to prevent a single individual to perform destructive operations on a single domain, such as transferring the domain out. Without the SuperLock, any user of an account has effectively admin power on any resource on the account and, for instance, can independently start a transfer out of a domain or push the domain into any other DNSimple account. Such power means a compromised user account can damage any resource inside the account.

With the SuperLock you can protect any domain from unintentional transfers or moves to a different account.

## Enabling the SuperLock

<info>
This feature in Private Beta. Your account will need granted access via [support@dnsimple.com](mailto:support@dnsimple.com) before you can proceed.
</info>

<warning>
Please read the process to [disable the SuperLock](#disabling-the-superlock) once the SuperLock is enabled you can not disable the SuperLock just by yourself.
</warning>


<div class="section-steps" markdown="1">
##### Enable the SuperLock

1. Log into DNSimple and open the domain you want to enable the Superlock on.
1. Select <label>Settings</label> in the menu on the left.
1. Press <label>Enable SuperLock</label>
</div>

![enabling the SuperLock in the settings page](/files/superlock-not-enabled.png)

That's it. Transfers and pushes are blocked for this domain, as long as the SuperLock is enabled.

As this feature is relevant for the security of the domain we are sending an email about this activity to all users in the account.

## Disabling the SuperLock
If you want to transfer a domain that has the SuperLock enabled, you will need to disable it before you can proceed.

To disable the SuperLock you will need a quorum of 2 users in the account to proceed.

<div class="section-steps" markdown="1">
##### Vote to disable the SuperLock

1. Log into DNSimple and open the domain you want to enable the Superlock on.
1. Select <label>Settings</label> in the menu on the left.
1. Press <label>Disable SuperLock</label>
</div>

![disabling the SuperLock in the settings page](/files/superlock-voted.png)

---
title: DNSimple SuperLock
excerpt: Protect your domain from accidental transfers with DNSimple SuperLock.
categories:
- Domains
---

# Protect your domain from accidental transfers with DNSimple SuperLock.

<info>
This article describes a feature in Private Beta.
</info>

<info>
This article describes a feature that is only available to [new plans](/articles/new-plans#newer-plans-only).
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

# What is SuperLock?
SuperLock is a mechanism to prevent individual users from performing destructive operations on a domain - like transferring the domain out. Without SuperLock, any user of an account effectively has admin power on any resource in the account. They could independently start a transfer out or push the domain into any other DNSimple account. That means a compromised user account can damage any resource inside the account.

With SuperLock, you can protect any domain from unintentional transfers or moves to a different account.

## Enabling SuperLock

<info>
This feature in Private Beta. Your account will need access granted via [support@dnsimple.com](mailto:support@dnsimple.com) before you can proceed.
</info>

<warning>
Please read the process to [disable SuperLock](#disabling-superlock). Once SuperLock is enabled you cannot disable it by yourself.
</warning>


<div class="section-steps" markdown="1">
##### Enable SuperLock

1. Log into DNSimple and open the domain for which you want to enable SuperLock.
1. Select <label>Settings</label> in the menu on the left.
1. Press <label>Enable SuperLock</label>
</div>

![enabling SuperLock in the settings page](/files/superlock-not-enabled.png)

That's it. Transfers and pushes are blocked for this domain as long as SuperLock is enabled.

This feature is relevant to the security of the domain. We'll send an email about this activity to all users in the account.

## Disabling SuperLock
If you want to transfer a domain that has SuperLock enabled, you'll need to disable SuperLock before you can proceed.

To disable SuperLock, you'll need a quorum of 2 users in the account to proceed.

<div class="section-steps" markdown="1">
##### Voting to disable SuperLock

1. Log into DNSimple and open the domain you want to enable SuperLock on.
1. Select <label>Settings</label> in the menu on the left.
1. Press <label>Disable SuperLock</label>
</div>

![disabling the SuperLock in the settings page](/files/superlock-voted.png)

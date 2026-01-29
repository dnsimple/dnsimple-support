---
title: DNSimple SuperLock
excerpt: Protect your domain from accidental transfers with DNSimple SuperLock
meta: Enhance your domain security with DNSimple SuperLock, preventing unauthorized transfers and ensuring your valuable assets remain safe and secure.
categories:
- Domains
---

# DNSimple SuperLock

> [!NOTE]
> This article describes a feature in private beta.

Protect your domains from accidental transfers with DNSimple SuperLock.

# What is SuperLock?

SuperLock is a mechanism that prevents individual users from performing destructive operations on a domain - like transferring the domain out. Without SuperLock, any user of an account effectively has admin power on any resource in the account. They could independently start a transfer out or push the domain into another DNSimple account. That means a compromised user account can damage any resource inside the account.

With SuperLock, you can protect any domain from unintentional transfers or moves to a different account.

## Why SuperLock is needed

In team accounts, multiple users may have access to domains for legitimate operational needs. However, this shared access creates a security risk: if any user's account is compromised, an attacker could transfer domains out of the account or move them to another account, potentially causing permanent loss. SuperLock adds an additional layer of protection by requiring a quorum of users to approve disabling the lock before any transfer or account move can occur. This prevents a single compromised account from causing catastrophic damage.

SuperLock protects against transfers and account moves, but it does not prevent other operations like DNS changes, contact updates, or certificate management. These operations remain available to authorized users because they are reversible and less likely to result in permanent domain loss.

## Enabling SuperLock

> [!NOTE]
> This feature is in private beta. Your account will need access granted via [support@dnsimple.com](mailto:support@dnsimple.com).

> [!WARNING]
> Please read the process to [disable SuperLock](#disabling-superlock). Once SuperLock is enabled, you cannot disable it by yourself.


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

The quorum requirement ensures that disabling SuperLock is a deliberate, collaborative decision rather than an action taken by a single user. This prevents accidental or malicious disabling of the protection. Both users must actively vote to disable SuperLock, which provides accountability and reduces the risk of unauthorized domain transfers.

<div class="section-steps" markdown="1">
##### Voting to disable SuperLock

1. Log into DNSimple and open the domain you want to enable SuperLock on.
1. Select <label>Settings</label> in the menu on the left.
1. Press <label>Disable SuperLock</label>
</div>

![disabling the SuperLock in the settings page](/files/superlock-voted.png)

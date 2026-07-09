---
title: Enforce Account-Wide Multi-Factor Authentication
excerpt: How to require all members of a DNSimple account to use multi-factor authentication.
meta: Require multi-factor authentication for every member on Teams and Enterprise accounts. Enable MFA enforcement after all members have MFA enabled.
categories:
- Account
- Enterprise
---

# Enforce Account-Wide Multi-Factor Authentication

### Table of Contents {#toc}

* TOC
{:toc}

---

[Multi-factor authentication](/articles/multi-factor-authentication/) (MFA) adds an extra verification step when members sign in. Enforce MFA on an account to require every member to use it. For why MFA matters, see [Account Security](/articles/account-securing/).

When multiple users manage an account, enforcing MFA reduces the risk of compromised credentials. This feature is available on Teams plans and higher for accounts that [manage members](/articles/managing-seats/).

## Enabling MFA enforcement {#enable}

You can enable MFA enforcement from account settings.

You can only enable MFA enforcement when **all members already have MFA enabled**. If a member does not enable MFA, remove them from the account to turn on enforcement, then re-invite them. They will be asked to enable MFA before they can join.

<div class="section-steps" markdown="1">
##### To enable MFA enforcement

1. Select the relevant account from the account switcher, then open <label>account settings</label>.

    ![screenshot: account settings](/files/account-nav-link.png)

1. Select the <label>Members and seats</label> tab on the left.
1. Scroll to the <label>Enforce Multi-Factor Authentication</label> card. When all members have MFA enabled, you can turn on enforcement.

    ![screenshot: mfa settings for account](/files/mfa.png)

1. If members do not have MFA enabled, you will see a list of non-compliant users. You can [remove those members](/articles/account-users/#removing-members-from-an-account) from the <label>Members</label> card.

    ![screenshot: non compliant mfa users](/files/non-compliant-mfa-users.png)

</div>

## Disabling MFA enforcement {#disable}

<div class="section-steps" markdown="1">
##### To disable MFA enforcement

1. Select the relevant account from the account switcher, then open <label>account settings</label>.

    ![screenshot: account settings](/files/account-nav-link.png)

1. Select the <label>Members and seats</label> tab on the left.
1. Scroll to the <label>Enforce Multi-Factor Authentication</label> card, then click <label>Disable</label>.

    ![screenshot: disable mfa](/files/mfa-disable.png)

</div>

## Disabling MFA while on an enforced team {#disabling-mfa-on-enforced-team}

You can always [disable multi-factor authentication](/articles/multi-factor-authentication/#disable) on your user profile. Doing so automatically removes you from every account that enforces MFA.

> [!WARNING]
> If you disable MFA, you are immediately removed from all accounts that enforce MFA. Only disable MFA on your user if you no longer need access to those accounts.

## Inviting new members to an MFA-enforced account {#inviting-to-mfa-enforced-account}

You can invite new people to your account without restrictions. When you invite users who do not yet have DNSimple users, they are asked to enable MFA after signup before they can join.

If the user already has a DNSimple user, they can join only when they have [MFA enabled](/articles/multi-factor-authentication/#enable).

## Have more questions?

If you have questions about enabling or disabling MFA enforcement, [contact support](https://dnsimple.com/feedback), and we will be happy to help.

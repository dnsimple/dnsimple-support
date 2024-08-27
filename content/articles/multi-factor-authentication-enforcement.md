---
title: Enforce Multi-Factor Authentication for All Members of an Account
excerpt: How to ensure an account is secured by requiring all members of an account to use Multi-Factor Authentication.
categories:
- Account
---

# Enforce Multi-Factor Authentication for All Members of an Account

### Table of Contents {#toc}

* TOC
{:toc}

---

[Multi-factor authentication](/articles/multi-factor-authentication/) (MFA) provides an extra level of security to protect your user credentials. You can enforce MFA for account members by enabling the feature on the account to ensure everyone on your team is using the best available security.

When you have multiple users managing an account, enforcing MFA is vital to reduce the likelihood of a user's credentials being compromised. This feature is available on the Teams plan and higher, with the ability to [manage members of an account](/articles/account-users/).

## Enabling MFA enforcement {#enable}

You can enable multi-factor authentication enforcement from your Account page.

**You can only enable MFA enforcement on an account if all users have MFA enabled.** If they don't enable it, you have to remove them from the team to enable this feature, then re-invite them. They'll be asked to enable MFA after they sign up so they can join your account.

<div class="section-steps" markdown="1">
##### To enable MFA enforcement

1.  Go to your account settings by selecting the relevant account and clicking *Account* at the top right of the dashboard.

![screenshot: account settings](/files/account-settings.png)

1.  Select the <label>Members and seats</label> tab on the left.
1.  Scroll down until you see the <label>Enforce Multi-Factor Authentication</label> card. When all members of your Team have MFA enabled, you can use this feature.

![screenshot: mfa settings for account](/files/mfa.png)

1.  If there are users in your account who don't have MFA enabled, you'll see a list of non-compliant users. You can [remove the users](/articles/account-users/#removing-members-from-an-account) from the account in the **Members** card.

![screenshot: non compliant mfa users](/files/non-compliant-mfa-users.png)
</div>


## Disabling MFA enforcement {#disable}

<div class="section-steps" markdown="1">
##### To disable MFA enforcement

1.  Go to your account settings by selecting the relevant account and clicking *Account* at the top right of the dashboard.

![screenshot: account settings](/files/account-settings.png)

1.  Select the <label>Members and seats</label> tab on the left.
1.  Scroll down until you see the <label>Enforce Multi-Factor Authentication</label> card. There's a link to <label>Disable</label> the feature.

![screenshot: disable mfa](/files/mfa-disable.png)

</div>

## Disabling MFA while on an enforced team

You always retain the option to [disable multi-factor authentication](/articles/multi-factor-authentication/#disable) on your personal account. However, this action will automatically remove you from all accounts that enforce MFA.

<warning>
If you disable MFA, you will immediately be removed from all accounts that enforce MFA to ensure the continued security of those accounts. Only remove MFA from your personal account if you no longer need access to any accounts that enforce MFA.
</warning>

## Inviting new people into an MFA-enforced team

There are no restrictions on inviting new people to your account. When you invite users who don't already have DNSimple accounts, they'll be asked to enable MFA after they sign up so they can join your account.

If the user already has a DNSimple account, they can only join the team if they have [MFA enabled](https://support.dnsimple.com/articles/multi-factor-authentication/#enable).

## Need more help?

If you need any assistance enabling or disabling MFA enforcement for your account, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.

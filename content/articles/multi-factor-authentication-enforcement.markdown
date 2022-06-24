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

[Multi-Factor Authentication](/articles/multi-factor-authentication/) (MFA) provides an extra level of security to protect your user credentials. You can enforce MFA for account members by enabling the feature on the account.

When you have multiple users managing an account, it's vital to reduce the likelihood of a user's credentials being compromised. This feature is available on all accounts that have the ability to [manage members of an account](/articles/account-users/).

## Enabling Multi-Factor Authentication enforcement {#enable}

You can enable Multi-Factor Authentication enforcement from your account members page.

You can only enable MFA enforcement on an account if all users have MFA enabled. If they don't enable it, you have to remove them from the team to enable this feature, then re-invite them. They'll be asked to enable MFA after they sign up so they can join your account.

<div class="section-steps" markdown="1">
##### To enable Multi-Factor Authentication enforcement

1.  Log in to DNSimple with your user credentials.
1.  Go to your account settings by selecting the <label>Settings</label> or <label>Account Settings</label> link from the navigation.

    ![Settings menu](/files/account-settings-access.jpg)

1.  Select <label>Members</label> from the menu on the left.
1.  Scroll down until you see the <label>Enforce Multi-Factor Authentication</label> section. When all members of your Team have MFA enabled, you can use this feature.

    ![Multi-Factor authentication enforcement](/files/account-2fa-enforcement.png)

1.  If there are users in your account who don't have MFA enabled, you'll see a list of users that are non-compliant. You can [remove the users](/articles/account-users/#removing-members-from-an-account) from the account in the section above.
</div>


## Disabling Multi-Factor Authentication enforcement {#disable}

<div class="section-steps" markdown="1">
##### To disable Multi-Factor Authentication

1.  Log in to DNSimple with your user credentials.
1.  Go to your account settings by selecting the <label>Settings</label> or <label>Account Settings</label> link from the navigation.

    ![Settings menu](/files/account-settings-access.jpg)

1.  Select <label>Members</label> from the menu on the left.
1.  Scroll down until you see the <label>Enforce Multi-Factor Authentication</label> section. There's a link to <label>Disable</label> the feature.

    ![Disable Multi-Factor Authentication enforcement](/files/account-disable-2fa-enforcement.png)
</div>


## Disabling Multi-Factor Authentication while in an enforced team

If you're part of a team that enforces MFA, you can still [disable Multi-Factor Authentication](/articles/multi-factor-authentication/#disable) on your personal account.

<warning>
If you disable MFA, you will be removed from all accounts that enforce MFA.
</warning>


## Inviting new people into an MFA-enforced team

There are no restrictions on inviting new people to your account. When you invite users who don't already have DNSimple accounts, they'll be asked to enable MFA after they sign up so they can join your account.

If the user already has a DNSimple account, they can only join the team if they have MFA enabled. 

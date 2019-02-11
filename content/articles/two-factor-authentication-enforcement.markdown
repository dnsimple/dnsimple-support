---
title: Enforce Two-Factor Authentication for all members of an account
excerpt: How to ensure an account is secured by enforcing all the members of an account to use two-factor authentication.
categories:
- Account
---

# Enforce Two-Factor Authentication For All Members of an Account

<info>
This article describes a feature in Public Beta.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

[Two-Factor authentication](/articles/two-factor-authentication/) provides an extra level of security to protect your user credentials. You can enforce two-factor authentication on account members by enabling the feature for the account.

When you have multiple users managing an account, it's vital to reduce at minimum the likelyhood of an user credential being compromised. This feature is available on all accounts that have the ability to [manage members of an account](/articles/account-users/).

## Enabling Two-Factor authentication enforcement {#enable}

You can enable Two-Factor authentication enforcement from your account members page.

You can only enable Two-Factor authentication enforcement an account if all users have Two-Factor authentication enabled. If they don't enable it, you have to remove them from the team to enable this feature, then re-invite them. They'll be asked to enable Two-Factor authentication after they sign up so they can join your account.

<div class="section-steps" markdown="1">
##### To enable Two-Factor authentication enforcement

1.  Log in to DNSimple with your user credentials.
1.  Go to your account settings by selecting the <label>Settings</label> or <label>Account Settings</label> link from the navigation.

    ![Settings menu](/files/account-settings-access.jpg)

1.  Select <label>Team</label> from the menu on the left.
1.  Scroll down until you see the <label>Enforce two-factor authentication</label> section. When all members of your Team have Two-Factor authentication enabled, you can enable this feature right away.

    ![Two-Factor authentication enforcement](/files/account-2fa-enforcement.png)

1.  If there are users in your account that don't have Two-Factor authentication enabled, you'll see a list of users that are non-compliant. You can [remove the users](/articles/account-users/#removing-members-from-an-account) from the account in the section above.
</div>


## Disabling Two-Factor authentication enforcement {#disable}

<div class="section-steps" markdown="1">
##### To disable Two-Factor authentication

1.  Log in to DNSimple with your user credentials.
1.  Go to your account settings by selecting the <label>Settings</label> or <label>Account Settings</label> link from the navigation.

    ![Settings menu](/files/account-settings-access.jpg)

1.  Select <label>Team</label> from the menu on the left.
1.  Scroll down until you see the <label>Enforce two-factor authentication</label> section. There's a link to <label>Disable</label> the feature.

    ![Disable Two-Factor authentication enforcement](/files/account-disable-2fa-enforcement.png)
</div>


## Disabling Two-Factor authentication while in an enforced team

If you're part of a team that enforces Two-Factor authentication, you can still [disable Two-Factor authentication](/articles/two-factor-authentication/#disable) on your personal account.

<warning>
If you are disabling Two-Factor authentication, you will be removed from all accounts that enforce Two-Factor authentication.
</warning>


## Inviting new people into an 2FA enforcing team

There are no restrictions on inviting new people to your account. When you invite users to join your account that do not have an DNSimple account, they'll be asked to enable Two-Factor authentication after they sign up so they can join your account.

If the user already has a DNSimple account, they can't join the team if they don't have Two-Factor authentication enabled.

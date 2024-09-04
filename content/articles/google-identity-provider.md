---
title: Google as an Identity Provider
excerpt: How to use Google to create and log in to accounts.
categories:
- Account
---

# Google as an Identity Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

Using Google as an identity provider streamlines the login experience for you and your team, and centralizes your organization's identity security to help you manage risk at scale. Read more about [the benefits of using Google Single Sign-On (SSO)](https://blog.dnsimple.com/2022/06/google-identity-provider/).

## Registering a new DNSimple account via Google

[Signing up](https://dnsimple.com/signup) for a DNSimple account using Google as your identity provider is straightforward.

1. Click **Sign up using Google**.
1. Select your Google account.
1. You'll be returned to DNSimple logged in to your new DNSimple account. We'll use your Gmail address as both your user and account address.

![Signing up to DNSimple via Google](/files/google-sso-social-signup.png)

## Linking a Google account to your DNSimple user

![Link a Google identity](/files/google-link-identity.png)

<div class="section-steps" markdown="1">
#### To link a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Add</label> next to the Google identity provider.
1. Authenticate your Google account.
1. You can now log in to DNSimple using the linked Google identity.
</div>

## Linking a Google Workspace to a DNSimple account

![screenshot: add identity provider](/files/add-identity-provider.png)

<div class="section-steps" markdown="1">
#### To link a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Clicking <label>Add</label> next to the Google SSO provider will take you to Google to authorize the Workspace. You'll need to be logged-in to the Google Workspace as an administrator of the workspace.
1. Google will show you what access DNSimple is requesting.
1. Google SSO is enabled on the account.
1. Repeat the process for each account where you want Google SSO enabled.
</div>

If the Google Workspace is no longer linked (e.g. the access token is revoked), you can re-link the Workspace using the **Re-connect** button.

## Logging in to DNSimple via Google

### Personal

If you did not sign up for DNSimple using Google, and you're using your personal Gmail account, you'll need to [link a Google account your DNSimple user](#linking-a-google-account-your-dnsimple-user) before you can log in via Google. Once your account is linked, you can use your Google account to log in from the the [login page](https://dnsimple.com/login).

### Workspace

You'll need to [link a Google Workspace to your DNSimple account](#linking-a-google-workspace-to-a-dnsimple-account) before your team members can log in via Google SSO.

Once a Google Workspace is linked to a DNSimple account, any member of the Google Workspace can request access to the DNSimple account by attempting to log in via Google using the respective Workspace.

If this is the first time they're logging in, an email will be sent to the account owner indicating a new team member has signed in to the account. The new team member will not be able to see anything in the account until a team member with full access configures their [access roles](/articles/domain-access-control/).

### Suspended & deleted team members

When you delete or suspend a team member from your company's Google Workspace admin, the corresponding member's DNSimple access will be revoked automatically, reducing the administration requirements for your organization.

## Unlinking a Google Workspace from a DNSimple account

![screenshot: unlink Google identity provider](/files/unlink-google-identity-provider.png)

<div class="section-steps" markdown="1">
#### To unlink a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you wish to remove.
</div>

## Unlinking a Google account from your DNSimple user

![screenshot: identity provider list](/files/identity-provider-list.png)

<div class="section-steps" markdown="1">
#### To unlink a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Revoke</label> next to the Google identity you wish to remove.
1. The selected identity can no longer be used to log in to your DNSimple account. You'll see a banner confirming the provider has been unlinked.

![screenshot: remove Google identity success](/files/remove-google-identity-success.png)

</div>

## Have more questions?

If you have any questions about using Google SSO with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

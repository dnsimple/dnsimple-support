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

Using Google as an identity provider is a great tool to streamline the login experience for you and your team.

## Registering a new DNSimple account via Google

We offer the option of signing up for a DNSimple account [using Google as your identity provider](/articles/google-identity-provider). When you click "Sign up using Google," you'll be prompted to select your Google account. Next, you'll be returned to DNSimple logged in to your new DNSimple account. We'll use your Gmail address as your user and account address.

![Signing up to DNSimple via Google](/files/google-sso-social-signup.png)

## Logging in to DNSimple via Google

You will need to [link a Google Workspace to your DNSimple account](#linking-a-google-workspace-to-a-dnsimple-account) before your team members are able to log in via Google SSO. Likewise, if you are using your personal Gmail account, then you will need to [link a Google account your DNSimple user](#linking-a-google-account-your-dnsimple-user) before you can log in via Google. 


[Once a Google Workspace is linked to a DNSimple account](#linking-a-google-workspace-to-a-dnsimple-account), any member of the Google Workspace can request access to the DNSimple account. They can do so by attempting to log in via Google using the respective Workspace. 

If this is the first time that they are logging in, an email will be sent to the account owner indicating a new team member has signed in to the account. The new team member will not be able to see anything in the account until a team member with full access configures their [access roles](/articles/domain-access-control/).

Now, the team members can now easily log in with their Google identity. When a member is deleted or suspended from your company's Google Workspace admin, the corresponding member's DNSimple access will be revoked automatically, greatly reducing the administration requirements for your organization.

## Linking a Google Workspace to a DNSimple account

![Linking a Google Workspace](/files/google-sso-enable.png)

<div class="section-steps" markdown="1">
#### To link a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Clicking <label>Add</label> next to the Google SSO provider will take you to Google to authorize the Workspace.
1. Google will show you what access DNSimple is requesting.
1. Google SSO is enabled on the account.
1. Repeat the process for each account where you want Google SSO enabled.
</div>

If you run into a situation where the Google Workspace is no longer linked (eg. the access token is revoked), you can re-link the Workspace using the "Re-connect" button.

## Unlinking a Google Workspace from a DNSimple account

![Unlink a Google Workspace](/files/google-sso-enabled.png)

<div class="section-steps" markdown="1">
#### To unlink a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you wish to remove.
</div>

## Linking a Google account to your DNSimple user

![Link a Google identity](/files/google-link-identity.png)

<div class="section-steps" markdown="1">
#### To link a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Add</label> next to the Google identity provider.
1. Authenticate your Google account.
1. You can now log in to DNSimple using the linked Google identity.
</div>

## Unlinking a Google account from your DNSimple user

![Unlink a Google identity](/files/google-unlink-identity.png)

<div class="section-steps" markdown="1">
#### To unlink a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Revoke</label> next to the Google identity you wish to remove.
1. The selected identity can no longer be used to log in to your DNSimple account.
</div>

---
title: Okta as an Identity Provider
excerpt: How to use Okta to create and log in to accounts.
categories:
- Account
---

# Okta as an Identity Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

Using Okta as an identity provider streamlines the login experience for you and your team.

## Prequisites

In order to proceed with configuring login with SSO through Okta, you must:

- Have administrator access to an Okta organization
- Have administrator access to a DNSimple account
- Have the Okta integration feature enabled on your DNSimple account

## Supported Features

- **IdP-initiated Single Sign-On (SSO)**: This authentication flow occurs when the user attempts to log in to DNSimple from Okta.
- **Import Users** & **Import Groups**: Manage who can access your DNSimple account via Okta
- **Single Log Out (SLO)**: Users can log out of their DNSimple session by logging out of their Okta session.

## Configure Okta with DNSimple

Follow the instructions below to connect DNSimple to your Okta organization.

### Add the DNSimple App to Okta

1. Login to your organization's Okta marketplace.
1. Search for DNSimple, and then click Add.
1. Enter an Application Label in General Settings.
1. Click Done.
1. Take note of your Client ID, Client Secret, and Okta Domain as you'll need it in the next step.

### Configure Okta for SSO in DNSimple

To add SSO to your DNSimple account, send an email to support@dnsimple.com with the following information from the previous step:

- Okta Client ID (from the previous step)
- Okta Client Secret (from the previous step)
- Issuer URL (Okta Domain)
- DNSimple Account ID

Once we receive that info, we can enable the feature on your account and add the Okta configuration.

<!-- 1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Clicking <label>Add</label> next to the Okta SSO provider will take you to Okta to authorize the Workspace. You'll need to be logged-in to the Okta Workspace as an administrator of the workspace.
1. Okta will show you what access DNSimple is requesting.
1. Okta SSO is enabled on the account.
1. Repeat the process for each account where you want Okta SSO enabled.

If the Okta app is no longer linked (e.g. the access token is revoked), you can re-link the Workspace using the "Re-connect" button. -->

### Assign People or Groups

To give people or groups access to DNSimple, click "Assignments" in under the configured DNSimple app in your Okta dashboard. Then, click "Assign" and select the appropriate users or groups. Assigned users (or users via groups) will now be able to log into DNSimple via SSO.

<info>
Our integration works with groups! Leverage them to simplify your team access management.
</info>

If you experience any issues or have any questions, please reach out at support@dnsimple.com.

## Remove the configuration

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you wish to remove.

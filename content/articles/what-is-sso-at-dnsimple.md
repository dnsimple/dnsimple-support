---
title: What is SSO at DNSimple
excerpt: What single sign-on is at DNSimple, which plans support it, and how identity providers connect to your account.
meta: Single sign-on (SSO) lets your team sign in to DNSimple through an identity provider such as Okta, Google Workspace, or Microsoft Entra. Learn what SSO is, which plans support it, and which providers DNSimple supports.
categories:
- Account
- Enterprise
---

# What is SSO at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Single sign-on (SSO) lets members of your organization sign in to DNSimple using your company's **identity provider** instead of a DNSimple password alone.

> [!NOTE]
> SSO with Okta or Google is available on [Teams plans](https://dnsimple.com/pricing) and Enterprise. SSO with Microsoft Entra is available on Enterprise plans.

## What SSO does at DNSimple {#what-sso-does}

With SSO configured, users authenticate through your organization's identity provider. DNSimple trusts that provider to confirm their identity. This centralizes login management for your team and aligns with how you control access to other business applications.

SSO does not replace DNSimple account structure. Users still work inside **accounts**, and members still need appropriate [seats](/articles/managing-seats/) and [access levels](/articles/what-is-domain-access-control/) on each account. For how users, accounts, and members relate, see [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/).

## Identity providers {#identity-providers}

An **identity provider** (IdP) is the system your organization uses to manage users and sign-in (for example Okta, Google Workspace, or Microsoft Entra). DNSimple supports connecting an IdP on eligible plans.

To configure a provider, follow the How-to guide for your IdP:

- [Okta as an Identity Provider](/articles/okta-identity-provider/) — Teams and Enterprise
- [Google as an Identity Provider](/articles/google-identity-provider/) — Teams and Enterprise
- [Entra as an Identity Provider](/articles/entra-identity-provider/) — Enterprise

## SSO and account security {#sso-and-security}

SSO is one layer of account security. DNSimple still recommends [multi-factor authentication](/articles/multi-factor-authentication/) where it applies to your sign-in flow, and [Domain Access Control](/articles/what-is-domain-access-control/) to limit what each member can change after they sign in.

For general security practices, see [Account Security](/articles/account-securing/).

## Have more questions?

If you have questions about SSO or identity providers at DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

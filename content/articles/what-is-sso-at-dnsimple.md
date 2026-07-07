---
title: What is SSO at DNSimple
excerpt: How single sign-on works at DNSimple, which plans support it, and how identity providers connect to your account.
meta: SSO at DNSimple lets Enterprise teams sign in through an identity provider such as Entra, Google Workspace, or Okta. Learn what SSO is and which providers DNSimple supports.
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
> SSO is available on [Enterprise plans](https://dnsimple.com/pricing) only.

## What SSO does at DNSimple {#what-sso-does}

With SSO configured, users authenticate through your organization's identity provider. DNSimple trusts that provider to confirm their identity. This centralizes login management for your team and aligns with how you control access to other business applications.

SSO does not replace DNSimple account structure. Users still work inside **accounts**, and members still need appropriate [seats](/articles/managing-seats/) and [access levels](/articles/what-is-domain-access-control/) on each account. For how users, accounts, and members relate, see [Users, Accounts, and Members at DNSimple](/articles/users-accounts-and-members-at-dnsimple/).

## Identity providers {#identity-providers}

An **identity provider** (IdP) is the system your organization uses to manage users and sign-in (for example Microsoft Entra, Google Workspace, or Okta).

DNSimple supports connecting an identity provider to an Enterprise account. Setup steps depend on which provider you use.

## Supported providers {#supported-providers}

DNSimple provides How-to guides for these identity providers:

- [Entra as an Identity Provider](/articles/entra-identity-provider/)
- [Google as an Identity Provider](/articles/google-identity-provider/)
- [Okta as an Identity Provider](/articles/okta-identity-provider/)

Each guide walks through linking your provider to a DNSimple account and configuring sign-in for your team.

## SSO and account security {#sso-and-security}

SSO is one layer of account security. DNSimple still recommends [multi-factor authentication](/articles/multi-factor-authentication/) where it applies to your sign-in flow, and [Domain Access Control](/articles/what-is-domain-access-control/) to limit what each member can change after they sign in.

For general security practices, see [Account Security](/articles/account-securing/).

## Have more questions?

If you have questions about SSO or identity providers at DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

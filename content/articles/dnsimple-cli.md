---
title: What Is the DNSimple CLI?
excerpt: The DNSimple CLI is a command-line interface for managing domains, DNS records, and certificates from your terminal.
meta: The DNSimple CLI lets you manage domains, DNS records, SSL certificates, and registrar operations from the command line. It authenticates with an API access token and covers most of the DNSimple API surface.
categories:
- API
---

# What Is the DNSimple CLI?

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple CLI is a command-line interface that provides direct access to the [DNSimple API](/articles/api-documentation/). It covers most of the API surface, so you can manage domains, DNS records, certificates, and other resources from your terminal instead of the web interface.

## What the CLI covers {#scope}

The CLI organizes operations into command groups that map to DNSimple features:

- **Domains and DNS** - Create and manage domains, DNS zones, and zone records. Enable and disable DNSSEC. Configure email forwarding.
- **Registrar** - Check domain availability, register domains, renew registrations, manage transfers, and view pricing.
- **Certificates** - List and inspect SSL certificates, including Let's Encrypt certificates.
- **Contacts** - Create and manage the contact records used for domain registrations.
- **Services and templates** - Apply one-click services to domains and manage DNS record templates.
- **Webhooks** - Create and manage webhook endpoints for [API events](/articles/webhooks/).
- **Billing and analytics** - View billing charges and query DNS analytics data.
- **Shell completions** - Generate tab-completion scripts for bash, zsh, fish, and PowerShell.
- **AI context** - Output structured information about your account for use with AI agents and automation tools.

## How the CLI authenticates {#authentication}

The CLI authenticates with an [API access token](/articles/api-access-token/). You can provide the token through interactive login, an environment variable, or a command-line flag. The full authentication details are available in the [CLI documentation on the developer site](https://developer.dnsimple.com/).

## How to get the CLI {#installation}

The CLI is available through Homebrew and an install script, with pre-built binaries for Linux, macOS, and Windows on both amd64 and arm64 architectures. Visit the [CLI documentation on the developer site](https://developer.dnsimple.com/) for installation instructions.

## Have more questions?

If you have any questions about the DNSimple CLI, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

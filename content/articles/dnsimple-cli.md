---
title: What is the DNSimple CLI?
excerpt: The DNSimple CLI is a command-line tool for managing domains, DNS records, and certificates from your terminal.
meta: The DNSimple CLI is a cross-platform command-line tool for managing domains, DNS records, SSL certificates, and registrar operations from your terminal. Install the DNSimple CLI on macOS, Linux, or Windows, authenticate with an API access token, and manage DNS zones from the command line.
categories:
- API
---

# What Is the DNSimple CLI?

### Table of Contents {#toc}

* TOC
{:toc}

---

The DNSimple CLI is a command-line interface that covers the full [DNSimple API](/articles/api-documentation/). You can register domains, create and update DNS records, order SSL certificates, and control every other DNSimple feature from your terminal.

## What can you do with the DNSimple CLI? {#scope}

The CLI organizes DNSimple CLI commands into groups that map to DNSimple features:

- **Domains and DNS** - List domains, create and update DNS zone records, delete records, activate zones, check zone distribution, enable and disable DNSSEC, and configure email forwarding.
- **Registrar** - Check domain availability, register domains, renew registrations, manage transfers, enable WHOIS privacy, and view pricing.
- **Certificates** - List and inspect SSL certificates, including Let's Encrypt certificates.
- **Contacts** - Create and manage the contact records used for domain registrations.
- **Services and templates** - Apply one-click services to domains and manage DNS record templates.
- **Webhooks** - Create and manage webhook endpoints for [API events](/articles/webhooks/).
- **Billing and analytics** - View billing charges and query DNS analytics data.
- **Shell completions** - Generate tab-completion scripts for bash, zsh, fish, and PowerShell.
- **AI context** - Output structured information about your account for use with AI agents and automation tools.

You do not need to use the CLI for write operations only. It works just as well in read-only mode to list domains, collect analytics, or inspect certificates.

## Why manage domains from the command line? {#why}

Switching to a browser to manage DNS records breaks the flow of terminal-based work and introduces manual error. The DNSimple command-line tool keeps you where your work already is.

For automation, the CLI gives CI pipelines and deployment scripts structured commands with proper error handling - an improvement over raw API calls. The `--json` flag provides structured output you can pipe into tools like `jq`.

Teams that manage multiple accounts benefit from the CLI's context system. Named auth contexts let you switch between production, [sandbox](/articles/sandbox/), and client accounts in a single command.

## How does the DNSimple CLI work with AI agents? {#ai}

The CLI includes an `ai` command that outputs structured context about your account and available DNSimple CLI commands. AI agents can run this command to learn how to interact with the DNSimple platform, then formulate and execute commands based on natural-language requests. This enables agentic workflows where complex domain and DNS management tasks are automated through conversation.

## How does the DNSimple CLI authenticate? {#authentication}

The CLI authenticates with an [API access token](/articles/api-access-token/). You can provide your token through interactive account login, an environment variable, or a command-line flag. The full authentication details are available in the [CLI documentation on the developer site](https://developer.dnsimple.com/cli/).

## How do you install the DNSimple CLI? {#installation}

The DNSimple CLI is a cross-platform command-line tool with pre-built binaries for macOS, Linux, and Windows on both amd64 and arm64 architectures. You can install it through Homebrew or a one-line install script. Visit the [CLI documentation on the developer site](https://developer.dnsimple.com/cli/) for setup instructions and DNSimple CLI examples.

## Have more questions?

If you have any questions about the DNSimple CLI, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

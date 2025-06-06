---
title: Terraform Provider
excerpt: How to use DNSimple's Terraform provider to manage your DNS
meta: Discover how to efficiently manage your DNS using DNSimple's Terraform provider. Learn setup, configuration, and best practices to streamline your DNS management.
categories:
- Integrations
---

# DNSimple Terraform Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

[Terraform](https://terraform.io) is an Infrastructure as Code (IaC) tool that allows you to build, change, and version
infrastructure safely and efficiently. With [DNSimple's Terraform Provider](https://registry.terraform.io/providers/dnsimple/dnsimple/latest),
you can easily manage your DNS infrastructure and set up the required DNS records.

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/cTWP1MWA-0c" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Configuring the DNSimple provider

```ruby
provider "dnsimple" {
    token    = "${var.dnsimple_token}"
    account  = "${var.dnsimple_account}"
    sandbox  = true
    prefetch = false
}
```

To start using DNSimple's Terraform Provider, you'll have to configure it.

The DNSimple API v2 token must be provided in the token part of the provider's configuration. You can use either a User or an Account Token. We recommend using the Account token. You can read our [API Access Token](https://support.dnsimple.com/articles/api-access-token/) support article for more information on how to get a token.

The **account** argument is the account ID associated with the token. For more information on obtaining your account ID, take a look at [Account scope](https://developer.dnsimple.com/v2/#account-scope) in our [developer documentation](https://developer.dnsimple.com).

The **sandbox** argument tells the provider to use the sandbox environment. The token and account ID will vary between the sandbox and our production environment. The sandbox environment is a great place to make sure you have your configuration dialed in before using it in the actual production environment. To learn more about our sandbox environment, read [Sandbox for Testing Calls to the API](https://support.dnsimple.com/articles/sandbox/).

The **prefetch** argument tells the provider if it should prefetch *ZoneRecords* when reading them. This is important when you manage many domains, because you might risk reaching your rate limits for API usage. Only the token and account arguments are required.

## Creating a Domain

```ruby
resource "dnsimple_domain" "dnsimple" {
    name = "dnsimple.com"
}
```

To create a domain, you'll have to use the *dnsimple_domain* resource. After naming the resource and adding the domain name (using the name attribute), you're ready to go. Running the "terraform apply" command will make sure the domain is created for you.

## Email Forwards

```ruby
resource "dnsimple_email_forward" "hello" {
    domain              = "https://example.com"
    alias_name          = "hello"
    destination_email 	= "changed@example.com"
}
```

To create an email forward, you'll need to provide the destination email for the domain for which you want to set up the email forward. Our [Email Forwarding](https://support.dnsimple.com/articles/email-forwarding/) support article has more information about email forwards.

## Setting up a Let's Encrypt Certificate

```ruby
resource "dnsimple_lets_encrypt_certificate" "my-certificate" {
    domain_id = "http://example.com"
    contact_id = "The contact id (found in your dnsimple admin)"
    auto_renew = false
    name = "www"
}
```

To add a certificate to your domain, decide which domain the certificate is going to be for, and provide a contact for the certificate. We'll take care of the rest. For more information, take a look at our [SSL Certificates Section](https://support.dnsimple.com/categories/ssl-certificates/).

You can also use the *dnsimple_certificate* data source to download a certificate:

```ruby
data "dnsimple_certificate" "my-certificate" {
    domain         = "http://exmple.com"
    certificate_id = "The contact id (found in your dnsimple admin)"
}
```

## Setting up a zone record

```ruby
resource "dnsimple_zone_record" "mailserver" {
    zone_name = "https://example.com"
    name = "mailserver"
    value = "https://mx2.example.com"
    type = "MX"
    ttl = 3600
    priority = 10
}
```

When setting up a record (an MX (mail exchange) record in this example), provide the following information:

- The zone name this record is for
- A name (for your own records)
- The value of the record (for the MX record in the example, this is the address to the mail server.)
- The type of record (MX in the example) – see [Supported Record Types](https://support.dnsimple.com/articles/supported-dns-records/) for a comprehensive list of the records we support.
- The time to live (TTL) of the record
- The priority

## Ready to go

You're now ready to get started with [DNSimple's Terraform Provider](https://registry.terraform.io/providers/dnsimple/dnsimple/latest). As always, if you have more questions, [get in touch](https://dnsimple.com/contact) - we're always happy to help.

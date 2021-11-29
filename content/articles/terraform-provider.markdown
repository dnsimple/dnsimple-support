---
title: Terraform Provider
excerpt: How to use the DNSimple Terraform provider to manage your DNS
categories:
- Services
- Terraform and DNSimple
---

# DNSimple Terraform Provider

### Table of Contents {#toc}

* TOC
  {:toc}

---

[Terraform](https://terraform.io) is an infrastructure as code (IoC) tool that allows you to build, change, and version
infrastructure safely and efficiently. With [DNSimple’s Terraform Provider](https://registry.terraform.io/providers/dnsimple/dnsimple/latest),
you can easily manage your DNS infrastructure and set up the required DNS records.

## Configuring the DNSimple provider

```
provider "dnsimple" {
    token    = "${var.dnsimple_token}"
    account  = "${var.dnsimple_account}"
    sandbox  = true
    prefetch = false
}
```

To start using the DNSimple’s Terraform Provider, we will have to configure it properly first.

The DNSimple API v2 token must be provided in the token part of the provider's configuration 
(for more information on obtaining your token, please refer to 
[API Access Token](https://support.dnsimple.com/articles/api-access-token/)). You can use either a User or an Account 
Token, but we recommend using the Account token instead of the User token.

The **account** argument is the ID of the account associated with the token (for more information on how to obtain your 
account ID, please refer to [Account scope](https://developer.dnsimple.com/v2/#account-scope) in our 
[developer documentation](http://developer.dnsimple.com).

The **sandbox** argument tells the provider to use the sandbox environment (note that the token and account ID will vary 
between the sandbox and our production environment. The sandbox environment is a great place to make sure you have your 
configuration dialled in before using it in the actual production environment. For more information about the sandbox 
environment, please refer to [Sandbox for Testing Calls to the API](https://support.dnsimple.com/articles/sandbox/).

The **prefetch** argument tells the provider if it should prefetch ZoneRecords when reading them. This is important when 
you manage many domains, as you might risk reaching your rate limits for API usage.
Note that only the token and account arguments are required.

## Creating a Domain

```
resource "dnsimple_domain" "dnsimple" {
    name = "dnsimple.com"
}
```

To create a domain you will have to use the dnsimple_domain resource. After naming the resource and adding the domain name (using the name attribute), you are ready to go.
Running the “terraform apply" command will now make sure that the domain is created for you.

## Email Forwards

```
resource "dnsimple_email_forward" "hello" {
    domain              = “http://example.com"
    alias_name          = "hello"
    destination_email 	= "changed@example.com"
}
```

To create an email forward you’ll need to provide the destination email for the domain you want to set up the email 
forward for. Please refer to [Email Forwarding](https://support.dnsimple.com/articles/email-forwarding/) for more 
information about email forwards.

## Setting up a Let’s Encrypt Certificate

```
resource "dnsimple_lets_encrypt_certificate" "my-certificate” {
    domain_id = "http://example.com”
    contact_id = "The contact id (found in your dnsimple admin)”
    auto_renew = false
    name = "www"
}
```

Adding a certificate to your domain could not be easier. Just decide which domain the certificate is going to be for 
and provide a contact for the certificate; we’ll take care of the rest. For more information please refer to the 
[SSL Certificates Section](https://support.dnsimple.com/categories/ssl-certificates/).

You can also use the dnsimple_certificate data source to download a certificate like so:

```
data "dnsimple_certificate" "my-certificate” {
    domain         = "http://exmple.com”
    certificate_id = "The contact id (found in your dnsimple admin)”
}
```

## Setting up a zone record

```
resource "dnsimple_zone_record" "mailserver’ {
    zone_name = “http://example.com”
    name = “mailserver”
    value = "http://mx2.example.com"
    type = "MX"
    ttl = 3600
    priority = 10
}
```

When setting up a record (an MX or mail exchange record in this example) you will have to provide the following 
information:

    –	The zone name this record is for
    –	A name (for your own records)
    –	The value of the record (in the case of the MX record in the example this is the address to the mail server)
    –	The type of record (MX in the example). See [Supported Record Types](https://support.dnsimple.com/articles/supported-dns-records/) for a comprehensive list of the records supported at DNSimple.
    –	The time to live (TTL) of the record
    –	and the priority.

---
title: Consul Integration
excerpt: How to use DNSimple's Consul NIA Integration to automate DNS management via Network Infrastructure Automation (NIA)
categories:
- Integrations
---

# DNSimple Consul NIA Integration

### Table of Contents {#toc}

* TOC
{:toc}

---

[Consul](https://www.consul.io/) is a full-featured service mesh that enables service discovery, secure service communication, health check service monitoring, kv store, and built-in proxy. It also supports out-of-the-box distributed multi-region support. With [DNSimple's Consul NIA integration](https://registry.terraform.io/modules/dnsimple/cts/dnsimple/latest), you can automatically provision records that reflect your service mesh.

## Configuring the DNSimple Consul NIA Integration

In your [Consul-Terraform-Sync](https://www.consul.io/docs/nia/tasks) configuration file, define a task similar to the example given below:

```ruby
task {
  name        = "dnsimple-task"
  description = "Create/delete/update DNS records"
  module      = "dnsimple/cts/dnsimple/latest"

  condition "services" {
    names = ["web", "api"]
  }
  variable_files = ["/terraform.tfvars"]
}
```

Pay special attention to the `condition` and `variable_files` fields.

**condition** - specifies [services to trigger](https://www.consul.io/docs/nia/configuration#services-condition) the task
**variable_files** - Specifies list of paths to Terraform variable definition files (.tfvars). This is where you need to specify the configuration variables for our [DNSimple Terraform Provider](https://registry.terraform.io/providers/dnsimple/dnsimple/latest/docs).

To ensure the task can create the records in your DNSimple account, the following variables need to be set in your `.tfvars` file:

**`dnsimple_token`**:`string` - (Required) The DNSimple API v2 token. You can use either a User or an Account Token. We recommend using the Account token. You can read our [API Access Token](https://support.dnsimple.com/articles/api-access-token/) support article for more information on how to get a token.


**`dnsimple_account`**:`string` - (Required) The ID of the account associated with the token. For more information on obtaining your account ID, take a look at [Account scope](https://developer.dnsimple.com/v2/#account-scope) in our [developer documentation](http://developer.dnsimple.com).

**`dnsimple_sandbox`**:`boolean` - (Optional) Set to `true` to connect to the [API sandbox environment](https://developer.dnsimple.com/sandbox/). The token and account ID will vary between the sandbox and our production environment. The sandbox environment is a great place to make sure you have your configuration dialed in before using it in the actual production environment. To learn more about our sandbox environment, read [Sandbox for Testing Calls to the API](https://support.dnsimple.com/articles/sandbox/).


## Service Configuration Metadata

```json
  ...
  "Meta": {
    "zone_name": "vegan.pizza",
    "record_name": "api",
    "record_ttl": "60"
  },
  ...
```

* `meta.zone_name`:`string` - The zone (domain name) that is managed through DNSimple. e.g. `vegan.pizza`
* `meta.record_name`:`string` - A valid label to create an A record in the specified zone. e.g. `api` which will result in `api.vegan.pizza`
* `meta.record_ttl`:`string` - (Optional) Valid TTL value which will be used for the A record. e.g. `600` - 10 minutes

## Ready to go

You're now ready to get started with [DNSimple's Consul NIA Integration](https://registry.terraform.io/modules/ns1-terraform/record-sync-nia/ns1/latest). As always, if you have more questions, [get in touch](https://dnsimple.com/contact) - we're always happy to help.

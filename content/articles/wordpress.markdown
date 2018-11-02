---
title: WordPress and DNSimple
excerpt: How to use a WordPress blog with DNSimple.
categories:
- Integrations
---

# WordPress and DNSimple

[WordPress](https://wordpress.com/) is a popular blogging platform. This article explains how to use WordPress with DNSimple.

## Can I use WordPress with DNSimple?

Yes, of course you can! However, it depends on which kind of WordPress version you want to use.

There are two versions of WordPress:

- [WordPress.com](https://wordpress.com/) - the WordPress hosting service
- [WordPress.org](https://wordpress.org/) - the downloadable, self-hosted version of the software written in PHP

## Hosted WordPress

<note>
This is the recommended way to use WordPress with DNSimple, as you will not need any web hosting service. Your WordPress instance will be hosted and managed by WordPress.com.
</note>

[WordPress.com](https://wordpress.com/) is the popular version of the WordPress platform hosted by Automattic, the creators of WordPress.

To use WordPress.com with DNSimple simply signup at [wordpress.com](https://wordpress.com/) and configure your blog.

Once configured, follow the WordPress instructions to [map a domain to WordPress](https://en.support.wordpress.com/map-subdomain/).

<div class="section-steps" markdown="1">
##### To map your domain to WordPress.com

1.  Create and configure the WordPress.com blog. You will be assigned a unique URL at `wordpress.com`, such as `awesome-blog.wordpress.com`.

1.  Go to the [DNS record editor](https://support.dnsimple.com/articles/record-editor/) for the domain and create a DNS record to point your domain (e.g. `awesome-blog.com`) to the WordPress blog.

    -   **If you want to point the root domain `awesome-blog.com`**

        Add an [ALIAS record](/articles/alias-record) to point `awesome-blog.com` to WordPress. Leave the _Name_ of the record empty and set the _Content_ field to the WordPress endpoint (e.g. `awesome-blog.wordpress.com`)

    -   **If you want to point a subdomain (e.g. `www.awesome-blog.com`)**
    
        Add a [CNAME record](/articles/cname-record) to point `www.awesome-blog.com` to WordPress. The _Name_ of the record is the subdomain (e.g. `www`) and the _Content_ field is the WordPress endpoint (e.g. `awesome-blog.wordpress.com`)

1. Follow the WordPress.com instructions to [add a custom domain](https://en.support.wordpress.com/map-subdomain/) to your blog. Specifically, go to [Domains](https://wordpress.com/domains/) and add the domain or subdomain to your blog.

1. Make the domain the default domain for the blog at WordPress.com.
</div>

It's not required to purchase or transfer the domain to WordPress. Likewise, it's not required to change the name servers to WordPress.

<note>
WordPress.com also provides instruction to [use a domain you own with WordPress](https://en.support.wordpress.com/map-existing-domain/). We suggest to not follow this approach as it will require to delegate your entire domain to WordPress and you will not be able to use any other service provided by DNSimple. Instead, follow the instructions above to create the necessary records.
</note>


## Self-hosted WordPress

DNSimple [doesn't offer any web hosting service](/articles/web-hosting), therefore if you want to download and install your own instance of WordPress, you will need to use a web hosting service.

The web hosting service will provide you the specific instructions or server access to upload the WordPress files to the server, configure the database and install the platform.

You can use DNSimple to point your own domain to the IP address provided you by the web hosting service. You will likely need to [create an A or CNAME DNS record](/articles/differences-a-cname-records) using your domain [DNS record editor](https://support.dnsimple.com/articles/record-editor) to point the domain to your web hosting space and make your WordPress instance available to your users.


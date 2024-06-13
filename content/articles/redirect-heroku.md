---
title: Redirecting www to Non-www Domain at Heroku
excerpt: This article explains how to use DNSimple to redirect to an app hosted on Heroku with/without HTTPS.
categories:
- Domains
- Integrations
---

# Redirecting www to Non-www Domain at Heroku

### Table of Contents {#toc}

* TOC
{:toc}

---

This article contains a list of the most common redirect scenarios for an application hosted on Heroku, along with some solutions for each scenario.

<note>
This article contains information about redirects and HTTPS. If you aren't familiar with this topic, you can take a look at [how redirects work with HTTPS](https://blog.dnsimple.com/2016/08/https-redirects/) first.
</note>


## Redirecting www to not-www (without HTTPS) {#redirect-nohttps}

<note>
If your application is using HTTPS, check the section [redirect www to not-www with HTTPS](#redirect-https).
</note>

In this scenario you have an application hosted on Heroku configured with a custom domain (e.g. `example.com`). You want to redirect the www version (`www.example.com`) to the same Heroku application (or vice-versa). **The application is not using HTTPS**.

In this case, the simplest solution is to use our [redirector service](/articles/redirector) to redirect `http://www.example.com` to `http://example.com`.

<div class="section-steps" markdown="1">
##### To handle the redirect using the redirector {#redirect-nohttps-redirector}

1.  Go to the record editor and [add a URL record](/articles/url-record#create).

    - Add the redirect subdomain in the _Name_ field.
    - Add the URL of the target domain in the _URL_ field.

    For example, to redirect `http://www.example.com` to `http://example.com`:

    - Add `www` as _Name_
    - Add `http://example.com` as _URL_

1.  And that's it. [Check](/articles/troubleshooting-redirects#test) that the redirect works properly.
</div>

Alternatively, you can point both the www and not www versions of the site to Heroku and handle the redirect at the application level.

<div class="section-steps" markdown="1">
##### To handle the redirect at Heroku {#redirect-nohttps-application}

1.  Add both host names to the Heroku application:

    - `$ heroku domains:add example.com`
    - `$ heroku domains:add www.example.com`

1.  Go to the record editor and add two DNS records, one for each host name, pointing to the Heroku endpoint. Assuming the Heroku endpoint for the application is `awesome-application.herokuapp.com`:

    - Add an [ALIAS record](/articles/alias-record) to point `example.com` to Heroku. Leave the _Name_ of the record empty and set the _Content_ field to the application endpoint `awesome-application.herokuapp.com`
    - Add a [CNAME record](/articles/cname-record) to point `www.example.com` to Heroku. The _Name_ of the record is `www` and the _Content_ field is the application endpoint `awesome-application.herokuapp.com`

1.  In your application, intercept the incoming request. If the request host is not the canonical one, redirect the request to the canonical domain. How to perform a redirect depends on the programming language and/or framework your application is developed with.
</div>


## Redirecting www to not-www (with HTTPS) {#redirect-https}

In this scenario, you have an application hosted on Heroku, configured with a custom domain (e.g. `example.com`). You want to redirect the www version (`www.example.com`) to the same Heroku application (or vice-versa). **The application is also using HTTPS**.

In this case, [you cannot use our redirector service](/articles/redirector). The best strategy is to handle the redirect at application level using a certificate that covers both the www and not-www host names.

<note>
To redirect using HTTPS, you need to have a certificate that covers both the www and not-www (root domain) host names. You can purchase a single-name certificate for `www` or a wildcard certificates for `*` [to cover the root domain](/articles/ssl-certificate-names) with the same certificate.
</note>

<div class="section-steps" markdown="1">
##### To handle the redirect at Heroku {#redirect-https-application}
##### For Heroku SSL

1.  Add both host names to the Heroku application:

    - `$ heroku domains:add example.com`
    - `$ heroku domains:add www.example.com`

1. [Order the SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) and add it to Heroku(https://devcenter.heroku.com/articles/ssl):

    - `$ heroku certs:add server.crt server.key`

1.  Go to the record editor and two DNS records, one for each host name, **pointing to the Heroku SSL endpoint**:

    - Add an [ALIAS record](/articles/alias-record) to point `example.com` to Heroku. Leave the _Name_ of the record empty and set the _Content_ field to the SSL endpoint `example.com.herokudns.com`
    - Add a [CNAME record](/articles/cname-record) to point `www.example.com` to Heroku. The _Name_ of the record is `www` and the _Content_ field is the SSL endpoint `www.example.com.herokudns.com`

1.  In your application, intercept the incoming request. If the request host is not the canonical one, redirect the request to the canonical domain. How to perform a redirect depends on the programming language and/or framework your application is developed with.

##### For Heroku SSL endpoint (legacy)

1.  Add both host names to the Heroku application:

    - `$ heroku domains:add example.com`
    - `$ heroku domains:add www.example.com`

1.  [Enable the Heroku SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint). Heroku will provide you a specific SSL endpoint similar to `encrypted-application.herokussl.com`.

1.  [Order the SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) and install it on Heroku.

1.  Go to the record editor and two DNS records, one for each host name, **pointing to the Heroku SSL endpoint**:

    - Add an [ALIAS record](/articles/alias-record) to point `example.com` to Heroku. Leave the _Name_ of the record empty and set the _Content_ field to the SSL endpoint `encrypted-application.herokussl.com`
    - Add a [CNAME record](/articles/cname-record) to point `www.example.com` to Heroku. The _Name_ of the record is `www` and the _Content_ field is the SSL endpoint `encrypted-application.herokussl.com`

1.  In your application, intercept the incoming request. If the request host is not the canonical one, redirect the request to the canonical domain. How to perform a redirect depends on the programming language and/or framework your application is developed with.
</div>


## Redirect HTTP to HTTPS {#redirect-http2https}

In this scenario you have an application hosted on Heroku, configured with a custom domain (e.g. `example.com`). You want to redirect the HTTP version (`http://example.com`) to the same Heroku application under HTTPS (`https://example.com`).

In this case, [you cannot use our redirector service](/articles/redirector) because it's not possible to point the same domain at DNS level to two different applications based on the HTTP/HTTPS scheme. The best strategy is to handle the redirect at application level.

<div class="section-steps" markdown="1">
##### To handle the redirect at Heroku {#redirect-http2https-application}
##### For Heroku SSL

1.  Add the host names to the Heroku application:

    - `$ heroku domains:add example.com`

1.  [Order the SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) and [install it on Heroku](https://devcenter.heroku.com/articles/ssl). Heroku will provide you a specific SSL endpoint similar to `example.com.herokudns.com`.

1.  Go to the record editor and a DNS records for the host name, **pointing to the Heroku SSL endpoint**:

    - If the host name is the root domain (e.g. `example.com`): add an [ALIAS record](/articles/alias-record) to point `example.com` to Heroku. Leave the _Name_ of the record empty and set the _Content_ field to the SSL endpoint `example.com.herokudns.com`
    - If the host name is a subdomain (e.g. `www.example.com`): Add a [CNAME record](/articles/cname-record) to point `www.example.com` to Heroku. The _Name_ of the record is `www` and the _Content_ field is the SSL endpoint `example.com.herokudns.com`

1.  In your application, intercept the incoming request. If the request comes from HTTP, redirect the request to the same domain replacing HTTP with HTTPS. How to perform a redirect depends on the programming language and/or framework your application is developed with.

##### For Heroku SSL endpoint (legacy)

1.  Add the host names to the Heroku application:

    - `$ heroku domains:add example.com`

1.  [Order the SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-dnsimple) and install it on Heroku. Heroku will provide you a specific SSL endpoint similar to `encrypted-application.herokussl.com`.

1.  Go to the record editor and a DNS records for the host name, **pointing to the Heroku SSL endpoint**:

    - If the host name is the root domain (e.g. `example.com`): add an [ALIAS record](/articles/alias-record) to point `example.com` to Heroku. Leave the _Name_ of the record empty and set the _Content_ field to the SSL endpoint `encrypted-application.herokussl.com`
    - If the host name is a subdomain (e.g. `www.example.com`): Add a [CNAME record](/articles/cname-record) to point `www.example.com` to Heroku. The _Name_ of the record is `www` and the _Content_ field is the SSL endpoint `encrypted-application.herokussl.com`

1.  In your application, intercept the incoming request. If the request comes from HTTP, redirect the request to the same domain replacing HTTP with HTTPS. How to perform a redirect depends on the programming language and/or framework your application is developed with.
</div>


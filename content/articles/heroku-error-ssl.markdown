---
title: Troubleshooting Heroku SSL errors
excerpt: You installed an SSL certificate on Heroku but it is not working properly.
categories:
- Heroku and DNSimple
---

# Troubleshooting Heroku SSL errors

This article describes somes of the most common errors you may experience when installing a certificate on Heroku, along with the corresponding solutions.

## Invalid common name (*.heroku.com or *. herokuapp.com)

You pointed your domain to Heroku to use an SSL certificate but you are receiving an error such as _Troubleshooting Heroku SSL errors_, _Invalid common name_ or _The certificate for this website is invalid_.

This error occurs because you are pointing the DNS to the generic `herokuapp.com` Heroku endpoint. Instead you need to **use the [custom SSL endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) they provide to you**, generally ending with `herokussl.com`.

~~~
➜  ~  dig www.awesomeexample.com

;; ANSWER SECTION:
www.awesomeexample.com.   771 IN  CNAME   awesomeexample.herokuapp.com.
awesomeexample.herokuapp.com. 300    IN  CNAME   us-east-1-a.route.herokuapp.com.
us-east-1-a.route.herokuapp.com. 54 IN  A   50.16.244.117
~~~

Do not try to point to `proxy.herokuapp.com` as this will not work with a custom domain and SSL.

For more information about using DNSimple certificates with Heroku visit the [SSL Certificates for Heroku](http://support.dnsimple.com/articles/ssl-certificates-heroku) article.

### Examples

Here's a few possible variants of the error message, depending on the browser you are currently using.

**Google Chrome**

> ### Your connection is not private
>
> Attackers might be trying to steal your information from www.alpha.com (for example, passwords, messages, or credit cards). `NET::ERR_CERT_COMMON_NAME_INVALID`
>
> This server could not prove that it is **www.alpha.com**; its security certificate is from **www.bravo.com**. This may be caused by a misconfiguration or an attacker intercepting your connection.

![](/files/heroku-ssl-error-commonname-chrome.png)

**Google Chrome**

> This is probably not the site you are looking for!
>
> You attempted to reach example.com, but instead you actually reached a server identifying itself as *.herokuapp.com. This may be caused by a misconfiguration on the server or by something more serious. An attacker on your network could be trying to get you to visit a fake (and potentially harmful) version of example.com.

![](/files/heroku-ssl-error-commonname-chrome2.png)

**Safari**

![](/files/heroku-ssl-error-commonname-safari.png)

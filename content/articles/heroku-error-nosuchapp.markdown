---
title: Troubleshooting Heroku "No such app" error
categories:
- Heroku and DNSimple
---

# Troubleshooting Heroku "No such app" error

You pointed your domain to Heroku, but when you access your domain you see the error page `No such app`.

![Heroku No such app error](/files/dnsimple-heroku-nosuchapp.png)

~~~
Heroku | No such app
There is no app configured at that hostname.
Perhaps the app owner has renamed it, or you mistyped the URL.
~~~

This error page is returned when you point a custom domain to Heroku, but you did not attach the hostname to your Heroku application.

<info>
#### Good news!

This error page is returned by Heroku. The good news is that your DNS are correctly resolving to Heroku. Follow the instructions below to fix the error.
</info>

Make sure to [add your custom domain to your Heroku application](https://devcenter.heroku.com/articles/custom-domains) using the `heroku domains:add` command. If you are using subdomains, you will need to run the command for each custom subdomain you want attached to your app.

<warning>
#### www vs not-www

If you are pointing both your www and not-www version of the site to Heroku, then you will need to add both domains explicitly. If you just add `example.com`, then `www.example.com` will return a "No such app" error, and vice-versa.

```
$ heroku domains:add example.com,
$ heroku domains:add www.example.com
```
</warning>

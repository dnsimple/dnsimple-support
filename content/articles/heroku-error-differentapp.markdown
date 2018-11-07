---
title: Troubleshooting Heroku shows different app error
excerpt: You pointed your domain to Heroku, but when you access your domain you see a different application than the one you expected.
categories:
- Heroku and DNSimple
---

# Troubleshooting Heroku shows different app error

You pointed your domain to Heroku, but when you access your domain from the browser you see a different application than the one you expected.

This error occurs when you point a domain on DNSimple to an Heroku application, but on Heroku an application is already set up to use that custom domain.

<info>
The error means that your DNS is correctly resolving to Heroku. Follow the instructions below to fix the error.
</info>

## Diagnosing

Here is an example that should help you understand what's going on:

_You have two Heroku applications: `green-turtle` and `red-turtle` with their corresponding Heroku hostnames `green-turtle.herokuapp.com` and `red-turtle.herokuapp.com`._

_You add the domain `awesome-turtles.com` in DNSimple and you point the CNAME `www.awesome-turtles.com` to `green-turtle.herokuapp.com`. However, in Heroku you associate the `www.awesome-turtles.com` custom domain to the application `red-turtle.herokuapp.com`._

_What will happen is that when someone visits `www.awesome-turtles.com`, Heroku will route the request to the `red-turtle` app, and not `green-turtle` as you would expect given your DNS settings._

You can experience the same behaviour if the `red-turtle` application belongs to someone else which leaves us with two possible scenarios:

1. The application with the custom domain setup is yours
2. The application with the custom domain setup belongs to someone else

<info>
Heroku endpoints can be either `myapp.herokuapp.com` or `example.com.herokudns.com`. You should use `example.com.herokudns.com` [if you are using Heroku SSL](https://devcenter.heroku.com/articles/custom-domains#view-existing-domains) and `myapp.herokuapp.com` if not.
</info>

## Solution

### The application with the custom domain setup is yours

This is what is happening if you recognize the application displayed when you visit the domain. You probably set up the custom domain for a different application. Now you simply have to remove that setting on Heroku and add it back on the application for which you now want to use the domain.

### The application with the custom domain setup belongs to someone else

In this case you will have to contact [Heroku support](https://help.heroku.com/) and explain your situation. They will ask you to verify the ownership of the domain. Once you do they will be able to remove the existing custom domain configuration so you can add it to your domain.

The next step will be configuring your custom domain which you can do following the steps described [in this support article](/articles/domain-apex-heroku/#set-up-domain-heroku).

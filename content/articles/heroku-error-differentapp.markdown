---
title: Troubleshooting Heroku shows different app error
excerpt: You pointed your domain to Heroku, but when you access your domain you see a different application than the one you expected.
categories:
- Heroku and DNSimple
---

# Troubleshooting Heroku shows different app error

You pointed your domain to Heroku, but when you access your domain from the browser you see a different application than the one you expected.

This error occurs when on DNSimple you point a domain to an Heroku application, but on Heroku an application is already set up to use that custom domain.

<callout>
The error means that your DNS are correctly resolving to Heroku. Follow the instructions below to fix the error.
</callout>

This error occurs when on DNSimple you point a domain to an Heroku application, but on Heroku an application is already set up to use that custom domain.

Here is an example that should help understanding what's going on:

You have two Heroku applications: _green-turtle_ and _red-turtle_ with their corresponding Heroku hostnames `green-turtle.herokuapp.com` and `red-turtle.herokuapp.com`.

You add the domain `awesome-turtles.com` in DNSimple and you point the CNAME `www.awesome-turtles.com` to `green-turtle.herokuapp.com`. However, in Heroku you associate the `www.awesome-turtles.com` custom domain to the application `red-turtle.herokuapp.com`.

What will happen is that when someone visits `www.awesome-turtles.com`, Heroku will route the request to the _red-turtle_ app, and not _green-turtle_ as you would expect given your DNS settings.

You can experience the same behaviour if the _red-turtle_ application belongs to someone else which leaves us with two possible scenarios:

#### The application with the custom domain setup is yours

This is what is happening if you recognize the application displayed when you visit the domain. You probably set up the custom domain for a different application. Now you simply have to remove that setting on Heroku and add it back on the corresponding application.

#### The application with the custom domain setup belongs to someone else

In this case you will have to contact [Heroku support](https://help.heroku.com/) and explain them your situation. They will ask you to verify the ownership of the domain. Once you do they will be able to remove the existing custom domain configuration so you can add it to your domain.

The next step will be configuring your custom domain which you can do following the steps described [in this support article](/articles/domain-apex-heroku/#set-up-domain-heroku).

---
title: Troubleshooting Heroku shows different app error
excerpt: You pointed your domain to Heroku, but when you access your domain you see a different application than the one you expected.
categories:
- Heroku and DNSimple
---

# Troubleshooting Heroku shows different app error

You pointed your domain to Heroku, but when you access your domain from the browser you see a differnt application than the one you expected.

This error occurs when you point a custom domain to Heroku, but there is another app at Heroku with that domain name set up as a custom domain.

<callout>
The error means that your DNS are correctly resolving to Heroku. Follow the instructions below to fix the error.
</callout>


There are two possible scenarios:

#### The application with the custom domain setup is yours

This is what is happening if you recognize the application displayed when you visit the domain. You probably set up the custom domain for a different application. Now you simply have to remove that setting on Heroku and add it back on the corresponding application.

#### The application with the custom domain setup belongs to someone else

In this case you will have to contact [Heroku support](https://help.heroku.com/) and explain them your situation. They will ask you to verify the ownership of the domain. Once you do they will be able to remove the existing custom domain configuration so you can add it to your domain.

The next step will be configuring your custom domain which you can do following the steps described [in this support article](/articles/domain-apex-heroku/).


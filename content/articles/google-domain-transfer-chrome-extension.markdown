---
title: Google Domain Transfer Chrome Extension
excerpt: How to use DNSimple's Chrome Extension to transfer your domain to DNSimple from Google Domains
categories:
- Integrations
---

# Google Domain Transfer Chrome Extension

### Table of Contents {#toc}

* TOC
{:toc}

---

Transferring a domain might sound like a complicated task, especially if you're not familiar with the myriad of settings, DNS configurations, and technical jargon that often comes with it. The good news is, it doesn't have to be! If you've decided to switch your domain management from [Google Domains](https://domains.google/) to DNSimple, we've got just the tool to make your transition as smooth as possible: Our dedicated **Google Domain Transfer [Chrome Extension](https://developer.chrome.com/docs/extensions/)**.

The Chrome Extension is engineered to streamline the entire domain transfer process, eliminating the need for manual data entry and minimizing room for errors. With a user-friendly interface, the extension walks you through each step of transferring your domain, ensuring that you don't miss any critical configurations or settings ensuring you do not experience any downtime during or after the domain transfer. From unlocking your domain at Google Domains to setting up DNS records in DNSimple, this tool aims to make the process quick, secure, and hassle-free.

In this support article, we will guide you through the step-by-step process to install and use our Chrome Extension for transferring your domain from Google Domains to DNSimple.

## Installing the Chrome Extension

### Download Link

Before proceeding with the installation, you'll need to download the extension ZIP file. We have hosted the file on Google Drive for easy access.

Click [here](https://link-to-file.com) to download the Domain Transfer to DNSimple Chrome Extension ZIP file.

### Pre-requisites

Before starting the installation process, make sure you have downloaded the ZIP file containing the extension. You will also need access to your Google Domains account and should have a DNSimple account created. This guide covers installation for browsers that support Chrome Extensions: Google Chrome, Brave, and Microsoft Edge.

---

### For Google Chrome Users

1. **Unzip the File**: Locate the downloaded ZIP file on your computer and unzip it into a folder.

2. **Open Chrome Extensions Page**: Open Google Chrome and go to `chrome://extensions/`.

    ![Screenshot: Chrome Extensions Page](/files/google-chrome-extensions-page.png)

3. **Enable Developer Mode**: Toggle the `Developer mode` switch on, located at the top-right corner of the Extensions page.

    ![Screenshot: Enabling Developer Mode](/files/google-chrome-extensions-page-dev-mode.png)

4. **Load Unpacked Extension**: Click the `Load unpacked` button and navigate to the folder where you unzipped the extension files. Select the folder and click `Open`.

    ![Screenshot: Loading Unpacked Extension](/files/google-chrome-load-unpacked-extension.png)

5. **Verify Installation**: You should now see the Domain Transfer to DNSimple extension icon next to your address bar.

    ![Screenshot: Extension Installed](/files/google-chrome-extension-added.png)

---

### For Brave Users

1. **Unzip the File**: Same as Step 1 for Google Chrome Users.

2. **Navigate to Extensions**: Open Brave and type `brave://extensions/` into the address bar.

    ![Screenshot: Brave Extensions Page](/files/brave-extensions-page.png)

3. **Enable Developer Mode**: Follow the same steps as Google Chrome users (Steps 3-5).

    ![Screenshot: Brave Enabling Developer Mode](/files/brave-extensions-page-dev-mode.png)
    ![Screenshot: Brave Loading Unpacked Extension](/files/brave-load-unpacked-extension.png)
    ![Screenshot: Extension Installed on Brave](/files/brave-extension-added.png)

---

### For Microsoft Edge Users

1. **Unzip the File**: Same as Step 1 for Google Chrome Users.

2. **Navigate to Extensions**: Open Edge and type `edge://extensions/` into the address bar.

    ![Screenshot: Edge Extensions Page](/files/edge-extensions-page.png)

3. **Allow Extensions from Other Stores**: Click the `Allow extensions from other stores` button at the bottom-left corner of the Extensions page.

    ![Screenshot: Edge Allow Extensions from Other Stores](/files/edge-extensions-allow-extensions-from-other-stores.png)

4. **Enable Developer Mode**: Follow the same steps as Google Chrome users (Step 3).

    ![Screenshot: Edge Enabling Developer Mode](/files/edge-extensions-page-dev-mode.png)

5. **Load Unpacked Extension**: Follow the same steps as Google Chrome users (Steps 4-5).

    ![Screenshot: Edge Loading Unpacked Extension](/files/edge-load-unpacked-extension.png)
    ![Screenshot: Extension Installed on Microsoft Edge](/files/edge-extension-added.png)

---

Now that you've successfully installed the extension from a ZIP file, you are all set to initiate the domain transfer from Google Domains to DNSimple. Proceed to the next section for detailed instructions on how to make the transfer.

## Using the Chrome Extension

### Setup

The first time you open the extension, you will be prompted to enter your DNSimple API token. This token is used to authenticate your DNSimple account and allows the extension to make changes to your account on your behalf. If you don't have an API token, you can create one by following the instructions in our [API Access Token support article](/articles/api-access-token).

![Screenshot: Chrome Extension Setup API Access Token](/files/chrome-extension-setup-api-token.png)

Once you have entered your API token, click the **Next** button. You will be taken to another screen where you will be asked to select the contact you want to use for the domain transfer. If you don't have a contact created, you can create one by following the instructions in our [Managing your contacts support article](/articles/contact-management/#creating-a-new-contact).

![Screenshot: Chrome Extension Setup Select Contact](/files/chrome-extension-setup-contact.png)

### Load your Domains

Once you have selected a contact, you will be taken to the main screen of the extension. Before you click the **Get Domains** button, make sure you are on the Google Domains main page [https://domains.google.com/registrar](https://domains.google.com/registrar). This is important because the otherwise the extension will not be able to load your domains. Once you are ready you can click the **Get Domains** button to load all the domains on the current page. You will see a list of all your domains, along along with two options **Action Required** and **Discard**.

![Screenshot: Chrome Extension Load Domains](/files/chrome-extension-load-domains.png)

### Transfer your Domain

The **Action Required** button will take you to the domain page in the extension. On the screen you will see the current status of the domain, as well as instructions for the next steps you need to take to transfer the domain. The extension will guide you through the entire process, from unlocking your domain to setting up the DNS records in DNSimple. Once you have completed all the steps, you can click the **Begin Transfer** button to initiate the transfer.

![Screenshot: Chrome Extension Domain Page](/files/chrome-extension-domain-page.png)

---
layout: simple
author_profile: false
permalink: /engage
classes: wide
title: Claim an Identifier
---

<form id="form" accept-charset="UTF-8" action="https://iiolonioro.korsimoro.net/" method="POST">
  <input type="password" name="key" placeholder="Identifier - email, username, wallet address, did-document, etc">
  <input type="hidden" name="utf8" value="<<FROM SCRIPT ABOVE>>">
  <button onClick="triggerUpload()">Upload</button>
  <button type="submit">Engage</button>
</form>

or scan this QR code to introduce your device and
engage Iiolonioro using your device's resources.

<center><img src="/assets/images/NetQRCode.png" /></center>

* [What you can type or paste](#What you can type or paste)
* [What you can upload](#What you can upload)
* [What you can get from the cloud](#What you can get from the cloud)

## What you can type or paste

* Resolvable URLs
  * [DID](./glossary#did)
  * HTTPs
* Unique Identifiers
  * UUID
  * email address
  * url
  * username
  * LDAP
  * DOI
* Digital Credential
  * X.509 Certificate
  * Verifiable Credential
* Files
  * [DID Document](./glossary/did-document)

## What you can upload

  * Resolvable URLs
    * [DID](./glossary#did)
    * HTTPs
  * Unique Identifiers
    * UUID
    * email address
    * url
    * username
    * LDAP
    * DOI
  * Digital Credential
    * X.509 Certificate
    * Verifiable Credential
  * Files
    * [DID Document](./glossary/did-document)

<script src="/static/scripts/engage.js"></script>

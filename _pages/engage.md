---
layout: simple
author_profile: false
permalink: /engage
classes: wide
title: Claim an Identifier
---

<form id="form" accept-charset="UTF-8" action="https://iiolonioro.korsimoro.net/" method="POST">
  <input type="password" name="key" placeholder="Identifier">
  <input type="hidden" name="utf8" value="<<FROM SCRIPT ABOVE>>">
  <button type="submit">Engage</button>
  <button onClick="triggerUpload()">Upload</button>
</form>

Feel free to paste a [DID](./glossary#did), a string, a small document,
even a [DID Document](./glossary/did-document),
upload public key, or anything else you feel comfortable sharing.  We'll
check it out, and if it isn't quite right we'll let you know why.

Scan this QR Code to introduce your device.

<img src="/assets/images/NetQRCode.png" />

Or download our App.

<a href="." onClick="downloadApp()"><img src="/assets/images/applogos.svg" /></a>

## Page Feature ToDo
- formats
- add file upload button


<script src="/static/scripts/engage.js"></script>

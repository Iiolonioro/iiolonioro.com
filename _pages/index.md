---
layout: simple
author_profile: false
permalink: /
classes: wide
title: Iiolonioro LLC
toc: true
---
[Iioloniorio LLC](#master-data) is a private intellectual property development
and holding company.

Please read more about our

* [portfolio](#portfolio-of-publicly-available-products) of publicly available products
* [architecture](#read-about-our-product-architecture) shared by all subscription products
* [licensees](#licensees) currently using our integrations or specifications

Our products are only accessible via licensing.  Discussion of product
details beyond the information in these pages requires a non-disclosure
agreement.  Please [engage](./engage) to discuss collaboration opportunities.

Partner firms, such as [Ouahigouya]({{ page.docurl.ouahigouya }}) operate
trust ecosystems based on our technologies, [Bougouriba]({{ page.docurl.bougouriba }})
supports community engagement and open source projects, and
[Korsimoro]({{ page.docurl.korsimoro }}) provides consulting services.

## Portfolio of Publicly Available Products

* [DDE](./specs/dde) : Dignified Data Environment Specification
* [SPAS](./specs/spas) : Simple PKI Access Suite
* [SCID](./specs/scid) : Minimalistic Self-Certifying Identifier Specification
* [ALS](./specs/al) : Agile Legislation Specification
* [Emperical Community Journalism Spec](./specs/ecj) : Empirical Community Journalism Specification
* [Dataset Spec](./specs/dset) : Data Set Specification
* [Data Feed Spec](./specs/df) : Data Feed (Data Set Monitoring) Specification
* [ALM](./proj/alm) : Agile Legislation Microservices (Reference Implementation)
* [Emperical Community Journalism Toolkit](./proj/ecj) : Empirical Community Journalism Toolkit
* [SPASM](./proj/spasm) : [SPAS](./specs/spas) Microservices
* [ICTIA Data Feed](./feeds/ictia)
  Identity, Credential, and Trust technology Industry Analytics.  This includes
  reference material regarding
  * did-methods
  * blockchains and projects
  * organizations
  * events
  * standards
  * governmental regulations and precedent


## Read about our subscription product architecture

We provide curated, proctored, analyzed, and augmented, topical data
feeds.  These feeds monitor internal databases which are fully visible
only to direct stakeholders.

Data slices are exported via custom integrations
which push and sync data with your data environment.  This structure ensures that
we can respect the digital dignity and integrity of our data sources,
sharing only that information for which consent to share has been
procured.

We use [SPASM](./proj/spasm), a simple docker microservices implementation
of a SPAS stack using [cfssl](.), [NGINX](.), client side certificates,
and providing a simple React UX.

The React UX is accessible over HTTPS, but is considered publicly visible,
while data and services that are private are read via gRPC over HTTP/2 and
secured with client side certificates.

The UX supports certificate management, additional authentication factors
and policies, and the configuration and content of our shared
document pool.  We use QLDB for storage.

## Licensees

### [Ouahigouya]({{ page.docurl.ouahigouya }})
 * The Ouahigouya Organization operates Dignified Data Environments.

### [Bougouriba]({{ page.docurl.bougouriba }})
 * Datasets and community resources are at hosted at [Bougouriba.net](http://bougouriba.net)
 * The Bougouriba open community is managed according to the governance framework managed at [Bougouriba.org](http://bougouriba.org)
 * The Ouahigouya Organization participates in active
 development of technical products.

### [Korsimoro Consulting]({{ page.docurl.korsimoro-consulting }})
 * Korsimoro provides general digital identity, credential system, and trust
   management consulting services.




## Master Data
<script src="/static/scripts/master-data.js"></script>

 * is a Delaware Series LLC
 * EIN TBD
 * registered agent at ADDRESS

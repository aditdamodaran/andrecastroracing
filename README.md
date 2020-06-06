# Andre Castro Racing Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

**This is the source code for [andrecastroracing.com](https://www.andrecastroracing.com/).** 

The website is  statically generated using [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) and the [Netlify CMS](https://www.netlifycms.org). It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

**FrontEnd:** React, SASS, [Bulma](https://bulma.io/)

**BackEnd:** Node and NetlifyCMS

## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site.

```
$ npm run build
$ netlify dev 
```





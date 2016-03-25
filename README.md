US Digital Service Website
==========================

This repo is for our public-facing site, which will be hosted on a to-be-decided domain.  This site is the main funnel for USDS recruiting and outreach.

Soon, this repo will also contain our assets on [whitehouse.gov](https://www.whitehouse.gov/digital/united-states-digital-service).

The site is built on the [U.S. Web Design Standards](https://playbook.cio.gov/designstandards/).

Use
---

Production-ready assets can be found in /dist.  Just open `dist/index.html` in any browser and you can view the finished product.

While this is a static site right now, we might add some dynamic content later on.  To that end, we provide a small express.js server, which you can run via:

    npm start 

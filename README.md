US Digital Service Website
==========================

This repo is for our public-facing site, which will be hosted on a to-be-decided domain.  This site is the main funnel for USDS recruiting and outreach.

Soon, this repo will also contain our assets on [whitehouse.gov](https://www.whitehouse.gov/digital/united-states-digital-service).

The site is built on the [U.S. Web Design Standards](https://playbook.cio.gov/designstandards/).

Use
---

Production-ready assets can be found in /dist.  Just open `dist/index.html` in any browser and you can view the finished product.

While this is a static site at this time, we may add some dynamic content later on.  To that end, we provide a small express.js server, which you can run via:

    npm start 

Build
-----

If you'd like to build the assets yourself, you'll need [npm](https://www.npmjs.com/) and browserify.

    git checkout https://github.com/usds/website-redesign.git
    cd website-redesign
    npm install -g browserify
    npm install
    npm run build 

If you're actively developing, you may watch to use watchify instead:
    
    npm install -g watchify 
    npm run watch 

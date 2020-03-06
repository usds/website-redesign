# USDS website

## Setup

### To run

```
$ npm install
$ bundle install
$ npm run serve (or bundle exec jekyll serve)
```

### Deploying a Staging site to cloud.gov

1. Follow appropriate instructions to sign up for cloud.gov and configure cloud foundry install
2. Install dependencies (`npm install && bundle install`)
3. Build the site `bundle exec jekyll build`
4. Push to cloud.gov `cf push`

## Content updates

### Uploading images
- [/images](https://github.com/usds/website/tree/master/images): This folder contains *editorial photos* and other images for People cards and pages, Project cards and pages, event logos for the Events cards and page, and other areas that are likely to change semi-frequently.
- [/assets/img](https://github.com/usds/website/tree/master/assets/img): Site assets and evergreen images such as page banners/headers and vector graphics should be placed in the assets/img folder here. The images in this folder typically will not be subject to change.

### Adding Content
* [How to add people](https://github.com/usds/website/wiki/Adding-People-(carousel-and-pages))
* [How to add projects](https://github.com/usds/website/wiki/Adding-projects-(carousel-and-pages))

## Updating USWDS.

There are a couple ways to update the USWDS:

### Change theme settings

This site uses custom USWDS theme settings in `assets/uswds-theme`. Use this if you want to include or remove utilities or update utility settings.

1. Compile usds.css `gulp uswds-build-sass`
2. Run Jekylll `bundle exec jekyll serve`


### Only update the USDS.css without getting new functions and tokens for use in usds.gov project files

Use this to patch any display bugs through updates to USWDS.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Compile usds.css `gulp uswds-build-sass`
3. Run Jekylll `bundle exec jekyll serve`

### Update USDS and get new functions and tokens for use in usds.gov project files

This will will update some of the scss files in `assets/uswds-sass`, but will not overwrite any of your files in `assets/uswds-theme`.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Run `gulp update`
3. Compile usds.css `gulp uswds-build-sass`
4. Run Jekyll `bundle exec jekyll serve`

# USDS website

## Uploading images
- [/images](https://github.com/usds/website/tree/master/images): This folder contains *editorial photos* and other images for People cards and pages, Project cards and pages, event logos for the Events cards and page, and other areas that are likely to change semi-frequently.
- [/assets/img](https://github.com/usds/website/tree/master/assets/img): Site assets and evergreen images such as page banners/headers and vector graphics should be placed in the assets/img folder here. The images in this folder typically will not be subject to change.

## Adding Content
* [How to add people](https://github.com/usds/website/wiki/Adding-People-(carousel-and-pages))
* [How to add projects](https://github.com/usds/website/wiki/Adding-projects-(carousel-and-pages))


## To run

```
$ npm install
$ bundle exec jekyll serve
```

### Updating USWDS to a later version.

**Before you do this**: The USWS Sass uses many of the USWDS functions and tokens. While the USWDS.css is already compiled, the site relies on Jekyll to compile the Sass files. There is currently an issue with Jekyll the way it handles `.5` spacing tokens. [See here](https://github.com/uswds/uswds-sandbox/issues/18). **A fix has been merged, but still waiting to be deployed.**

There are a couple ways to update the USWDS:

#### Change theme settings

This site uses custom USWDS theme settings in `assets/uswds-theme`. Use this if you want to include or remove utilities or update utility settings.

1. Compile usds.css `gulp uswds-build-sass`
2. Run Jekylll `bundle exec jekyll serve`


#### Only update the USDS.css without getting new functions and tokens for use in usds.gov project files

Use this to patch any display bugs through updates to USWDS.

1. Update the USWDS version in `package.json`
2. Install the package `npm install`
2. Compile usds.css `gulp uswds-build-sass`
3. Run Jekylll `bundle exec jekyll serve`

#### Update USDS and get new functions and tokens for use in usds.gov project files

This will will update some of the scss files in `assets/uswds-sass`, but will not overwrite any of your files in `assets/uswds-theme`.

1. Update the USWDS version in `package.json`
2. Install the package `npm install`
3. Run `gulp update`
4. Compile usds.css `gulp uswds-build-sass`
5. Run Jekyll `bundle exec jekyll serve`
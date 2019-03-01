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

**Before you do this**: The USWS Sass uses many of the USWDS functions and tokens. While the USWDS.css is already compiled, the site relies on Jekyll to compile the Sass files. There is currently an issue with Jekyll the way it handles `.5` spacing tokens. [See here](https://github.com/uswds/uswds-sandbox/issues/18)

There are a couple ways to update the USWDS:

#### Only update the USDS.css

1. Update the USWDS version in `package.json`
2. Install the package `npm install`
2. Compile usds.css `gulp build-sass`
3. Run Jekylll `bundle exec jekyll serve`

#### Update USDS and get new functions and tokens (not currently recommended)

This will will update some of the scss files in `assets/uswds-sass`.

1. Update the USWDS version in `package.json`
2. Install the package `npm install`
3. Compile usds.css `gulp build-sass`
4. Run `gulp update`
5. Run Jekyll `bundle exec jekyll serve`

You will likely encounter issues when you run Jekyll. If you get errors, it will likely be that `.5 is not a valid spacing token`. If you get this error, you will need to update each instance in `assets/uswds-sass` of `0.5` as spacing token to `05`.

#### Update USDS, get new functions and tokens, update theme configuration Sass (not recommended)

This will will update some of the scss files in `assets/uswds-sass` and overwrite files in `assets/uswds-theme`.

1. Update the USWDS version in `package.json`
2. Install the package `npm install`
3. Compile usds.css `gulp build-sass`
4. Run `gulp init`
5. Run Jekyll `bundle exec jekyll serve`

You will likely encounter issues when you run Jekyll. If you get errors, it will likely be that `.5 is not a valid spacing token`. If you get this error, you will need to update each instance in `assets/uswds-sass` of `0.5` as spacing token to `05`.

The only change in the theme is setting utilities to use the `!important` flag to true, which you will want to do before you run step 3.
```
$utilities-use-important:     true;
```
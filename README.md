# USDS website

The USDS website is built with:

- [Jekyll](https://jekyllrb.com/) via the [github-pages gem](https://rubygems.org/gems/github-pages)
  - See [current dependencies](https://pages.github.com/versions/) for GitHub Pages
- [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)
- [Gulp](https://gulpjs.com/) / [USWDS Gulp](https://github.com/uswds/uswds-gulp)

Before getting started, install the following on your system:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [NPM](https://github.com/npm/cli)
- [Gulp CLI](https://gulpjs.com/docs/en/getting-started/quick-start)

## Install and run

### Initial setup
```
$ npm install
$ bundle install
$ npm start
```

### Running and building
#### Run locally & watch for changes
```
$ npm start
~ or ~
$ npm run serve
```
Builds production Jekyll site, spins it up at `localhost:4000`, and watches for changes. Compiles main stylesheet with Gulp and watches for changes in `assets/stylesheets/**/*.scss`.

#### Production build
```
$ npm run build
```
 Builds production Jekyll site and compiles main stylesheet with Gulp.  

#### Staging build
```
$ npm run build-staging
```
Builds staging Jekyll site using `JEKYLL_ENV=staging` and compiles main stylesheet with Gulp. Staging sites are marked with a timestamped indicator at the lower right of every page and have analytics and robots disabled.

Staging builds are used for temporary testing on cloud.gov. Do not deploy a staging build to GitHub pages.

For more information, see [deploy a temporary staging site to cloud.gov](#deploy-a-temporary-staging-site-to-cloudgov).

## Maintenance

### USWDS, custom styles, and Gulp

USWDS is brought into the project using [uswds-gulp](https://github.com/uswds/uswds-gulp). USWDS and custom styles are compiled from a manifest file (`assets/stylesheets/uswds/styles.scss`), and output to `assets/stylesheets/styles.css`.

#### Change theme settings

Custom USWDS theme settings are declared in `assets/stylesheets/uswds/_uswds-theme-*.scss`. Use these files to [add or remove utilities, edit variables, or change how the design system builds](https://designsystem.digital.gov/documentation/settings/).

After updating, make a [new build or restart your localhost](#running-and-building) to see any changes.

#### Updating USWDS

Updating USWDS may overwrite custom settings, break the theme and manifest files, or just break _everything_. Take care when updating to a newer version.

> **NOTE** This setup is not ideal and [may be addressed in future USWDS updates](https://github.com/uswds/uswds/issues/4152).

1. Read the release notes for the new version.
1. Update the USWDS version number in `package.json`.
2. Install (`$ npm install`) or update (`$npm update`) packages.
3. Double check that updates don't alter the theme or manifest files in `assets/stylesheets/uswds`.
 - If theme updates are required, backup the existing theme files, and re-run the uswds-gulp setup task (`$ gulp init`) to copy over the new files. Diff check the new files with the originals to see what settings need to be copied _back_ over.
4. Make a [new build or start your localhost](#running-and-building).

### Content updates

#### Uploading images
- [/images](https://github.com/usds/website/tree/master/images): This folder contains *editorial photos* and other images for People cards and pages, Project cards and pages, event logos for the Events cards and page, and other areas that are likely to change semi-frequently.
- [/assets/img](https://github.com/usds/website/tree/master/assets/img): Site assets and evergreen images such as page banners/headers and vector graphics should be placed in the assets/img folder here. The images in this folder typically will not be subject to change.

#### Adding Content
* [How to add people](https://github.com/usds/website/wiki/Adding-People-(carousel-and-pages))
* [How to add projects](https://github.com/usds/website/wiki/Adding-projects-(carousel-and-pages))

## Optional

### Deploy a temporary staging site to cloud.gov

Staging sites are one-off, per-user builds in a cloud.gov sandbox. Handy for testing and gathering feedback.

#### Create a cloud.gov account and configure Cloud Foundry

1. [Determine if you have access to cloud.gov](https://cloud.gov/docs/getting-started/accounts/) and follow instructions to [sign up](https://cloud.gov/docs/getting-started/setup/).
2. Log in to your cloud.gov dashboard and install and configure [Cloud Foundry](https://cloud.gov/docs/getting-started/setup/).

#### Build the site locally using the Jekyll "staging" environment variable

```
$ npm run build-staging
```
 Using `build-staging` compiles a fresh stylesheet with Gulp and specifies `JEKYLL_ENV=staging` when building the Jekyll site. This environment variable adds a temporary "Staging" indicator to the site, disables analytics scripts, and adds `<meta name="robots" content="noindex" />` to the head, which can help prevent each temporary site from being indexed.

#### Push staging build to cloud.gov

```
$ cf push
```
A successful push will print a staging url next to `routes`, ex: `website-staging-foo-bar-ab.app.cloud.gov`. Visit the staging url to preview your build.

# USDS website

The USDS website is built with:

- [Jekyll](https://jekyllrb.com/) via the [github-pages gem](https://rubygems.org/gems/github-pages)
  - See [current dependencies](https://pages.github.com/versions/) for GitHub Pages
- [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)
- [USWDS Gulp](https://github.com/uswds/uswds-gulp)

Before getting started, install the following on your system:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [NPM](https://github.com/npm/cli)
- [Gulp CLI](https://gulpjs.com/docs/en/getting-started/quick-start)

## Install & run

### Initial setup
```
$ npm install
$ bundle install
$ npm start
```

### Running & building

```
$ npm run serve
```
> Builds production Jekyll site, spins it up at `localhost:4000`, and watches for changes. Compiles main stylesheet with Gulp and watches for changes in `assets/stylesheets/*.scss`.
>
>Alias for `$ npm start`.

```
$ npm run build
```
> Builds production Jekyll site and compiles main stylesheet with Gulp.  

```
$ npm run build-staging
```
> Builds staging Jekyll site using `JEKYLL_ENV=staging` and compiles main stylesheet with Gulp. Staging sites are marked with a timestamped indicator at the lower right of every page and have analytics and robots disabled.
>
> Staging builds are used for testing on cloud.gov. Do not deploy a staging build to GitHub pages.
>
> For more information, see [deploy a temporary staging site to cloud.gov](#deploy-a-temporary-staging-site-to-cloud.gov).

## Local development & maintenance

### USWDS, Gulp, and custom styles

This site combines USWDS and custom styles ...

### Updating USWDS

There are a couple ways to update the USWDS:

#### Change theme settings

This site uses custom USWDS theme settings in `assets/stylesheets/uswds`. Use these files if you want to [add or remove utilities, edit variables, or update settings](https://designsystem.digital.gov/documentation/settings/).

1. Compile usds.css `gulp uswds-build-sass`
2. Run Jekylll `bundle exec jekyll serve`

#### Only update the USDS.css without getting new functions and tokens for use in usds.gov project files

Use this to patch any display bugs through updates to USWDS.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Compile usds.css `gulp uswds-build-sass`
3. Run Jekylll `bundle exec jekyll serve`

#### Update USDS and get new functions and tokens for use in usds.gov project files

This will will update some of the scss files in `assets/uswds-sass`, but will not overwrite any of your files in `assets/uswds-theme`.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Run `gulp update`
3. Compile usds.css `gulp build-sass`
4. Run Jekyll `bundle exec jekyll serve`

## Content updates

### Uploading images
- [/images](https://github.com/usds/website/tree/master/images): This folder contains *editorial photos* and other images for People cards and pages, Project cards and pages, event logos for the Events cards and page, and other areas that are likely to change semi-frequently.
- [/assets/img](https://github.com/usds/website/tree/master/assets/img): Site assets and evergreen images such as page banners/headers and vector graphics should be placed in the assets/img folder here. The images in this folder typically will not be subject to change.

### Adding Content
* [How to add people](https://github.com/usds/website/wiki/Adding-People-(carousel-and-pages))
* [How to add projects](https://github.com/usds/website/wiki/Adding-projects-(carousel-and-pages))

## Optional

### Deploy a temporary staging site to cloud.gov

Staging sites are one-off, per-user builds in a cloud.gov sandbox. Handy for testing and gathering feedback.

#### Create a cloud.gov account and configure Cloud Foundry

- [Determine if you have access to cloud.gov](https://cloud.gov/docs/getting-started/accounts/) and follow instructions to [sign up](https://cloud.gov/docs/getting-started/setup/).
- Log in to your cloud.gov dashboard and install and configure [Cloud Foundry](https://cloud.gov/docs/getting-started/setup/).

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

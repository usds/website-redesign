/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

var autoprefixer  = require('autoprefixer');
var autoprefixerOptions = require('./node_modules/uswds-gulp/config/browsers');
var cssnano       = require('cssnano');
var gulp          = require('gulp');
var mqpacker      = require('css-mqpacker');
var notify        = require('gulp-notify');
var path          = require('path');
var pkg           = require('./node_modules/uswds/package.json');
var postcss       = require('gulp-postcss');
var rename        = require('gulp-rename');
var replace       = require('gulp-replace');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var uswds         = require('./node_modules/uswds-gulp/config/uswds');

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

// Project Sass source directory
const PROJECT_SASS_SRC = './assets/uswds-theme';

// Project Sass source directory
const PROJECT_USWDS_SASS_SRC = './assets/uswds-sass';

// Images destination
const IMG_DEST = './assets/img';

// Fonts destination
const FONTS_DEST = './assets/fonts';

// Javascript destination
const JS_DEST = './assets/js/vendor';

// Compiled CSS destination
const CSS_DEST = './assets/uswds';

// Site Sass
const USDS_SASS_SRC = './assets/stylesheets/';

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task('copy-uswds-setup', () => {
  return gulp.src(`${uswds}/scss/theme/**/**`)
  .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

gulp.task('copy-uswds-core', () => {
  return gulp.src(`${uswds}/scss/core/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/core`));
});

gulp.task('copy-uswds-lib', () => {
  return gulp.src(`${uswds}/scss/lib/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/lib`));
});

gulp.task('copy-uswds-settings', () => {
  return gulp.src(`${uswds}/scss/settings/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/settings`));
});

gulp.task('copy-uswds-fonts', () => {
  return gulp.src(`${uswds}/fonts/**/**`)
  .pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task('copy-uswds-images', () => {
  return gulp.src(`${uswds}/img/**/**`)
  .pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task('copy-uswds-js', () => {
  return gulp.src(`${uswds}/js/**/**`)
  .pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task('uswds-build-sass', function(done) {
  var plugins = [
    // Autoprefix
    autoprefixer(autoprefixerOptions),
    // Pack media queries
    mqpacker({ sort: true }),
    // Minify
    cssnano(({ autoprefixer: { browsers: autoprefixerOptions }}))
  ];
  return gulp.src([
      `${PROJECT_SASS_SRC}/*.scss`
    ])
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${uswds}/scss`,
          `${uswds}/scss/packages`,
        ]
      }))
    .pipe(replace(
      /\buswds @version\b/g,
      'based on uswds v' + pkg.version
    ))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(notify({
      "sound": "Pop" // case sensitive
    }));
});

gulp.task('sass', function() {
  return gulp.src('./assets/stylesheets/application.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./assets/stylesheets/'))
});

gulp.task('init', gulp.series(
  'copy-uswds-setup',
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',
  'copy-uswds-fonts',
  'copy-uswds-images',
  'copy-uswds-js',
  'uswds-build-sass',
));

gulp.task('update', gulp.series(
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',
  'copy-uswds-fonts',
  'copy-uswds-images',
  'copy-uswds-js',
  'uswds-build-sass',
));

gulp.task('watch-sass', function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('uswds-build-sass'));
});

gulp.task('watch', gulp.series('uswds-build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));

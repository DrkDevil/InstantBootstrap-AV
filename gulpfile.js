'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');

var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('templates', function () {
  return gulp.src('templates/**/*.html')
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest('scripts'));
});

// Watch Files For Changes & Reload
gulp.task('serve', [], function () {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ["./"]
  });
  gulp.watch("index.html").on('change', reload);
  gulp.watch("templates/**/*.html", ['templates', reload]);
  gulp.watch("scripts/**/*.js").on('change', reload);
  gulp.watch("styles/**/*.css").on('change', reload);
  gulp.watch("sass/**/*.scss", ['sass', reload]);
});


// Default task that will run by type 'gulp'
gulp.task('default',['sass', 'templates']);
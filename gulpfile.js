// ----------------------------------------------------------------------------------------
// Plugins
// ----------------------------------------------------------------------------------------

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var browserSync  = require('browser-sync');



// ----------------------------------------------------------------------------------------
// Settings
// ----------------------------------------------------------------------------------------

// concat with gulp (not browserify). Goes in header.


var src = {
  sass: 'scss/**/*.scss',
};

var dest = {
  css: 'css',
};

var name = {
  css: 'style.min.css',
}

// ----------------------------------------------------------------------------------------
// Tasks
// ----------------------------------------------------------------------------------------

// Task: Sass
gulp.task('sass', function() {
  return gulp.src(src.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.css))
    .pipe(reload({ stream:true }));
});

// Task: Watch
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch(src.sass, ['sass'], reload);
});


// Task: BrowserSync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './',
    },
  })
});


// Task: Default (launch server and watch files for changes)
gulp.task('default', ['watch'], function(){});
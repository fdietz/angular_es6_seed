var gulp         = require('gulp');

var connect      = require('gulp-connect');
var sourcemaps   = require('gulp-sourcemaps');

var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('styles/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('styles'))
});

gulp.task('watch', function(){
  gulp.watch('./styles/**/*.scss', ['styles']);
});

gulp.task('connect', function() {
  connect.server({
    port: 8080
  });
});

gulp.task('build', ['styles']);

gulp.task('default', ['build', 'connect','watch']);

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('lint', function() {
  return gulp.src('assets/js/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  return gulp.src('assets/scss/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
             .pipe(concat('scripts.js'))
             .pipe(gulp.dest('public/js'))
             .pipe(rename('scripts.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/*.js', ['lint', 'scripts']);
  gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
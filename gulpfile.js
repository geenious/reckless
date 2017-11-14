"use strict";

var gulp = require('gulp'),
  sass  = require('gulp-sass');

gulp.task("hello", function() {
  console.log("Hey Jeff!");
});

gulp.task("sass", function() {
  return gulp.src("src/scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/static/css"))
});
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject-index', ['bower', 'autoprefixer'], function () {
    var target = gulp.src('./\.tmp/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./public/js/**/*.js', './dist/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
});
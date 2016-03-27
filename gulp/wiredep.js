'use strict';

var wiredep = require('wiredep').stream;
var gulp = require('gulp');

gulp.task('bower', function () {
    return gulp.src('./views/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./\.tmp'));
});
'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    return gulp.src('./\.tmp/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});
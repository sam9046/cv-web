'use strict';

var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp', { recurse: true });

var del = require('del');

gulp.task('clean', function () {
    return del([
        'dist',
        '.tmp'
    ]);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'autoprefixer', 'bower', 'inject-index');
});
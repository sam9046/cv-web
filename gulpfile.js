var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp', { recurse: true });

var del = require('del');

gulp.task('clean', function () {
    return del([
        'dist'
    ]);
});

gulp.task('default', ['clean'], function() {

    gulp.start('bower');
    // place code for your default task here
});
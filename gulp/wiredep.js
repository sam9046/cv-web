var wiredep = require('wiredep').stream;
var gulp = require('gulp');

gulp.task('bower', function () {
    gulp.src('./views/angular2/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./dist/'));
});
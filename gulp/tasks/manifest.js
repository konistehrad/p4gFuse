'use strict';


var config = require('../config');
var gulp = require('gulp');
var manifest = require('gulp-manifest');

gulp.task('manifest', ['build_early'], function(){
    return gulp
        .src([config.dist+'/**/*.js', config.dist+'/**/*.css', config.dist+'/**/*.html'])
        .pipe(manifest({
            hash: true,
            preferOnline: false,
            network: ['http://*', 'https://*', '*'],
            filename: 'app.manifest',
            exclude: 'app.manifest'
        }))
        .pipe(gulp.dest(config.dist));
});

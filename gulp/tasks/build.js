'use strict';

var config = require('../config');
var gulp = require('gulp');
var rev = require('gulp-rev');
var manifest = require('gulp-manifest');

// Build
gulp.task('build', ['jade', 'styles', 'vendor', 'browserify', 'images'], function() {
    if( config.production ) {
        gulp
            .src([config.dist+'/**/*'])
            .pipe(manifest({
                hash: true,
                preferOnline: true,
                network: ['http://*', 'https://*', '*'],
                filename: 'app.manifest',
                exclude: 'app.manifest'
            }))
            .pipe(gulp.dest(config.dist))
    }
});

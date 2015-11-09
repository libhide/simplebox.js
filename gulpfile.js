'use strict';

var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css');

gulp.task("minifyScripts", function() {
    return gulp.src("src/js/simplebox.js")
        .pipe(gulp.dest('./demo/js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename('simplebox.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('compileSass', function() {
    return gulp.src("src/css/simplebox.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./demo/css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('simplebox.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('outputImages', function() {
    return gulp.src("src/img/cross.svg")
        .pipe(gulp.dest('./dist/img'));
});

// gulp.task('watchSass', function() {
//     gulp.watch('src/css/*.scss', ['compileSass']);
// });

gulp.task("build", ['minifyScripts', 'compileSass', 'outputImages']);

gulp.task("default", ["build"]);

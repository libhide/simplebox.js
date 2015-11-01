var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var minify      = require('gulp-minify-css');
var prefix      = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });

    gulp.watch(["./scss/*.scss", "./scss/lib/*.scss"], ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/index.scss")
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
        .pipe(rename('style.css'))
        .pipe(gulp.dest("./"))
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

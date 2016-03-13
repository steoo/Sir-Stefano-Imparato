var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require("gulp-watch"),
    //sass = require("ruby-sass");
    sass = require("gulp-sass");

var css = [
    "vendor/pure/base.css",
    "vendor/pure/base-context.css",
    "vendor/pure/grids.css",
    "vendor/pure/grids-units.css",
    "vendor/pure/grids-responsive.css",
    'assets/css/style.css'
];

gulp.task('watch-css', function () {
    gulp.watch('assets/scss/*.scss', ["css"]);
});

gulp.task('sass', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
    //sass('assets/scss/style.scss', function (err, css) {
    //    console.log(err);
    //})
    //    .pipe(gulp.dest('./assets/css'))
});

gulp.task('css', [], function () {
    return gulp.src(css)
        .pipe(concat("style.min.css"))
        .pipe(minifycss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('watch-js', function () {
    gulp.watch('assets/js/sir.js', ["js"])
});

gulp.task('js', function () {
    return gulp.src(['vendor/jquery/dist/jquery.min.js', 'assets/js/sir.js'])
        .pipe(concat("sir.js"))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task("default", ["css", "js"]);
gulp.task("watchers", ["watch-css", "watch-js"]);
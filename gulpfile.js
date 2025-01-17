const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimeSass () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
}

function comprimeScripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function imagesMinificadas () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(comprimeSass, imagesMinificadas, comprimeScripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(comprimeSass));
    gulp.watch('./src/scripts/*.js', gulp.parallel(comprimeScripts));
}
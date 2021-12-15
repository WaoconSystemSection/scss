var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

// Compile Sass
gulp.task('compile', function(){
    return sass('src/scss/', {
        style: 'compressed',
        noCache: true
    })
    .pipe(gulp.dest('./assets/css/'))
});

// Scripts
gulp.task('scripts', function(){
    return gulp.src(['src/js/vendor/modernizr.js','src/js/*.js'])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./assets/js/'))
});

// Images
gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true}))
    .pipe(gulp.dest('./assets/img'));
});

// Watch
gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', ['compile']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/img/.{jpg, png, gif, svg}', ['imagemin']);
});

// Clean task
gulp.task('clean', function(){
    return del('assets/');
});

// default task
gulp.task('default',['clean'], function(){
    gulp.start('compile', 'scripts', 'imagemin');
});



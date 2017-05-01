const gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	shell = require('gulp-shell'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin');
 
gulp.task('styles', () => {
	sass('app/scss/**/*.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('public/css/'));
});

gulp.task('compile', shell.task([
	'handlebars app/views/main.handlebars -f app/js/templates/main.js'
]))

gulp.task('scripts', () => {
	gulp.src(['app/js/vendors/*.js', 'app/data/*.js', 'app/js/templates/*.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(minify())
		.pipe(gulp.dest('public/js'));
});
gulp.task('own-scripts', () => {
	gulp.src(['app/js/routing.js', 'app/js/scripts.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('public/js'));
});
gulp.task('images', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
);

gulp.task('public', ['styles', 'scripts', 'own-scripts', 'images']);

gulp.task('watch', () => {
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/views/**/*.handlebars', ['compile']);
});

gulp.task('default', ['styles', 'compile', 'scripts', 'own-scripts']);
const gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	shell = require('gulp-shell');

	gulp.task('styles', () => {
		sass('src/scss/**/*.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('src/css/'));
	});

	gulp.task('compile', shell.task([
  		'handlebars src/templates/main-template.handlebars -f src/js/main-template.js'
	]))

	gulp.task('watch', () => {
		gulp.watch('src/scss/**/*.scss', ['styles']);
		gulp.watch('src/templates/*.handlebars', ['compile']);
	});

gulp.task('default', ['styles', 'compile', 'watch']);
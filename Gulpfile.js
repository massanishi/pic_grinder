var browserify = require('browserify'),
	gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	reactify = require('reactify');

gulp.task('browserify', function() {
	return browserify('./public/js/app.js')
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public/js/'));
})

gulp.task('build', ['browserify']);

gulp.task('default', ['build']);
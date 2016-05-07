var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var electron = require('electron-connect').server.create();
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle:app', 'bundle:css'], function() {

  // Start browser process 
  electron.start();

  // Restart browser process 
  gulp.watch('src/browser/**/*', electron.restart);

  // Reload renderer process
	gulp.watch('src/app/**/*', ['reload:renderer']);
	gulp.watch('src/app/css/*', ['reload:renderer']);
	gulp.watch('index.html', electron.reload);
});

// Bundle Reactjs app 
gulp.task('bundle:app', function() {
	return browserify('src/app/app.js')
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('build'));
});

// Bundle css
gulp.task('bundle:css', function() {
	return gulp.src('src/app/css/*')
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('build'));
});

// Restart browser process
gulp.task('reload:browser', function() {
  electron.restart();
});

// Reload renderer process
gulp.task('reload:renderer', ['bundle:app', 'bundle:css'], function() {
  electron.reload();
});

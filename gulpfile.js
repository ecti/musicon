console.log(process.cwd());

var gulp = require('gulp');
var electron = require('electron-connect').server.create({
	electron: require('electron-prebuilt'),
	verbose: true
});

gulp.task('serve', function() {

  // Start browser process 
  electron.start();

 	
  // Restart browser process 
  gulp.watch('src/browser/*.js', electron.restart);

  // Reload renderer process 
  gulp.watch(['src/app/*', 'index.html'], electron.reload);
});
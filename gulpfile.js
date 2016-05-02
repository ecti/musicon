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
  gulp.watch('src/browser/main.js', electron.restart);

  // Reload renderer process 
  gulp.watch(['index.js', 'index.html'], electron.reload);
});
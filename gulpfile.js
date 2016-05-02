console.log(process.cwd());

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function() {

  // Start browser process 
  electron.start();

  // Restart browser process 
  gulp.watch('src/browser/**/*', electron.restart);

  // Reload renderer process (doesn't work)
  //gulp.watch(['src/app/app.js', 'src/app/**/*.js', 'index.html'], electron.reload);
});

gulp.task('default', ['serve']);
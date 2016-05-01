const electron = require('electron');

const dialog = electron.dialog;

module.exports.selectDirectory = function() {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  })
}
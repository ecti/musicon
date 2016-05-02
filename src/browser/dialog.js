const electron = require('electron');
const fs = require('fs');

const dialog = electron.dialog;

module.exports.selectDirectory = function() {
  let directoryPath = dialog.showOpenDialog({
    properties: ['openDirectory']
  });
	
	console.log(directoryPath);
}
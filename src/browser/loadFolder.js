const electron = require('electron');
const fs = require('fs');

const dialog = electron.dialog;

module.exports.loadFolder = function() {
  const directoryPath = dialog.showOpenDialog({
    properties: ['openDirectory']
  });
	
	if(!directoryPath) 
		return;
	
	return getFilesRecursive(directoryPath[0], '.mp3');
}

/**
 * Recursively find all files with given ext.
 * Returns an array of files and their path
 */
function getFilesRecursive(folder, ext) {
	let fileContents = fs.readdirSync(folder);
	let	files = [];
	let	stats;

	fileContents.forEach((fileName) => {
		stats = fs.lstatSync(folder + '/' + fileName);

		if (stats.isDirectory()) {
			files = files.concat(getFilesRecursive(folder + '/' + fileName, ext));
		} else {
			if(fileName.indexOf(ext) > -1) {
				files.push({
					fileName: fileName,
					path: folder + '/' + fileName
				});
			}
		}
	});

	return files;
};
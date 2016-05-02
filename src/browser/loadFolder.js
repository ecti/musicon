const electron = require('electron');
const fs = require('fs');

const dialog = electron.dialog;

module.exports.loadFolder = function() {
  const directoryPath = dialog.showOpenDialog({
    properties: ['openDirectory']
  });
	console.log(directoryPath[0]);
	const fileContents = fs.readdirSync(directoryPath[0]);
	console.log(fileContents);
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
				files.unshift(folder.replace('./public/', '') + '/' + fileName);
			}
		}
	});

	return files;
};
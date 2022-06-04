
// rename file (old path) => (new path)
const fs = require('fs');
const fsPromises = require('fs').promises;

(async function main() {
	try {

		// Rename the file
		fsPromises.rename('test.txt', 'info.txt')
		console.log("\nFile Renamed!\n");

	} catch (err) {
		console.error(err);
	}
})();

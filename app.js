
// OS
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);

// File System - Do not Sync methods
const fs = require('fs');

fs.readdir('./', function (err, files) {
	if (err)
		console.log(`Error: ${err}`);
	else
		console.log(`Result: ${files}`);
});


const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {	// Arrow function instead of using function()
	console.log('Listener called', arg);
});

logger.log('message');

// HTTP model
const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World');
		res.end;
	}

	if (req.url === '/api/courses') { // instead of doing this we must use Express
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

/*
server.on('connection', (socket) => {
	console.log('New connection...');
})
*/
server.listen(3000);
console.log('Listening on port 3000...');



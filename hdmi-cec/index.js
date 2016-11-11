let NodeCEC = require('nodecec');

let cec = new NodeCEC();

// start cec connection
cec.start();

cec.on('ready', function(data) {
    console.log("ready...");
});

cec.on('status', function(data) {
   console.log("[" + data.id + "] changed from " + data.from + " to " + data.to); 
});

cec.on('key', function(data) {
    console.log(data.name);
});

cec.on('close', function(code) {
    process.exit(0);
});

cec.on('error', function(data) {
    console.log('---------------- ERROR ------------------');
    console.log(data);
    console.log('-----------------------------------------');
});

let stdin = process.openStdin();
stdin.on('data', function(chunk) { 
    cec.send(chunk);
});
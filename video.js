var RaspiCam = require("raspicam");

var output = 'video-' + Math.floor(new Date().getTime()/1000) + '.h264';

var camera = new RaspiCam({
	mode: "video",
	output: output,
	rotation: 180,
	framerate: 15,
	timeout: 5000 // take a 5 second video
});

camera.on("started", function( err, timestamp ){
	console.log("video started at " + timestamp );
});

camera.on("read", function( err, timestamp, filename ){
	console.log("video captured with filename: " + filename + " at " + timestamp );
	// camera.stop();
});

camera.on("exit", function( timestamp ){
	console.log("video child process has exited at " + timestamp );
	camera.stop();
});

camera.start();
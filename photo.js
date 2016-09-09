var RaspiCam = require("raspicam");

var output = 'image-' + Math.floor(new Date().getTime()/1000) + '.jpg';

var camera = new RaspiCam({
	mode: "photo",
	output: output,
	encoding: "jpg",
	// timelapse: 1000,
	timeout: 0, // take the picture immediately
	rotation: 180
});

//listen for the "start" event triggered when the start method has been successfully initiated
camera.on("start", function(){
    //do stuff
    console.log('camera start: triggered when the start method has been successfully initiated');
    // camera.stop();
});

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, timestamp, filename){ 
    //do stuff
    console.log(filename);
    console.log('camera read: triggered when each new photo/video is saved');
    // camera.stop();
    // console.log(camera.get());
    camera.stop();
});

// console.log("rename", function(){
// 	camera.stop();
// });

//listen for the "stop" event triggered when the stop method was called
camera.on("stop", function(){
    //do stuff
    console.log('camera stop: triggered when the stop method was called');
});

//listen for the process to exit when the timeout has been reached
camera.on("exit", function(){
    //do stuff
    console.log('camera exit: the process exit when the timeout has been reached');
});

camera.start();
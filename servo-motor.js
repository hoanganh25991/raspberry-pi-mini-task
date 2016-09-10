// var wpi = require('wiring-pi');

// wpi.wiringPiSetupPhys();
// var pin = 11;
// wpi.pinMode(pin, wpi.PWM_OUTPUT);

// while(true)
// 	wpi.pwmWrite(pin, 1.2);
// Example of using PWM
// var wpi = require('wiring-pi');
// var async = require('async');

// wpi.setup('wpi');

// var pin = 1;
// wpi.pinMode(pin, wpi.PWM_OUTPUT);

// async.series([
//   function (cb) {
//     wpi.pwmWrite(pin, 100);
//     cb();
//   },
//   function (cb) {
//     setTimeout(cb, 1000);
//   },
//   function (cb) {
//     wpi.pwmWrite(pin, 1023);
//     cb();
//   },
//   function (cb) {
//     setTimeout(cb, 1000);
//   },
//   function (cb) {
//     wpi.pwmWrite(pin, 0);
//     cb();
//   }
// ], function (err) {
// });
/// Exit strategy to kill child process

// process.on('exit', function() {
//     child_process.kill();
// });

// var piblaster = require('pi-blaster.js');

// const min = 0.05;
// const max = 0.26;

// piblaster.current = min;
// piblaster.move = function(pin){
// 	piblaster.current += 0.01;
// 	piblaster.setPwm(pin, piblaster.current);
// };

// var interval = setInterval(function(){
// 	if(piblaster.current >= max){
// 		clearInterval(interval);
// 		// process.exit(1);
// 	}
// 	console.log('move');
// 	piblaster.move(17);
// }, 100);

// const min = 0.16;
// const max = 0.23;

// piblaster.current = min;
// piblaster.move = function(pin){
// 	piblaster.current += 0.01;
// 	piblaster.setPwm(pin, piblaster.current);
// };

// var interval = setInterval(function(){
// 	if(piblaster.current >= max){
// 		clearInterval(interval);
// 		// process.exit(1);
// 	}
// 	console.log('move');
// 	piblaster.move(18);
// }, 100);
var RaspiCam = require("raspicam");

var output = 'servo-self-cam-' + Math.floor(new Date().getTime()/1000) + '.h264';

var camera = new RaspiCam({
	mode: "video",
	output: output,
	rotation: 180,
	framerate: 60,
	timeout: 30000 // take a 5 second video
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
	// camera.stop();
});

camera.start();

var piblaster = require('pi-blaster.js');

piblaster.move = function(pin, agle){
	console.log(util.format('move on: pin %s| agle %s|'), pin, agle);
	piblaster.setPwm(pin, agle);
};

var servo = function(pin, min, max, piblaster){
	// var servo = this;
	var current = min;
	var move = function(delta){
		current += delta;
		
		current >  max ? current = max : false;

		current < min ? current = min : false;

		piblaster.move(pin, Number(current.toFixed(2)));
	};

	var stop = function(){
		piblaster.move(pin, 0, 0);
	};

	return {
		pin: pin,
		min: min,
		max: max,
		current: min,
		move: move,
		stop: stop
	};
};

servo1 = servo(18, 0.16, 0.23, piblaster);
servo1.current = servo1.max;

servo2 = servo(17, 0.06, 0.27, piblaster);
servo2.current = servo2.max;

var keypress = require('keypress');
var util = require('util');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	console.log(util.format('press: \033[01;32m%s\033[0m', key.name));

	const map = {
		up: 0.01,
		down: -0.01,
		left: 0.01,
		right: -0.01
	};

	//up down for servo1
	if(key.name == 'up' || key.name == 'down'){
		servo1.move(map[key.name]);
	}

	if(key.name == 'left' || key.name == 'right'){
		servo2.move(map[key.name]);
	}

	if (key && key.ctrl && key.name == 'c') {
		servo1.stop();
		servo2.stop();
		camera.stop();
		process.stdin.pause();
	}

});

process.stdin.setRawMode(true);
process.stdin.resume();
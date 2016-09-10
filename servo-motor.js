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

var piblaster = require('pi-blaster.js');

const min = 0.05;
const max = 0.26;

piblaster.current = min;
piblaster.move = function(pin){
	piblaster.current += 0.01;
	piblaster.setPwm(pin, piblaster.current);
};

// piblaster.setPwm(17, 0.2);

var interval = setInterval(function(){
	if(piblaster.current >= max){
		clearInterval(interval);
		// process.exit(1);
	}
	console.log('move');
	piblaster.move(17);
}, 100);


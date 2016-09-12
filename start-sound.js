var wpi = require('wiring-pi');

wpi.wiringPiSetupPhys();

var pinGND = 34;
var pinX = 40;

wpi.pinMode(pinX, wpi.OUTPUT);

var status = 0;

setInterval(function(){
	console.log(`now write ${status}`);
	status = status == 0 ? 1 : 0;
	// status = 1;
	wpi.digitalWrite(pinX, status);
}, 4.8);

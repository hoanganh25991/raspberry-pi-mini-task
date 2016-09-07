var wpi = require('wiring-pi');

var sleep = function(s){
	var e = new Date().getTime() / 1000 + s;

	while(new Date().getTime() / 1000 <= e){

	}
};

wpi.wiringPiSetupPhys();

var pinX = 11;
wpi.pinMode(pinX, wpi.OUTPUT);

var status = 0;

setInterval(function(){
	console.log(`now write ${status}`);
	status = status == 0? 1 : 0;
	wpi.digitalWrite(pinX, status);
}, 500);

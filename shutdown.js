var sound = require('./piezo/login-sound.js');

var exec = require('child_process').exec;

var p;

process.on('exit', function(){
	p.kill();
});


var wpi = require('wiring-pi');

wpi.wiringPiSetupPhys();

//which pin connect to button hit
var shutdownBtn = 40;

wpi.pinMode(40, wpi.INPUT);

while(true){
	if(wpi.digitalRead(40) == 1){
		sound.play();
		p = exec('sudo shutdown');
		process.exit();
	}
}


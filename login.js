var wpi = require('wiring-pi');

wpi.wiringPiSetupPhys();

var Piezo = require('./piezo/piezo.js');

var piezo = new Piezo({
	pin: 40
}, wpi);

var collection = require('./piezo/mario.js');

var p;

piezo.play({
	// song: collection.mario,
	song: collection.marioBrief
}, function() {
	wpi.digitalWrite(40, 0);
	var exec = require('child_process').exec;
	p = exec('python clock.py');
});

process.on('exit', function(){
	p.kill();
});
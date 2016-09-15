var wpi = require('wiring-pi');

wpi.wiringPiSetupPhys();

var Piezo = require('./piezo.js');

var piezo = new Piezo({
	pin: 33
}, wpi);

var collection = require('./mario.js');

var sound = {};

sound.play = function(){
	piezo.play({
		// song: collection.mario,
		song: collection.shutdown
	}, function() {
		wpi.digitalWrite(33, 0);
	});
};

module.exports = sound;
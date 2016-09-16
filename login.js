// var sound = require('./piezo/login-sound.js');

// sound.play();

var exec = require('child_process').exec;

p = exec('python clock.py');	

process.on('exit', function(){
	p.kill();
});
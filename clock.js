var Max7219 = require('node-max7219');
var moment = require("moment");

var options = {
	device: 'sevensegment',
	cascaded: 2,
	vertical: false
};

var max7219 = Max7219(options);

/**
 * fast teset
 */
// max7219.drawText('The repl module exports the repl.REPLServer class. While running, instances of repl.REPLServer');
// max7219.drawText('The');
process.on('exit', function(){
	child_process.kill();
});

loop = function(time, callback){
	var handler = function(){
		callback(function(){
			clearInterval(interval);
		});
	};

	var interval = setInterval(handler, time);
};

setInterval(function(){
	var time = moment().format("hh.mm.ss");
	max7219.drawText(time);
}, 1000);

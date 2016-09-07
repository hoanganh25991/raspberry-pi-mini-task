var Max7219 = require('node-max7219');

var max7219 = Max7219();

// max7219.drawText('tinker io');

const repl = require('repl');

repl.inject = function(injectedObj){
	var r = repl.start('>');
	Object.keys(injectedObj).forEach(function(key){
		r.context[key] = injectedObj[key];
	});
	
};

repl.inject({
	max7219: max7219
});
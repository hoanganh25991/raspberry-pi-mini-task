const OLED = require('rpi-oled');
const pngtolcd = require('png-to-lcd');
const font = require('oled-font-5x7');

const opts = {
  width: 128, // screen width
  height: 64, // screen height
  address: 0x3C, // Pass I2C address of screen if it is not the default of 0x3C
  datasize: 16, // Change the amount of bytes sent at once (default 16)
  device: '/dev/i2c-0', // Pass your i2c device here if it is not /dev/i2c-1
  microview: true, // set to true if you have a microview display
};

const oled = new OLED(opts);

// Draw image
// pngtolcd('nyan-cat.png', true, function(err, bitmap) {
//   oled.buffer = bitmap;
//   oled.update();
// });

// sets cursor to x = 1, y = 1
oled.setCursor(1, 1);
oled.writeString(font, 1, 'Cats and dogs are really cool animals, you know.', 1, true);

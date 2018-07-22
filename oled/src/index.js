const OLED = require('oled-js-pi');
const font = require('oled-font-5x7');

const opts = {
  width: 128,
  height: 64,
  address: 0x3C
};

const oled = new OLED(opts);

// do cool oled things here
// draws 4 white pixels total
// format: [x, y, color]
// oled.drawPixel([
//   [128, 1, 1],
//   [128, 32, 1],
//   [128, 16, 1],
//   [64, 16, 1]
// ]);


// sets cursor to x = 1, y = 1
oled.setCursor(1, 1);
oled.writeString(font, 1, 'Cats and dogs are really cool animals, you know.', 1, true);

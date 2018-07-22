const OLED = require('oled-js-pi');

const opts = {
  width: 128,
  height: 64,
  address: 0x3D
};

const oled = new OLED(opts);

// do cool oled things here
// draws 4 white pixels total
// format: [x, y, color]
oled.drawPixel([
  [128, 1, 1],
  [128, 32, 1],
  [128, 16, 1],
  [64, 16, 1]
]);

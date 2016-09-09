#!/usr/bin/env python

import max7219.led as led
import time
from max7219.font import proportional, SINCLAIR_FONT, TINY_FONT, CP437_FONT
from random import randrange

# device = led.matrix(cascaded=1)
device = led.sevensegment(cascaded=2,vertical=False)
# device.orientation(180);
device.show_message("MAX7219 LED Matrix Demo")

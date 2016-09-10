#!/usr/bin/env python

import max7219.led as led
import time
import random
from datetime import datetime

device = led.sevensegment(cascaded=2)

device.write_text(1, 'abcd')
# device.show_message('abcd')
time.sleep(1)
device.rotate_left();
time.sleep(1)
device.rotate_left();


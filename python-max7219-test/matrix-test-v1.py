#!/usr/bin/env python

import max7219.led as led
import time
from max7219.font import proportional, SINCLAIR_FONT, TINY_FONT, CP437_FONT
from random import randrange

# device = led.matrix(cascaded=1)

device = led.matrix(cascaded=4,vertical=True)
###############################
# we how to show_msg, then scroll
# device.scroll_right()
# device.show_message('hello world')
# device.scroll_right()

##############################
# orientation work on LETTER
device.orientation(180)
device.letter(3, ord('H'))
# device.orientation(180)
device.letter(2, ord('O'))
# device.orientation(180)
device.letter(1, ord('A'))
# device.orientation(180)
device.letter(0, ord('N'))
# device.orientation(180)
# device.invert(1)
# not work with
# device.scroll_right()

#############################
# orientation NOT WORK WITH SHOW_MESSAGE
# device.orientation(180)
# device.show_message('hello')
# device.show_message('h')

############################
device._orientation = 180
device.show_message('hello')
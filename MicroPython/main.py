"""
Created by: Noah
Created on: March 2026
This module is a Micro:bit MicroPython program that lights up the LED in all colors available
"""

from microbit import *

# setting up
display.clear()
display.show(Image.HAPPY)

# shows all colors on A button
while True:
    if button_a.is_pressed():
        display.show(Image.YES)

    # turns on red pin
    pin14.write_digital(1)
    display.show("red")
    pin14.write_digital(0)
    display.clear()

    # turns on blue pin
    pin15.write_digital(1)
    display.show("green")
    pin15.write_digital(0)
    display.clear()

    # turns on green pin
    pin16.write_digital(1)
    display.show("blue")
    pin16.write_digital(0)
    display.clear()

    # turns on blue and red pin(magenta)
    pin14.write_digital(1)
    pin16.write_digital(1)
    display.show("magenta")
    pin14.write_digital(0)
    pin16.write_digital(0)
    display.clear

    # turns on green and red pin(yellow)
    pin14.write_digital(1)
    pin15.write_digital(1)
    display.show("yellow")
    pin14.write_digital(0)
    pin15.write_digital(0)
    display.clear()

    # turns on green and blue pin(cyan)
    pin15.write_digital(1)
    pin16.write_digital(1)
    display.show("cyan")
    pin15.write_digital(0)
    pin16.write_digital(0)
    display.clear

    # turns on green, red and blue pin(white)
    pin14.write.digital(1)
    pin15.write_digital(1)
    pin16.write_digital(1)
    display.show("white")
    display.clear

    # turning off everything(no color)
    pin14.write.digital(0)
    pin15.write_digital(0)
    pin16.write_digital(0)
    display.show("no color")
    display.clear

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah
 * Created on: March 6
 * This program turns on all the RGB LED colors
*/

// setting up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shows all colors on A button
input.onButtonPressed(Button.A, function () {
    // turns on red pin
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on blue pin
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on green pin
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on blue and red pin(magenta)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on green and red pin(yellow)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on green and blue pin(cyan)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on green, red and blue pin(white)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)

    // turning off everything(no color)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})

// resetting everything
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

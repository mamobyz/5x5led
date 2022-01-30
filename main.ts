basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.pause(1000)
basic.showIcon(IconNames.ArrowEast)
basic.forever(function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.setLedColor(0x7f00ff)
})

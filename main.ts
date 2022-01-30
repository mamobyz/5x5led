function blink () {
	music.playMelody("G G E F F D C D E C A3 B3 C4 C#4 ", 120);
}
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
    basic.showIcon(IconNames.SmallHeart)
    basic.setLedColor(0x00ff00)
    blink(); 
    basic.setLedColor(0xff0000)
    basic.showIcon(IconNames.Heart)
})

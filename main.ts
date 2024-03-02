let distance = 0
input.onButtonPressed(Button.A, function () {
    distance = Tinybit.Ultrasonic_Car()
    basic.showNumber(distance)
    if (distance < 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else {
        if (distance < 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        } else {
            if (distance < 20) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                music.play(music.tonePlayable(523, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            } else {
                if (distance < 50) {
                    basic.showLeds(`
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    music.play(music.tonePlayable(392, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    music.play(music.tonePlayable(247, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . # .
        # . # . #
        # # . . #
        # # # . #
        `)
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
    basic.pause(1000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})

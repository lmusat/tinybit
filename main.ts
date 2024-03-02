let distance = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(distance)
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
    distance = Tinybit.Ultrasonic_Car()
    if (distance <= 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        if (distance <= 4) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # . . .
                `)
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        } else {
            if (distance <= 6) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # . .
                    `)
                music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            } else {
                if (distance <= 8) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # .
                        `)
                    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                } else {
                    if (distance <= 10) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            # # # # #
                            `)
                        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                    } else {
                        if (distance <= 15) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . .
                                # # # # #
                                `)
                            music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                        } else {
                            if (distance <= 20) {
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    # # . . .
                                    # # # # #
                                    `)
                                music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                            } else {
                                if (distance <= 25) {
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # # # # .
                                        # # # # #
                                        `)
                                    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                } else {
                                    if (distance <= 30) {
                                        basic.showLeds(`
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # # # # #
                                            # # # # #
                                            `)
                                        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                    } else {
                                        if (distance <= 35) {
                                            basic.showLeds(`
                                                . . . . .
                                                . . . . .
                                                # . . . .
                                                # # # # #
                                                # # # # #
                                                `)
                                            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                        } else {
                                            if (distance <= 40) {
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . . .
                                                    # # . . .
                                                    # # # # #
                                                    # # # # #
                                                    `)
                                                music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                            } else {
                                                if (distance <= 45) {
                                                    basic.showLeds(`
                                                        . . . . .
                                                        . . . . .
                                                        # # # . .
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                } else {
                                                    if (distance <= 50) {
                                                        basic.showLeds(`
                                                            . . . . .
                                                            . . . . .
                                                            # # # # .
                                                            # # # # #
                                                            # # # # #
                                                            `)
                                                        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                    } else {
                                                        if (distance <= 55) {
                                                            basic.showLeds(`
                                                                . . . . .
                                                                . . . . .
                                                                # # # # #
                                                                # # # # #
                                                                # # # # #
                                                                `)
                                                            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                        } else {
                                                            if (distance <= 60) {
                                                                basic.showLeds(`
                                                                    . . . . .
                                                                    # . . . .
                                                                    # # # # #
                                                                    # # # # #
                                                                    # # # # #
                                                                    `)
                                                                music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                            } else {
                                                                if (distance <= 70) {
                                                                    basic.showLeds(`
                                                                        . . . . .
                                                                        # # # . .
                                                                        # # # # #
                                                                        # # # # #
                                                                        # # # # #
                                                                        `)
                                                                    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                                } else {
                                                                    if (distance <= 80) {
                                                                        basic.showLeds(`
                                                                            . . . . .
                                                                            # # # # #
                                                                            # # # # #
                                                                            # # # # #
                                                                            # # # # #
                                                                            `)
                                                                        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                                    } else {
                                                                        if (distance <= 100) {
                                                                            basic.showLeds(`
                                                                                # # # . .
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                `)
                                                                            music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                                        } else {
                                                                            basic.showLeds(`
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                `)
                                                                            music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

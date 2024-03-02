input.onButtonPressed(Button.A, function () {
    apasatButon = 1
    basic.showNumber(distance)
    if (folosesteV2 == 0) {
        folosesteV2 = 1
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # # #
            . # # # .
            # # # # #
            `)
    } else {
        folosesteV2 = 0
        basic.showLeds(`
            . . # # .
            . # # # .
            # # # # .
            . . # # .
            # # # # #
            `)
    }
    apasatButon = 0
})
input.onButtonPressed(Button.B, function () {
    apasatButon = 1
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
    apasatButon = 0
})
let distance = 0
let apasatButon = 0
let folosesteV2 = 0
folosesteV2 = 0
basic.forever(function () {
    if (apasatButon == 0) {
        if (folosesteV2 == 0) {
            distance = Tinybit.Ultrasonic_Car()
        } else {
            distance = Tinybit.Ultrasonic_CarV2()
        }
        if (distance <= 2) {
            Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        } else {
            if (distance <= 4) {
                Tinybit.RGB_Car_Big2(220, 0, 0)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
            } else {
                if (distance <= 6) {
                    Tinybit.RGB_Car_Big2(200, 0, 0)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # . .
                        `)
                    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                } else {
                    if (distance <= 8) {
                        Tinybit.RGB_Car_Big2(160, 0, 0)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            # # # # .
                            `)
                        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                    } else {
                        if (distance <= 10) {
                            Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                # # # # #
                                `)
                            music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                        } else {
                            if (distance <= 15) {
                                Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    # . . . .
                                    # # # # #
                                    `)
                                music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                            } else {
                                if (distance <= 20) {
                                    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # # . . .
                                        # # # # #
                                        `)
                                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                } else {
                                    if (distance <= 25) {
                                        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
                                        basic.showLeds(`
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # # # # .
                                            # # # # #
                                            `)
                                        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                    } else {
                                        if (distance <= 30) {
                                            Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
                                            basic.showLeds(`
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                # # # # #
                                                # # # # #
                                                `)
                                            music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                        } else {
                                            if (distance <= 35) {
                                                Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . . .
                                                    # . . . .
                                                    # # # # #
                                                    # # # # #
                                                    `)
                                                music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                            } else {
                                                if (distance <= 40) {
                                                    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
                                                    basic.showLeds(`
                                                        . . . . .
                                                        . . . . .
                                                        # # . . .
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                } else {
                                                    if (distance <= 45) {
                                                        Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
                                                        basic.showLeds(`
                                                            . . . . .
                                                            . . . . .
                                                            # # # . .
                                                            # # # # #
                                                            # # # # #
                                                            `)
                                                        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                    } else {
                                                        if (distance <= 50) {
                                                            Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
                                                            basic.showLeds(`
                                                                . . . . .
                                                                . . . . .
                                                                # # # # .
                                                                # # # # #
                                                                # # # # #
                                                                `)
                                                            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                        } else {
                                                            if (distance <= 55) {
                                                                Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
                                                                basic.showLeds(`
                                                                    . . . . .
                                                                    . . . . .
                                                                    # # # # #
                                                                    # # # # #
                                                                    # # # # #
                                                                    `)
                                                                music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                            } else {
                                                                Tinybit.RGB_Car_Big(Tinybit.enColor.White)
                                                                if (distance <= 60) {
                                                                    basic.showLeds(`
                                                                        . . . . .
                                                                        # . . . .
                                                                        # # # # #
                                                                        # # # # #
                                                                        # # # # #
                                                                        `)
                                                                    music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                                } else {
                                                                    if (distance <= 70) {
                                                                        basic.showLeds(`
                                                                            . . . . .
                                                                            # # # . .
                                                                            # # # # #
                                                                            # # # # #
                                                                            # # # # #
                                                                            `)
                                                                        music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                                    } else {
                                                                        if (distance <= 80) {
                                                                            basic.showLeds(`
                                                                                . . . . .
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                # # # # #
                                                                                `)
                                                                            music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                                        } else {
                                                                            if (distance <= 100) {
                                                                                basic.showLeds(`
                                                                                    # # # . .
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    `)
                                                                                music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                                                                            } else {
                                                                                basic.showLeds(`
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    # # # # #
                                                                                    `)
                                                                                music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
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
    }
})

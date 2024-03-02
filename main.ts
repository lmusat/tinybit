input.onButtonPressed(Button.A, function () {
	
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

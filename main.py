def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 95)
    basic.pause(1000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.pause(2000)
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 6)
    basic.pause(1000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.pause(2000)
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_LEFT)
    basic.pause(1000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.pause(2000)
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_RIGHT)
    basic.pause(1000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.pause(2000)
    basic.show_leds("""
        . . . . .
        . . . # .
        # . # . #
        # # . . #
        # # # . #
        """)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_SPINLEFT)
    basic.pause(1000)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)

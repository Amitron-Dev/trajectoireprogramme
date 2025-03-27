def on_logo_pressed():
    basic.pause(200)
    parcours(71, 70)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def parcours(vg: number, vd: number):
    basic.show_icon(IconNames.SQUARE)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vd)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vg)
    basic.pause(1000)
    Kitronik_Move_Motor.motor_off(Kitronik_Move_Motor.Motors.MOTOR_RIGHT)
    Kitronik_Move_Motor.motor_off(Kitronik_Move_Motor.Motors.MOTOR_LEFT)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vd)
    basic.pause(150)
    Kitronik_Move_Motor.motor_off(Kitronik_Move_Motor.Motors.MOTOR_RIGHT)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vg)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vd)
    basic.pause(100)
    Kitronik_Move_Motor.stop()
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        vg)
    basic.pause(100)
basic.show_icon(IconNames.HAPPY)
basic.pause(200)
basic.clear_screen()
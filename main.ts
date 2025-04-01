input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    parcours(70, 71)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
function parcours (vg: number, vd: number) {
    basic.showIcon(IconNames.Square)
    // Starting
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(1500)
    Kitronik_Move_Motor.stop()
    // Spin start
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(265)
    Kitronik_Move_Motor.stop()
    // Move 2
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(900)
    Kitronik_Move_Motor.stop()
    // Spin 2
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(250)
    Kitronik_Move_Motor.stop()
    // Move 3
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(1600)
    Kitronik_Move_Motor.stop()
    // Spin 3
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    basic.pause(270)
    Kitronik_Move_Motor.stop()
    // Move 4 (faire en sorte qu'il s'arrête juste à la sortie)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(2000)
    Kitronik_Move_Motor.stop()
}
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()

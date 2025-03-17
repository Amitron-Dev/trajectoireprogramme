function img () {
    basic.showIcon(IconNames.Square)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    img()
    basic.pause(200)
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()

def img():
    basic.show_icon(IconNames.SQUARE)

def on_logo_pressed():
    img()
    basic.pause(200)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    pass
basic.forever(on_forever)

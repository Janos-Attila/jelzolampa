let be_ki = false
input.onButtonPressed(Button.A, function () {
    be_ki = true
})
function LámpaCiklus () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
input.onButtonPressed(Button.B, function () {
    be_ki = false
})
function SárgánVillog () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    if (be_ki) {
        LámpaCiklus()
    } else {
        SárgánVillog()
    }
})

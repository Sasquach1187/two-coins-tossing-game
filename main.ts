input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    if (coin1 == "tails" && coin2 == "tails" || coin1 == " heads" && coin2 == " heads") {
        player1 += 1
        basic.showString("Player1=1")
        basic.showNumber(player1)
    } else {
        player2 += 1
        basic.showString("Player2=1")
        basic.showNumber(player2)
    }
})
let coin2 = ""
let coin1 = ""
let player2 = 0
let player1 = 0
player1 = 0
player2 = 0
coin1 = "tails"
coin2 = " heads"
basic.forever(function () {
	
})

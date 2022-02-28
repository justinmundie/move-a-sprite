input.onButtonPressed(Button.A, function () {
    Sprite_1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Sprite_1.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Sprite_1.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Sprite_1.move(1)
})
let Sprite_1: game.LedSprite = null
Sprite_1 = game.createSprite(2, 2)

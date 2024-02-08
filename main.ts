controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cube.setImage(assets.image`myImage`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cube.setImage(assets.image`myImage1`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cube.setImage(assets.image`myImage2`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cube.setImage(assets.image`myImage0`)
})
let Cube: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
Cube = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(Cube)
scene.cameraFollowSprite(Cube)

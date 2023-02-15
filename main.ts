namespace SpriteKind {
    export const Valentine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Rightdir == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Gun, 50, 0)
    } else if (Rightdir == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Gun, -50, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Valentine, function (sprite, otherSprite) {
    statusbar.setLabel("HP")
    sprites.destroy(Valentine, effects.disintegrate, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun.setImage(assets.image`Gun`)
    Rightdir = false
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Gun.setImage(assets.image`Gun2`)
    Rightdir = true
})
let Valentine: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let Rightdir = false
let Gun: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
Gun = sprites.create(assets.image`Gun`, SpriteKind.Player)
controller.moveSprite(Gun)
Gun.setBounceOnWall(true)
game.onUpdateInterval(2000, function () {
    Valentine = sprites.create(assets.image`Valentine`, SpriteKind.Enemy)
    Valentine.setBounceOnWall(true)
    statusbar = statusbars.create(15, 2, StatusBarKind.Health)
    statusbar.attachToSprite(Valentine)
})

class Bullets {

    constructor(ctx, playerPosX, playerPosY, bulletAngle, playerWidth, playerHeight) {

        this.ctx = ctx
        this.posX = playerPosX + playerWidth
        this.posY = playerPosY + playerHeight / 2
        this.bulletAngle = bulletAngle
        this.radius = 10

        this.velX = Math.cos(this.bulletAngle / 180 * Math.PI) * 12
        this.velY = Math.sin(this.bulletAngle / 180 * Math.PI) * 12
    }


    draw() {

        this.ctx.beginPath()
        this.ctx.fillStyle = "orange"
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }


    move() {

        this.posX += this.velX
        this.posY += this.velY

    }
}
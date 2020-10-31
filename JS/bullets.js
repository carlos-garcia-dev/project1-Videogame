class Bullets {

    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {

        this.ctx = ctx
        this.posX = playerPosX + playerWidth
        this.posY = playerPosY + playerHeight / 2

        this.radius = 10

        this.velX = 10;
        this.velY = 1;
    }


    draw() {

        this.ctx.beginPath()
        this.ctx.fillStyle = "orange"
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
        this.move()
    }


    move() {

        this.posX += this.velX
        this.posY += this.velY

        if (this.posY >= this.playerHeight) {
            this.velY += 1
        }
    }
}
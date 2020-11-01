class Enemie {
    constructor(ctx, gameW, gameH, enemyWidth, enemyHeight, enemySpeed) {
        this.ctx = ctx
        this.gameWidth = gameW
        this.gameHeight = gameH
        this.width = enemyWidth
        this.height = enemyHeight
        this.posX = undefined
        this.posY = undefined
        this.speed = enemySpeed
        this.init()
    }

    init() {
        this.posX = parseInt(Math.random() * this.gameWidth + 1)
        this.posY = parseInt(Math.random() * this.gameHeight + 1)
        console.log(this.gameWidth, this.gameHeight)

    }

    draw() {
        
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posX < this.gameWidth / 2 ? this.posX += this.speed : this.posX -= this.speed;
        this.posY < this.gameHeight / 2 ? this.posY += this.speed : this.posY -= this.speed

    }

}
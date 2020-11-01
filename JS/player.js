class Player {
    constructor(ctx, gameW, gameH, playerWidth, playerHeight, playerSpeed, keys) {
        this.ctx = ctx
        this.gameWidth = gameW
        this.gameHeigth = gameH
        this.width = playerWidth
        this.height = playerHeight
        this.speed = playerSpeed
        this.posX = this.gameWidth / 2 - this.width / 2
        this.posY = this.gameHeigth / 2 - this.height / 2
        this.keys = keys
        this.up = false
        this.down = false
        this.right = false
        this.left = false
        this.aimAngle = undefined
        this.bullets = []
        this.setListeners()
    }

    draw() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()


        this.bullets.forEach(bullet => {
            bullet.draw()
            bullet.move()
        })
        this.clearBullets()
    }

    move() {

        this.left ? this.posX -= this.speed : null
        this.right ? this.posX += this.speed : null
        this.down ? this.posY += this.speed : null
        this.up ? this.posY -= this.speed : null

        this.posX < 0 ? this.posX = 0 : null
        this.posX > this.gameWidth - this.width ? this.posX = this.gameWidth - this.width : null
        this.posY < 0 ? this.posY = 0 : null
        this.posY > this.gameHeigth - this.height ? this.posY = this.gameHeigth - this.height : null



    }

    setListeners() {

        document.addEventListener("mousemove", evt => {
            let mouseX = evt.clientX - document.getElementById('canvas').getBoundingClientRect().left
            let mouseY = evt.clientY - document.getElementById('canvas').getBoundingClientRect().top
            mouseX -= this.posX
            mouseY -= this.posY
            this.aimAngle = Math.atan2(mouseY, mouseX) / Math.PI * 180
        })

        document.onkeydown = evt => {
            evt.key === this.keys.left ? this.left = true : null
            evt.key === this.keys.up ? this.up = true : null
            evt.key === this.keys.down ? this.down = true : null
            evt.key === this.keys.right ? this.right = true : null

            // evt.key === this.keys.space ? this.shoot() : null
        }

        document.onkeyup = evt => {
            evt.key === this.keys.left ? this.left = false : null
            evt.key === this.keys.up ? this.up = false : null
            evt.key === this.keys.down ? this.down = false : null
            evt.key === this.keys.right ? this.right = false : null
        }

        document.onclick = evt => {
            this.shoot()
        }
    }


    shoot() {
        let bala = new Bullets(this.ctx, this.posX, this.posY, this.aimAngle, this.width, this.height)

        this.bullets.push(bala)

    }

    clearBullets() {

        this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth && bullet.posX >= 0 && bullet.posY >= 0 && bullet.posY <= this.gameHeigth)
        
    }


}
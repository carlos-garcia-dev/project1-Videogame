class Player {
    constructor(ctx, gameW, gameH, keys) {
        this.ctx = ctx
        this.gameWidth = gameW
        this.gameHeigth = gameH
        this.width = 40
        this.height = 40
        this.posX = this.gameWidth / 2 - 20
        this.posY = this.gameHeigth / 2 - 20
        this.keys = keys
        this.up = false
        this.down = false
        this.right = false
        this.left = false
        this.bullets = []
        this.setListeners()
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()


    }

    move() {

        this.left ? this.posX -= 15 : null
        this.right ? this.posX += 15 : null
        this.down ? this.posY += 20 : null
        this.up ? this.posY -= 20 : null


    }

    setListeners() {

        document.addEventListener("mousemove", evt => {
            let mouseX = evt.clientX
            let mouseY = evt.clientY
        })

        document.onkeydown = evt => {
            evt.key === this.keys.left ? this.left = true : null
            evt.key === this.keys.up ? this.up = true : null
            evt.key === this.keys.down ? this.down = true : null
            evt.key === this.keys.right ? this.right = true : null
        }

        document.onkeyup = evt => {
            evt.key === this.keys.left ? this.left = false : null
            evt.key === this.keys.up ? this.up = false : null
            evt.key === this.keys.down ? this.down = false : null
            evt.key === this.keys.right ? this.right = false : null

        }




    }
}
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
        this.bullets = []
        this.setListeners()
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)


    }

    move(dir) {

        dir === 'left' ? this.posX -= 20 : null
        dir === 'right' ? this.posX += 20 : null
        dir === 'up' ? this.posY -= 20 : null
        dir === 'down' ? this.posY += 20 : null


    }

    setListeners() {

        document.addEventListener("mousemove", evt => {
            let mouseX = evt.clientX
            let mouseY = evt.clientY
        })

        document.onkeydown = evt => {
            evt.key === this.keys.left ? this.move('left') : null
            evt.key === this.keys.up ? this.move('up') : null
            evt.key === this.keys.down ? this.move('down') : null
            evt.key === this.keys.right ? this.move('right') : null
        }


    }
}
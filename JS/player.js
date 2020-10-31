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

    setListeners() {

        document.addEventListener("mousemove", evt => {
            let mouseX = evt.clientX
            let mouseY = evt.clientY

            this.posX = mouseX
            this.posY = mouseY
            console.log('esta pillando el raton')
        })
        
    }
}
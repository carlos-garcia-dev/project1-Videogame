const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    enemies: [],
    keys: {
        UP: 87,
        LEFT: 65,
        DOWN: 83,
        RIGHT: 68


    },

    init() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.setDimension()
        this.start()
    },

    setDimension() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {

        this.reset()
        this.interval = setInterval(() => {

            this.clear()
            this.drawAll()


        }, 1000 / this.FPS)

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
    },

    drawAll() {
        
        this.background.draw()
        this.player.draw()
        // this.player.draw()
        // this.enemies.forEach(enemy => enemy.draw())
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },



}
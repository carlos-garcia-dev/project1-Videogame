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
        up: 'w',
        left: 'a',
        down: 's',
        right: 'd',
        space: ' '
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
            this.generateEnemies()
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++



        }, 1000 / this.FPS)


    },

    reset() {
        this.background = new Background(this.ctx, this.canvas.width, this.canvas.height)
        this.player = new Player(this.ctx, this.width, this.height, 30, 30, 5, this.keys)
        this.enemies = []
    },

    drawAll() {

        this.background.draw()
        this.player.draw()

        this.enemies.forEach(enemy => enemy.draw())
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    generateEnemies() {
        if (this.framesCounter % 90 === 0) {
            this.enemies.push(new Enemie(this.ctx, this.width, this.height, 40, 40, 4))
        }
    }
}


class Background  {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.posx = 0
        this.posy = 0
        
    }

    draw() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.posx,this.posy,this.width,this.height)
    }
}
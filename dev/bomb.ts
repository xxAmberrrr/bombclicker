/// <reference path="domObject.ts" />
  class Bomb extends DomObject{
        
    constructor(g:Game) {
        super(g, "bomb")

        this.element.addEventListener("click", (e:Event) => this.removeBomb(e))
        this.element.addEventListener("touchstart", (e:Event) => this.removeBomb(e))
        
        this.posy = 0
        this.posx = Math.floor(Math.random() * this.w)
    }

    public removeBomb(e:Event) {
        e.preventDefault()
        this.posy = -500
        this.game.scorePoint()
    }

    public checkWindowColBottom() {
        if(this.posy > this.h) {
            this.posy = 0
            this.posx = Math.floor(Math.random() * this.w)
            this.game.destroyBuilding()
        }
    }

    public update():void {
        this.posy += Math.floor(Math.random() * 5) + 0
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`

        this.checkWindowColBottom()
    }
}
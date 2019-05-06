/// <reference path="domObject.ts" />
class Car extends DomObject {
        
    constructor(g:Game) {
        super(g, "car")
        
        this.posx = 0
        this.posy = 700
    }

    public checkWindowColRight() {
        if(this.posx > this.w) {
            this.posx = Math.floor(Math.random() * 0) + -10
        }
    }

    public update():void {
        this.posx++
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`

        this.checkWindowColRight()
    }
}
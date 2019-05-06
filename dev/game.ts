class Game {
    
    private score:number = 0
    private destroyed:number = 0
    private textfield:HTMLElement
    private statusbar:HTMLElement
    private car:Car
    private bombs: Bomb[]

    constructor() {
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar = document.getElementsByTagName("bar")[0] as HTMLElement
        this.bombs = new Array

        this.bombs.push(new Bomb(this), new Bomb(this), new Bomb(this), new Bomb(this))

        this.car = new Car(this)
        this.car.element.addEventListener("click", (e:Event) => this.resetGame(e))
        this.car.element.addEventListener("touchstart", (e:Event) => this.resetGame(e))
        this.gameLoop()
    }

    private resetGame(e:Event) {
        e.preventDefault()

        this.destroyed = 0
        this.statusbar.style.backgroundPositionX = '0px'
        for(let i = 0; i < this.bombs.length; i++) {
            this.bombs[i].posy = -300
        }
        this.car.posx = 0
        this.score = 0
        this.textfield.innerHTML = "Score: " + this.score
        requestAnimationFrame(() => this.gameLoop())
    }
    
    private gameLoop():void{
        console.log("updating the game")
        //this.bomb.update()
        this.car.update()

        for(let i = 0; i < this.bombs.length; i++) {
            this.bombs[i].update()
        }

        if(this.destroyed < 4) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }

    public destroyBuilding(){
        this.destroyed ++
        let px = -72 * this.destroyed
        this.statusbar.style.backgroundPositionX = `${px}px`
        console.log("buildings destroyed " + this.destroyed)
    }
       
    public scorePoint() {
        this.score ++
        this.textfield.innerHTML = "Score: " + this.score
    }

} 

window.addEventListener("load", () => new Game())
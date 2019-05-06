class DomObject {
    public element:HTMLElement
    public game:Game
    public posx:number
    public posy:number
    public h = window.innerHeight
    public w = window.innerWidth

    constructor(g:Game, name:string) {
        this.game = g

        this.element = document.createElement(name)
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
    }
}
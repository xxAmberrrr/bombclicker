class Kart {

    private div:HTMLElement;
    private speed:number;
            
    constructor() {
        this.speed = 3;

        this.div = document.createElement("kart");
        document.body.appendChild(this.div);

        this.div.style.transform ="translate(200px,100px)";

        let m:Message = new Message();
        m.logMessage("Created a kart!");
    }
 
}
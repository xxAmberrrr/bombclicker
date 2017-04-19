class Kart {

    private div:HTMLElement;
            
    constructor() {
        this.div = document.createElement("kart");
        document.body.appendChild(this.div);

        this.div.style.transform ="translate(200px,100px)";

        let m:Message = new Message();
        m.logMessage("Created a kart!");
    }
 
}
/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {
    
    constructor() {
        let k:Kart = new Kart();
        let d:Driver = new Driver();
    }
    
} 


// load
window.addEventListener("load", function() {
    new Game();
});
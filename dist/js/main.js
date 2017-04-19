var Driver = (function () {
    function Driver() {
        this.div = document.createElement("driver");
        document.body.appendChild(this.div);
        this.div.style.transform = "translate(200px,100px)";
        var m = new Message();
        m.logMessage("Created a driver!");
    }
    return Driver;
}());
var Kart = (function () {
    function Kart() {
        this.div = document.createElement("kart");
        document.body.appendChild(this.div);
        this.div.style.transform = "translate(200px,100px)";
        var m = new Message();
        m.logMessage("Created a kart!");
    }
    return Kart;
}());
var Game = (function () {
    function Game() {
        var k = new Kart();
        var d = new Driver();
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.prototype.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
//# sourceMappingURL=main.js.map
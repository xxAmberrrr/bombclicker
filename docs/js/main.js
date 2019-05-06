"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomObject = (function () {
    function DomObject(g, name) {
        this.h = window.innerHeight;
        this.w = window.innerWidth;
        this.game = g;
        this.element = document.createElement(name);
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    }
    return DomObject;
}());
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(g) {
        var _this = _super.call(this, g, "bomb") || this;
        _this.element.addEventListener("click", function (e) { return _this.removeBomb(e); });
        _this.element.addEventListener("touchstart", function (e) { return _this.removeBomb(e); });
        _this.posy = 0;
        _this.posx = Math.floor(Math.random() * _this.w);
        return _this;
    }
    Bomb.prototype.removeBomb = function (e) {
        e.preventDefault();
        this.posy = -500;
        this.game.scorePoint();
    };
    Bomb.prototype.checkWindowColBottom = function () {
        if (this.posy > this.h) {
            this.posy = 0;
            this.posx = Math.floor(Math.random() * this.w);
            this.game.destroyBuilding();
        }
    };
    Bomb.prototype.update = function () {
        this.posy += Math.floor(Math.random() * 5) + 0;
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
        this.checkWindowColBottom();
    };
    return Bomb;
}(DomObject));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(g) {
        var _this = _super.call(this, g, "car") || this;
        _this.posx = 0;
        _this.posy = _this.h - 175;
        return _this;
    }
    Car.prototype.checkWindowColRight = function () {
        if (this.posx > this.w) {
            this.posx = Math.floor(Math.random() * 0) + -10;
        }
    };
    Car.prototype.update = function () {
        this.posx++;
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
        this.checkWindowColRight();
    };
    return Car;
}(DomObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.score = 0;
        this.destroyed = 0;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bombs = new Array;
        this.bombs.push(new Bomb(this), new Bomb(this), new Bomb(this), new Bomb(this));
        this.car = new Car(this);
        this.car.element.addEventListener("click", function (e) { return _this.resetGame(e); });
        this.car.element.addEventListener("touchstart", function (e) { return _this.resetGame(e); });
        this.gameLoop();
    }
    Game.prototype.resetGame = function (e) {
        var _this = this;
        e.preventDefault();
        this.destroyed = 0;
        this.statusbar.style.backgroundPositionX = '0px';
        for (var i = 0; i < this.bombs.length; i++) {
            this.bombs[i].posy = -300;
        }
        this.car.posx = 0;
        this.score = 0;
        this.textfield.innerHTML = "Score: " + this.score;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        console.log("updating the game");
        this.car.update();
        for (var i = 0; i < this.bombs.length; i++) {
            this.bombs[i].update();
        }
        if (this.destroyed < 4) {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Game.prototype.destroyBuilding = function () {
        this.destroyed++;
        var px = -72 * this.destroyed;
        this.statusbar.style.backgroundPositionX = px + "px";
        console.log("buildings destroyed " + this.destroyed);
    };
    Game.prototype.scorePoint = function () {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map
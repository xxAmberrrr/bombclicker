# PRG08-Week1-oefening1

## Herhaling OOP concepten
classes, encapsulation, composition, inheritance, interface, static, abstract

## Opdracht 1
- Maak een **abstract gameobject** class waar **kart** en **driver** van overerven
- Het gameobject krijgt via de constructor de juiste afbeelding
- Het gameobject plaatst een div in de body
- Maak de **message** class **static** en corrigeer alle aanroepen
- De kart **heeft** een driver

## Opdracht 2
- Voeg een game loop toe aan game.ts. Geef de kart een speed property. De game loop update de kart. 
- Laat de kart van links naar rechts rijden.
- Laat de driver mee bewegen met de kart

### Update de driver
Optie 1: Gebruik de DOM. Je plaatst de driver div BINNEN de kart div. Als de kart div verplaatst, verplaatst automatisch ook alle inhoud.
```
<kart>
    <driver></driver>
</kart>
```
Je kan dit bereiken door de appendChild functie een parent mee te geven:
```
let parent = document.body;
let k = document.createElement("kart");
parent.appendChild(k);
```
Optie 2: Vanuit kart roep je een move functie van de driver aan. De driver moet dan de positie van de kart ontvangen:
```
kart.ts
public move(){
    // kartx en karty bevatten de positie van de kart
    this.driver.move(kartx, karty);
}
```

## Voorbeeldcode

### Inheritance

```
class Vehicle {
    protected speed:number;
    constructor() {
        console.log("vroom!");
    );
}
/// <reference path="vehicle.ts"/>
class Car extends Vehicle {
    constructor() {
        super();
        this.speed = 4;
    }
}
```

### Interface

```
interface Vehicle {
    private fuel: number;
    public drive();
}
/// <reference path="vehicle.ts"/>
class Car implements Vehicle {
    private fuel: number = 4;
    public drive(){
    }
}
```

### Static

Classes in Typescript zijn niet static. Properties en methods kunnen wel static zijn.

```
class Calculator { 
    public static add(a :number, b :number) : number { 
       return a + b;
    } 
} 
let n : number = Calculator.add(3,4);
```

### Game Loop

```
class Game {

    private fish:Fish;

    constructor() {
        this.fish = new Fish();     
        requestAnimationFrame(() => this.gameLoop());
    }

    gameLoop(){
        this.fish.move();
        requestAnimationFrame(() => this.gameLoop());
    }
}
```

## Links
- [Instellen werkomgeving](https://github.com/HR-CMGT/PRG04-Week0)
- [Typescript Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Game Loop](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

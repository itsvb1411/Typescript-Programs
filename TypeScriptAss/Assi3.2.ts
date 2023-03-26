//Create a class Circle and and find radius

class Circle
{
    Radius : number
    PI : number = 3.14

    constructor(No : number)
    {
        this.Radius = No
    }

    Area() : number
    {
        let Ans = 0
        Ans = this.PI*this.Radius*this.Radius
        return Ans
    }
}

var No : number = 10
var Ret : number = 0

var Obj1 = new Circle(No)

Ret = Obj1.Area()
console.log("Area is : "+Ret)
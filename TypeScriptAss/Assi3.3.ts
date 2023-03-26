//Create a class Circle and and find radius

class Circle1
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

class CircleX extends Circle1
{
    constructor(Data : number)
    {
        super(Data)
    }
    Cirumference(): number
    {
        let Ans  = 0

        Ans = 2 * this.PI*this.Radius

        return Ans
    }
}

var No : number = 10
var Ret : number = 0

var Obj2 = new CircleX(No)

Ret = Obj2.Area()
console.log("Area is : "+Ret)

Ret = Obj2.Cirumference()
console.log("Circumference is : "+Ret)
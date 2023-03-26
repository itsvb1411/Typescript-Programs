//Create a typescript program in oop format which performs arithmatical operations 

class Arithmatic
{
    Number1 : number
    Number2 : number
    
    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1
        this.Number2 = No2
    }

    Addition() : number
    {
        let Ans = 0
        Ans = this.Number1 + this.Number2
        return Ans
    }

    Subtraction() : number
    {
        let Ans = 0
        Ans = this.Number1 - this.Number2
        return Ans
    }

    Multiplication() : number
    {
        let Ans = 0
        Ans = this.Number1 * this.Number2
        return Ans
    }

    Division() : number
    {
        let Ans = 0
        Ans = this.Number1 / this.Number2
        return Ans
    }
}

var No1 : number = 11
var No2 : number = 10
var Ret : number = 0

var Obj = new Arithmatic(No1, No2)

Ret = Obj.Addition()
console.log("Addition is : "+Ret)

Ret = Obj.Subtraction()
console.log("Subtraction is : "+Ret)

Ret = Obj.Multiplication()
console.log("Multiplication is : "+Ret)

Ret = Obj.Division()
console.log("Division is : "+Ret)
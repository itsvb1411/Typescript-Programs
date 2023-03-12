//Program to write the fibonacci series

function Fibonacci(No1 : number) : void
{
    var a : number = 1
    var b : number = 1
    var c : number = 0
    var iCnt : number = 0
    
    console.log(a)
    console.log(b)

    for(iCnt = 0; iCnt <=No1/4;iCnt++)
    {
        c = a+b
        console.log(c)

        a = b
        b = c
    }
}

var No1 = 21

Fibonacci(No1)
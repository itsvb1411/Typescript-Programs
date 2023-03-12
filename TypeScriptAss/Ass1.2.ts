// Program to find the area of circle
/*
 Input  : 5
 Output : Area of circle is 78.5

*/

function Area(No1 : number, Pi: number) : number
{
    let Area = 0

    Area = No1*No1*Pi

    return Area
}

var Radius : number = 5

var Pi : number = 3.14

var Ret = Area(Radius, Pi)

console.log("Area of circle is : "+Ret)

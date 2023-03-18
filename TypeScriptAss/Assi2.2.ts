//Write a function which accepts an array an return the summation of each number
/*
Input  : 23  6   7   4   5   7
Output : Addition is 52
*/

function Summation(Arr : number[]) :number
{
    let iCnt : number = 0
    let iSum : number = 0

    for(iCnt = 0; iCnt <Arr.length;iCnt++)
    {
        iSum = iSum+ Arr[iCnt]
    }
    return iSum
}

var arr : number[]= [23,6,7,4,5,7]

var Ret : number = 0

Ret = Summation(arr)

console.log("Addition is "+Ret)
//Write a program which accept array of numbers and return second largest number
/*
    Input : 23  89  6   29  56  45  77  32

    Output : Second maximum number is 77
*/

function Maximum(Arr : number[]) : number
{
    let iCnt : number = 0
    let iMax : number = Arr[iCnt]
    let SecondMax : number  = Arr[iCnt]

    for(iCnt = 0; iCnt < Arr.length;iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt]
        }
    }

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if((Arr[iCnt] > SecondMax) &&(Arr[iCnt] < iMax))
        {
            SecondMax = Arr[iCnt]
        }
    }

    return SecondMax
}

var Arr : number [] = [23, 89, 6, 29, 56, 45, 77, 32]
var Ret : number = 0

Ret = Maximum(Arr)

console.log("Second maximum number is "+Ret)
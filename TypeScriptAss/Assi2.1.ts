//Write a program which accept array and return a largest number from array
/*  
    Input : 23  89  6   29  56  45  77  32
    Output : Maximum number is 89
*/

function Maximum(Arr : number[]) : number
{
    var iCnt : number = 0
    var iMax : number = 0
    iMax = Arr[iCnt]
    for(iCnt = 0; iCnt < Arr.length;iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt]
        }
    }

    return iMax
}

var Arr : number[] = [23, 89, 6, 29, 56, 45, 77, 32]

var Ret : number = 0

Ret = Maximum( Arr)

console.log("Maximum number is "+Ret)
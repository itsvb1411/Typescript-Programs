//Write a function which accept a number and whether the number is amstrong or not
/*
    Input : 153
    Output : Its is amstrong number
*/
 
var ChkArmstrong = (iNo : number) :number =>
{
    let iCnt : number = 0
    let R : number = 0
    let iSum : number = 0

    while(iNo > 0)
    {
        R = iNo % 10;

        iSum = iSum + (R*R*R);

        iNo = Math.floor(iNo/10);
    }
   
    return iSum
    
}

var No : number = 153
var Ret =ChkArmstrong(No)

if( Ret == No)
    {
        console.log("It's armstrong number")
    }

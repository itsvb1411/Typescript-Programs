//Program to check the prime number

function ChkPrime(No1 : number):boolean
{
    var iCnt : number = 0
    var iFact : number = 0
    
    for(iCnt = 1; iCnt<No1;iCnt++)
    {
        if((No1%iCnt) == 0)
        {
            iFact++
        }
    }

    if(iFact > 1)
    {
        return false
    }
    else
    {
        return true
    }
}

var No1 :number = 11

var bRet : boolean = false

bRet = ChkPrime(No1)

if(bRet == true)
{
    console.log("It is prime number")
}
else
{
    console.log("Its not a prime number")
}
//Write the program to display the factors of the given number
/*
Input : 20

Output : 1  2   4   5   10

*/

function DisplayFactors(No : number):void
{
    var iCnt : number = 1
   
    
    for(iCnt = 1; iCnt<=No/2;iCnt++)
    {
        if((No%iCnt) == 0)
        {
            console.log(iCnt)
        }
    }
   
}

var No1 : number = 20;

DisplayFactors(No1)
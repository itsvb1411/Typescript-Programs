//Write a program to accept three paramenters and returns the largest of them
/* 
 Input : 23 89  6

 Output : Maximum number is 89

*/

function Maxmum(No1 : number, No2 : number, No3 : number):number
{
    if((No1 > No2) &&(No1>No2))
    {
        return No1;
    }

    else if((No2 > No1) &&(No2 > No3))
    {
        return No2;
    }
    else
    {
        return No3;
    }

}

var No1 : number = 23;

var No2 : number = 89;

var No3 : number = 6;

var Ret : number = 0;

Ret = Maxmum(23,89,6)

console.log("Maximum number is : "+Ret);


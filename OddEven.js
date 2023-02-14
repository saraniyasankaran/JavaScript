let num=prompt("Enter the Number :");
console.log(OddEven(num));
function OddEven(num)
{  
    let sum=0;
    while(num>0)
    {   
         
        rem=num%10;
         sum=sum+rem;
         num = Math.floor(num / 10);
    }

    if(sum%2==0)
    {
        return "Evenish";
    }
    else
    {
        return "Oddish";
    }
}

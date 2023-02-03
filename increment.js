function get(){
var startValue=document.getElementById("a").value;
var endValue=document.getElementById("b").value;
var store=document.getElementById("store1");

for (startValue=1;startValue<=endValue;startValue++)
{
    if (startValue%3==0)
    {
        console.log(startValue+" "+"Fizz");
        document.write("\n"+startValue+" "+"Fizz");
    }
    else if(startValue%5==0)
    {
        console.log(startValue+" "+"Buzz");
        document.write("\n"+startValue+" "+"Buzz"); 
    }
    else{
        console.log(startValue);
        document.write("\n"+startValue);
    }
}
}
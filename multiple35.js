function get()
{
    var startvalue=document.getElementById("strval").value;
    var add1=0;
    for(startvalue=0;startvalue<=1000;startvalue++)
    {
        if(startvalue%3==0 || startvalue%5==0)
        {
            add1 +=startvalue;
        }
        console.log(add1);
    }
}
function get()
{
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    if (a>b)
    {
        console.log("a is Greater");
    }
    else if (a<b)
    {
        console.log("b is greater");
    }
    else
    {
        console.log("The numbers are equal");
    }
}
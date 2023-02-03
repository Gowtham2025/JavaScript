function get()
{
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    if (a!=b)
    {
        alert("Password not matches");
    }
    else if ((a=="" || a==null)&&(b=="" || b==null))
    {
        alert("Please full the box");
    }
    else
    {
        alert("password matches");
    }
}
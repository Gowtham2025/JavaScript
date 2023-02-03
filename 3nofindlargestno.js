function get(a,b,c)
{
var a=document.getElementById("va1").value;
var b=document.getElementById("va2").value;
var c=document.getElementById("va3").value;
var spid=document.getElementById("spid");
if ((a>b)&&(a>c))
{
    spid.innerHTML="A is Greater";
}
else if (b>c)
{
    spid.innerHTML="B is Greater";
}
else
{
    spid.innerHTML="C is Greater";
}
}
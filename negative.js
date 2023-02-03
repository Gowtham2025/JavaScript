function get(){
var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
var c=document.getElementById("c").value;
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);

if (a>0 && b>0 && c>0)
{
    alert("The Sign is +");
}
else if (a<0 && b<0 && c<0)
{
    alert("The Sign is -");
}
}

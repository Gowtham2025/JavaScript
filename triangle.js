function triangle(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    var spid=document.getElementById("spid");
    if ((a==b)&&(b==c)&&(a==c))
    {
        spid.innerHTML="Equilateral triangle";
    }
    else if ( (a!=b) && (b!=c) && (a!=c) )
    {
        spid.innerHTML="Scalene triangle";

    }
    else
    {
        spid.innerHTML="Isosceles triangle";
    }
}
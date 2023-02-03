var a={
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png"
}
var img=document.getElementById("img");
img.src=a.imgsrc;
img.style.width="500px";



var c;
function restart()
{
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    var res=document.getElementById("res").value;
    var a=Math.ceil(Math.random()*10);
    num1.value=a;
    var b=Math.ceil(Math.random()*10);
    num2.value=b;
    c=a+b;
    res=" ";
}
restart();
function add()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res=document.getElementById("res").value;

    if (c==res)
    {
        alert("Good");
    }
    else{
        alert("Try With Another number");
    }
}

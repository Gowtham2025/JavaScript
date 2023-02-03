
function add(a,b){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var result=document.getElementById("result");
    a=parseInt(a);
    b=parseInt(b);
    var c=a+b;    
    result.value=c;
    result.innerHTML=c;
}

function sec(minutes){
var min=document.getElementById("minutes").value;
var sec=document.getElementById("seconds");
var c=min*60;
sec.value=c;
sec.innerHTML=c;
}
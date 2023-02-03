function getdata(){
    var firstName=document.getElementById("firstname").value;
var lastName=document.getElementById("lastname").value;
firstName.style.text-center;
document.write(firstName+lastName)
// var extraMsg=document.getElementById("divid");
extraMsg.innerText="Already avilable"+firstName; 
}

var image1=document.getElementById("imgid");
image1.src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
image1.className="img1";
 var index1=document.getElementById("int");
 index1.className="int1"
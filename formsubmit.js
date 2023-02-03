function getdata(){
    var userName=document.getElementById("name1").value;
    var eMail=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    var phNo=document.getElementById("number1").value;
    var lan=document.getElementById("opt").value;
    var zip=document.getElementById("zipcode").value;
    var abtme=document.getElementById("aboutme").value;

    var info1=document.getElementById("info");
    info1.innerHTML="Name:"+" "+userName+"<br>"+"Email"+" "+eMail+"<br>"+"PassWord:"+" "+psw+"<br>"+"Phone No:"+" "+phNo+"<br>"+
"<br>"+"Language:"+" "+lan+"<br>"+"Zip Code:"+" "+zip+"<br>"+"About Me"+" "+abtme;
    
}



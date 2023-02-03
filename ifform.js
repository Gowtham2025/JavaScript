function getdata(){
    var userName=document.getElementById("name1").value;
    var eMail=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    if (userName=="Gowtham" || eMail=="gowtham@gmail.com" && psw=="2025")
        {
            alert("Hi Welcome Back"+" "+userName);
        }
        else{
            alert("Invalid User")
        }
}
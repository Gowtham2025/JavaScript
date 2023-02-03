
    var userName=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password1").value;
    var suser=document.getElementById("spanuser");
    var semail=document.getElementById("spanemail");
    var spsw=document.getElementById("spanpsw");
    var spsw1=document.getElementById("spanpsw1");
function userbox(){
    var userName=document.getElementById("user").value;
    var userName1=document.getElementById("user");
    var suser=document.getElementById("spanuser");
    if (userName.length <= 3)
    {
        suser.innerText="*User Name must be between 3 to 25 characters.";
        suser.style.color="red";
        userName1.className="br1";
    }
    else if (userName.length <= 25)
    {
        suser.innerText="User Name must be between 3 to 25 characters.";
        suser.style.color="green";
        userName1.className="br2";
    }
    
}
function pswbox()
{
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password");
    var psw1=document.getElementById("password");
    var spsw=document.getElementById("spanpsw");
    if (psw.length <= 3)
   {
        spsw.innerText="*Password must be contain 3 to 12 character.";
        spsw.style.color="red";
        psw1.className="br1";
    }
    else if(psw.length <= 25)
    {
        spsw.innerText="Password Strong.";
        spsw.style.color="green";
        psw1.className="br2";
    }
}
function rpswbox()
{
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password1").value;
    var psw2=document.getElementById("password");
    var psw3=document.getElementById("password1");
    var spsw1=document.getElementById("spanpsw1");
    var spsw=document.getElementById("spanpsw");
    if (psw !== psw1)
   {
        spsw1.innerText="*Please Enter Matiching.";
        spsw1.style.color="red";
        psw3.className="br1";
    }
    else 
    {
        spsw1.innerText="Good.";
        spsw1.style.color="green";
        psw3.className="br2";
    }
}
function emailbox(){
    var email=document.getElementById("email").value;   
    var email1=document.getElementById("email");
    var semail=document.getElementById("spanemail");
    if (email=="" || email==null)
    {
        semail.innerText="*Required";
        semail.style.color="red";
        email1.className="br1";
    }
    else 
    {
        email1.className="br2";
    }
}
function getdata(){
    var userName=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password1").value;
    if ((userName==null || userName=="") && (email==null || email=="") && (psw==null || psw=="") && (psw1==null || psw1==""))
    {
        alert("Please Fill the Reqiured data");
    }
    
}

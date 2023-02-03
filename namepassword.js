    var userName=document.getElementById("user").value;
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password1").value;
    var suser=document.getElementById("spanuser");
    var spsw=document.getElementById("spanpsw");
    var spsw1=document.getElementById("spanpsw1");
function userbox(){
    var userName=document.getElementById("user").value;
    var userName1=document.getElementById("user");
    var suser=document.getElementById("spanuser");
    if (userName.length <= 6)
    {
        suser.innerText="*User Name must be between 6 to 25 characters.";
        suser.style.color="red";
        
    }
    else if (userName.length <= 25)
    {
        suser.innerText="User Name must be between 6 to 25 characters.";
        suser.style.color="green";
        
    }
    
}
function pswbox()
{
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password");
    var psw1=document.getElementById("password");
    var spsw=document.getElementById("spanpsw");
    if (psw.length <= 6)
   {
        spsw.innerText="*Password must be contain 6 to 12 character.";
        spsw.style.color="red";
        
    }
    else if(psw.length <= 12)
    {
        spsw.innerText="Password Strong.";
        spsw.style.color="green";
       
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
    if (psw != psw1)
   {
        spsw1.innerText="*Please Enter Matiching.";
        spsw1.style.color="red";
        
    }
    else 
    {
        spsw1.innerText="Good.";
        spsw1.style.color="green";
        
    }
}

function getdata(){
    var userName=document.getElementById("user").value;
    var psw=document.getElementById("password").value;
    var psw1=document.getElementById("password1").value;
    if ((userName==null || userName=="") || (psw==null || psw=="") || (psw1==null || psw1==""))
    {
        alert("Please Fill the Reqiured data");
    }
    
}

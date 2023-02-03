function getdata(){
var userName=document.getElementById("userName").value;
var email=document.getElementById("email").value;
var sp1=document.getElementById("spid1");
var sp2=document.getElementById("spid2");
userName=/^([a-zA-Z0-9_.])+$/
email=/^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/

function user1()
{
   
    if (userName=="")
    {
        alert("*Please fill the User Name");
        return false;
    }
    else if (!userName.test(userName))
    {
        alert("*Use the Correct User Name");
        return false;
    }
   
}    

    function email1()
    {
        if (email=="")
    {
       alert("*Please fill the Email");
        return false;
    }
    else if (!email.test(email))
    {
        alert("*Use the Correct Email");
        return false;
    }
    
    }
}
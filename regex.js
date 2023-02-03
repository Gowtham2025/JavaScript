function name1()
{
    var user=document.getElementById("user").value;
    var sp=document.getElementById("spid");
    reguser=/^([a-z A-Z])+$/
    if (reguser.test(user))
    {
        sp.innerHTML="Good";
        sp.style.color="green";
    }
    if(!reguser.test(user)){
        sp.innerHTML="Please use correct formate";
        sp.style.color="red";
    }
}
function pass()
{
    var psw=document.getElementById("psw").value;
    var sp=document.getElementById("spid");
    regpsw=/^([a-zA-Z.0-9])+$/;
    if (regpsw.test(psw))
    {
        sp.innerHTML="Good";
    }
    if (!regpsw.test(psw))
    {
        sp.innerHTML="Please fill valid password";
    }
}
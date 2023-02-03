function mob()
{
    var num=document.getElementById("num").value;
    var sp=document.getElementById("spid");
    regnum=/^([0-9]+$)/
    if (regnum.test(num))
    {
        sp.innerHTML="Correct";
    }
    if(!regnum.test(num))
    {
        sp.innerHTML="Please fill the mobile number";
    }
}
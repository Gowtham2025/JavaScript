function check()
{
    var user=document.getElementById("user").value;
    var age=document.getElementById("age").value;
    var flag=document.getElementById("flag");
    if (age>=18)
    {
        flag.value="Eligable to vote";
        flag.document.getElementById("flag").readonly='true';
    }
    else
    {
        flag.value="Not Eligable to vote";
        flag.document.getElementById("flag").readonly='false';
    }
}
function getgrade(){
    var mark=document.getElementById("mark").value;
    var spid=document.getElementById("spid");
    if (mark>90 && mark<=100)
    {
        spid.innerHTML="S Grade";
    }
    else if (mark>80 && mark<=90)
    {
        spid.innerHTML="A Grade";
    }
    else if (mark>70 && mark<=80)
    {
        spid.innerHTML="B Grade";
    }
    else if (mark>60 && mark<=70)
    {
        spid.innerHTML="C Grade";
    }
    else if (mark>50 && mark<=60)
    {
        spid.innerHTML="D Grade";
    }
    else if (mark>40 && mark<=50)
    {
        spid.innerHTML="E Grade";
    }
    else if (mark>0 && mark<=40)
    {
        spid.innerHTML="Fail Grade";
    }
    else
    {
        spid.innerHTML="Invalid Marks";
    }
}
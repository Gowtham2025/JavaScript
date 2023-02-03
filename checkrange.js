function get(){
    var srt=document.getElementById("stva").value;
    var end=document.getElementById("edva").value;
    var num1=document.getElementById("num1").value;
    var spid=document.getElementById("spid");
    if (srt<=num1 && end>=num1)
    {
        spid.innerHTML="Inside Range";
    }
    else
    {
        spid.innerHTML="Outside Range";
    }
}
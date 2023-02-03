function get(){
    var year=document.getElementById("year").value;
    var spid=document.getElementById("spid");
    if ((year%4==0) && (year%100!=0))
    {
        spid.innerHTML="Leap Year";
    }
    else if(year%400==0)
    {
        spid.innerHTML="Leap Year";
    }
    else
    {
        spid.innerHTML="Not a Leap Year";
    }

}
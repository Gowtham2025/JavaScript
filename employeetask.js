function cal()
{
    var user=document.getElementById("user").value;
    var emid=document.getElementById("emid").value;
    var role=document.getElementById("role").value;
    var pay=document.getElementById("pay").value;
    pay=parseInt(pay);
    var hra=document.getElementById("hra").value=pay*(15/100);
    var da=document.getElementById("da").value=pay*(10/100);
    var pf=document.getElementById("pf").value=pay*(5/100);
    hra=parseInt(hra);
    da=parseInt(da);
    pf=parseInt(pf);
    var net=document.getElementById("net").value=pay+hra+da+pf;
    net=parseInt(net);
    var gross=document.getElementById("gross").value=pay-pf;
}
function getdata()
{   
    var user=document.getElementById("user").value;
    var emid=document.getElementById("emid").value;
    var role=document.getElementById("role").value;
    var pay=document.getElementById("pay").value;
    var hra=document.getElementById("hra").value;
    var da=document.getElementById("da").value;
    var pf=document.getElementById("pf").value;
    var net=document.getElementById("net").value;
    var gross=document.getElementById("gross").value;
    var divid=document.getElementById("divid").innerHTML="User: "+user+"<br>"+"Employee Id: "+emid+"<br>"+"Designation: "+role+"<br>"+"Basic Pay: "+pay+"<br>"+"HRA: "+hra+"<br>"+"DA: "+da+"<br>"+"PF: "+pf+"<br>"+"Net Pay: "+net+"<br>"+"Gross Pay: "+gross+"<br>";
    
}
function use1()
{
    var user=document.getElementById("user").value;
    var emid=document.getElementById("emid").value;
    var role=document.getElementById("role").value;
    var sp1=document.getElementById("sp1");
    var sp2=document.getElementById("sp2");
    var sp3=document.getElementById("sp3");
    if(user=="")
    {
        sp1.innerHTML="*Please Fill the Box";
        sp1.style.color="Red"
    }
    else
    {
        sp1.innerHTML="";
    }

}
function emp1()
{
    var user=document.getElementById("user").value;
    var emid=document.getElementById("emid").value;
    var role=document.getElementById("role").value;
    var sp1=document.getElementById("sp1");
    var sp2=document.getElementById("sp2");
    var sp3=document.getElementById("sp3");
    if(emid=="")
    {
        sp2.innerHTML="*Please Fill the Box";
        sp2.style.color="Red"
    }
    else
    {
        sp2.innerHTML="";
    }

}

function get1()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
   
    var res=document.getElementById("res");
    
    var oper=document.getElementById("oper").value;
    oper=parseInt(oper);
    switch (oper)
    {
        case 1:
            var c=n1+n2;
            res.value="Sum Of two Number is "+c;
            
            break;
        case 2:
            var c=n1-n2;
            res.value="Subtraction Of two Number is "+c;
           
            break;
        case 3:
            var c=n1*n2;
            res.value="Multiplication Of two Number is "+c;
            
            break;
        case 4:
            var c=n1/n2;
            res.value="Division Of two Number is "+c;
           
            break;    
        case 5:
            var c=n1%n2;
            res.value="Moduls Of two Number is "+c;
            
            break;
        default:
            res.value="Invalid Operator";
    }
}
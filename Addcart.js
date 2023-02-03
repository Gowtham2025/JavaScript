function plus()
{
    var thg=document.getElementById("thg").value;
    var list1=document.getElementById("list1");
    let stock=thg;
    let list=document.createElement("li");
    list.textContent=stock;
    list1.appendChild(list);
    document.getElementById("thg").value="";
}
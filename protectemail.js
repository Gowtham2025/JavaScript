function user()
{
    var email="robin_singh@gmail.com";
    var a=email.split("@");
    a=email.substring(0,4);
    b=email.substring(12,25);
    var c="...@";
    var d=a.concat(c,b);
    console.log(d);
}
user();
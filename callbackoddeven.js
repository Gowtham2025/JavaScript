function even(a,callback)
{
    console.log(a%2==0?"true":"false");
    callback();
}
function odd(a)
{
    console.log(a%2!=0?"true":"false")
}
even(5,odd);
even(4,odd);
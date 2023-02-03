function user(a,callback)
{
    console.log(a,"!");
    callback();
}
function name1(a="Adrain"){
    console.log(a+"!!");
}
user ("Adrin",name1);
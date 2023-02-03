var a={
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Ravi",
    age: 25
}
var bg=document.getElementById("bg");
bg.style.backgroundColor="violet";
var img=document.getElementById("imgsrc");
img.src=a.imgsrc;
var head=document.getElementById("heading");
head.innerHTML=a.name;
var age=document.getElementById("age");
age.innerHTML=a.age;
var recipeobj=
{
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

var head=document.getElementById("head");
head.textContent=recipeobj.title;
head.style.color="red";
var img=document.getElementById("imgid");
img.src=recipeobj.imgSrc;
img.style.width="500px";
var ul=document.getElementById("ulid");

var ing=recipeobj.ingredients;
var e=" ";
for (var i=0;i<ing.length;i++){
    e+="<b>"+ing[i]+"<br>";
}
ul.innerHTML=e;

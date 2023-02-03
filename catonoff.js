function off(){
    var im1=document.getElementById("img1");
    var im2=document.getElementById("img2");
    im1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    im2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    im1.className="img1";
    im2.className="img2";
    var bg1=document.getElementById("off");
    var bg2=document.getElementById("on");
    bg1.style.backgroundColor="Red";
    bg2.style.backgroundColor="white";
}
function on(){
    var im1=document.getElementById("img1");
    var im2=document.getElementById("img2");
    var switch1=document.getElementById("switchstatus").innerHTML="Switch On";
    
    im1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    im2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    im1.className="img1";
    im2.className="img2";
    var bg1=document.getElementById("off");
    var bg2=document.getElementById("on");
    bg2.style.backgroundColor="green";
    bg1.style.backgroundColor="white";
}

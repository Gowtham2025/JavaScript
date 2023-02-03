// var name1=["suresh","ramesh","Ranga","vina","Rena"];
// var name2=[1,2,3,4,5];
// var name3=[]

// name4=name1.concat(name2);
// console.log(name4);

// var result = null;
// console.log(result);

// try {​
//     console.log('Hello');
//   } catch(err) {​
//     console.log('Goodbye');
//   }

// var x;

// if(x === null) {
//   console.log("null");
// } else if(x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }

// throw new Error();
// console.log("Hello");


// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())

function consoleStyler(color,background,fontSize,txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`+`background: ${background};`+`font-style ${fontSize}`;
   }
console.log(consoleStyler);
function celebrateStyler() {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday")
    {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions")
    {
        console.log(`%ccongrats on the title!`, fontStyle);
    }
    else
    {
        console.log(message, style);
    }
}
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
function styleAndCelebrate() {
    function styleAndCelebrate()
    {
        consoleStyler(color, background, fontSize, txt);
        celebrateStyler(reason);
    }
}



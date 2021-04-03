//const { brotliDecompressSync } = require("node:zlib");

var pnt=document.querySelector('.para');
console.log(pnt.parentNode);
pnt.parentNode.style.backgroundColor="darkblue";


var bttn=document.getElementById("btn").addEventListener('click',buttonClicked
)
function buttonClicked(e){
    e.preventDefault();
console.log("you did it")

}
var bb=document.getElementById("bb").addEventListener("mousemove",shifter2);

const newLocal = "boxy";
var boxy=document.getElementById(newLocal);

boxy.addEventListener('mousemove',shifter);

function shifter(e){
    boxy.style.backgroundColor="rgba("+e.offsetX+","
    +(e.offsetY+33)+", 225, 0.21)";

}
function shifter2(e){
    document.body.style.backgroundColor="rgba("+e.offsetX+","
    +e.offsetY+","+e.offsetX+","+"0.21)";

}

//itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('#message');
form.addEventListener('keydown',message)
function message(e){
   
    // this will capture 
    console.log(e.target.value);
}




// const Client =require('pg').Client

// const client = new Client({
//     user:"postgres",
//     password:"Monpost1",
//     port:5432,
//     database:"postgres"
// });

// client.connect()
// .then(()=>console.log("successful connection!"))
// .then()
// .catch(e=>console.log(e))
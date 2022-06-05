
const clickMe = document.getElementById("click");
const poke1 = document.getElementById("pokemon1");
const poke2 = document.getElementById("pokemon2");
const astonMartin = document.getElementById("car");
const want = document.getElementById("want");

setTimeout(function(){
  // this is what you want to do
  clickMe.style.display ="block";
}, 8000);


setTimeout(() => {
  setInterval(() => {
    clickMe.style.borderColor = "rgb(26, 68, 219)";
  }, 1000);
}, 500);


const firstInterval = setInterval(() => {
  clickMe.style.borderColor = "red";
}, 1000);

click.addEventListener("click", function(){
  newfunction();
  transition();
});


function newfunction(){
   clickMe.style.display ="none"
   poke1.style.display ="none";
   poke2.style.display ="none";
   
   document.getElementById("MPN").style.color ="white"
   document.body.style.backgroundColor ="black"
   want.style.color ="blue"
   want.innerHTML = "Now I want this Aston Martin!!!";
   want.style.fontSize = "50px";
}

const value = 0.1;
let opacity = 0;
let intervalCar = 0;

function transition() {
  car.style.display ="block";
  intervalCar = setInterval(() => {

    opacity = Number(window.getComputedStyle(astonMartin).getPropertyValue("opacity"));
    console.log(opacity);
    if(opacity >= 0){
      opacity = opacity + value;
      astonMartin.style.opacity = opacity;
    }
    else{
      clearInterval(intervalCar);
    }
    
}, 500)

}


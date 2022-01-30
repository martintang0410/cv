
const clickMe = document.getElementById("click");
const poke1 = document.getElementById("pokemon1");
const poke2 = document.getElementById("pokemon2");
const car = document.getElementById("car");
const want = document.getElementById("want");

click.addEventListener("click", function(){
  newfunction();
});

function newfunction(){
   clickMe.style.display ="none"
   poke1.style.display ="none";
   poke2.style.display ="none";
   car.style.display ="block";
   document.getElementById("MPN").style.color ="white"
   document.body.style.backgroundColor ="black"
   want.style.color ="blue"
   want.innerHTML = "I want this Aston Martin!!!";
   want.style.fontSize = "50px";
  
}

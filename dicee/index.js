var randomnumber1= Math.floor(Math.random()*6)+1;

var dicenumber="dice" + randomnumber1+".png";

var image1source="images/"+dicenumber;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image1source);

var randomnumber2=Math.floor(Math.random()*6)+1;

var dicenumber1="dice" +randomnumber2+".png";

var image2source="images/"+dicenumber1;

document.querySelectorAll("img")[1].setAttribute("src",image2source);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="🎈 player1 wins";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML="player2 wins 🎈";
}
else{
  document.querySelector("h1").innerHTML="DRAW😂";
}

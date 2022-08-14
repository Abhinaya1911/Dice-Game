var randomNumber= Math.random();
randomNumber=randomNumber*6;
randomNumber=Math.floor(randomNumber)+1;
var randomImage = "dice"+ randomNumber+ ".png";
var random = "images/"+randomImage;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",random);


var randomNumber2= Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomImage2 = "dice"+ randomNumber2+ ".png";
var random2 = "images/"+randomImage2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",random2);

if(randomNumber>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Both Player wins";
}

function refreshPage(){
    window.location.reload();
}

let diceno1=Math.floor((Math.random()*6)) +1;
let diceno2=Math.floor((Math.random()*6)) +1;

console.log(diceno1);

let randomimage1= "dice"+diceno1+".png";
let randomimage2= "dice"+diceno2+".png";

console.log(typeof randomimage1);



   
let pic1=document.querySelectorAll("img")[0];
pic1.setAttribute("src" , randomimage1);

let pic2=document.querySelectorAll("img")[1];
pic2.setAttribute("src" , randomimage2);

if(diceno1>diceno2)
{
    document.querySelector("h1").style.color="#780000";
    document.querySelector("h1").innerText="Player  1 wins!";
}
else if(diceno2>diceno1){
    document.querySelector("h1").style.color="#780000";
    document.querySelector("h1").innerText="Player 2 wins!";

}
else{
    document.querySelector("h1").innerText="Its tie!"
}



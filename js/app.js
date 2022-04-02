

let myLinks = document.getElementById("myLinks");
let myMenuLinks = document.getElementById("menu-links");

myLinks.onclick = function(){
    myMenuLinks.classList.toggle("menu");
}

for(let i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz\n");
    }
    else if(i % 3 == 0){
        console.log("Fizz\n");
    }
    else if(i % 5 == 0){
        console.log("Buzz\n");
    }
}
  
let myButton = document.getElementById("up");
window.onscroll = function () {
    if (pageYOffset > 600)
    {
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}
myButton.onclick = function () {
    window.scrollTo(0, 0);
}
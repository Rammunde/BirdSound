//alert("Play Sound")
document.querySelectorAll("#img1")[0].addEventListener("click",function(){
    var audio=new Audio("sounds/s1.mp3");
    audio.play();
});

document.querySelector("#img2").addEventListener("click",function(){
    var audio=new Audio("sounds/s2.mp3");
    audio.play();
});

document.querySelectorAll("img")[2].addEventListener("click",function(){
    var audio=new Audio("sounds/s3.mp3");
    audio.play();
});

document.querySelectorAll("img")[3].addEventListener("click",function(){
    var audio=new Audio("sounds/s4.mp3");
    audio.play();
});

document.querySelectorAll("img")[4].addEventListener("click",function(){
    var audio=new Audio("sounds/s5.mp3");
    audio.play();
});

document.querySelectorAll("img")[5].addEventListener("click",function(){
    var audio=new Audio("sounds/s6.mp3");
    audio.play();
});

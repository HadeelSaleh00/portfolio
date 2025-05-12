
let webbut = document.querySelector(".Web-but");
let graphicbut =document.querySelector(".graphic-but");
let UIbut = document.querySelector(".UI-but");
let projctselected = document.querySelectorAll(".projct-selected .box img");
// let projctselectedbox = document.querySelectorALL(".projct-selected .box");
let websection = document.querySelectorAll(".web-section .box img ");
let graphicsection = document.querySelectorAll(".graphic-section .box img");
let boxeslected = document.querySelectorAll(".projct-selected .box");
// console.log(boxeslected);
// console.log(websection, graphicsection)
webbut.onclick = _=>{
    for(let i =0 ; i<projctselected.length  ; i++ ){
        projctselected[i].src = websection[i].src
    }
    for(let x=0; x<boxeslected.length; x++){
        boxeslected[x].style.display="block";
    }
    document.getElementById("message").innerHTML = ""
}
graphicbut.onclick = _=>{
    for(let i =0 ; i<projctselected.length ; i++ ){
        projctselected[i].src = graphicsection[i].src;
    }
    for(let x=0; x<boxeslected.length; x++){
        boxeslected[x].style.display="block";
    }
    document.getElementById("message").innerHTML = ""
}
UIbut.onclick = _=>{
    for(let i =0 ; i<projctselected.length ; i++ ){
        projctselected[i].src ="";
    }
    for(let x=0; x<boxeslected.length; x++){
        boxeslected[x].style.display="none";
    }
 
    document.getElementById("message").innerHTML = "There are not projects  available yet"
}
let  upbtn = document.querySelector("#topbtn")  ; 
window.onscroll = function(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        upbtn.style.display="block"
    }
    else{
        upbtn.style.display="none"
    }
}
upbtn.onclick = _=>{
    window.scrollTo({top:0 , behavior:"smooth"});
}
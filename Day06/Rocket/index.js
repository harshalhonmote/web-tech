var topHeight=401;
var leftHeight=172;
setInterval(fly,60);
function fly(){
    debugger;
    var rocket = document.getElementById("rocket");
    
    if(topHeight >41 && leftHeight<772){
        topHeight=topHeight-20;
        rocket.style.top=topHeight+"px";
    }
    if(topHeight<=41  && leftHeight<772){
        leftHeight=leftHeight+20;
        rocket.style.left=leftHeight+"px";
        rocket.style.transform = 'rotate(90deg)';
    }
    if(leftHeight>=772){
        topHeight=topHeight+20;
        rocket.style.top=topHeight+"px";
        rocket.style.transform = 'rotate(180deg)';
    }
    if(topHeight>=400  && leftHeight<=772){
        rocket.style.display="none";
        document.getElementById("boom").style.visibility="visible";

    }
}
function reset(){
    window.location.href="index.html";
}
var topHeight=401;
var leftHeight=172;
var rocketRef1,rocketRef2;
var arr1=[];
var arr2=[];
function flyRocket1(){
    rocketRef1=setInterval(fly1,200);
    arr1.push(rocketRef1);
}
function flyRocket2(){
    rocketRef2=setInterval(fly2,200);
    arr2.push(rocketRef2);
}
function fly1(){
    debugger;
    var rocket1 = document.getElementById("rocket");
    
    if(topHeight >41){
        topHeight=topHeight-20;
        rocket1.style.top=topHeight+"px";
    }
    if(topHeight<=41  && leftHeight<1200){
        leftHeight=leftHeight+20;
        rocket1.style.left=leftHeight+"px";
        rocket1.style.transform = 'rotate(90deg)';
    }
    // if(leftHeight>=772){
    //     topHeight=topHeight+20;
    //     rocket.style.top=topHeight+"px";
    //     rocket.style.transform = 'rotate(180deg)';
    // }
    // if(topHeight>=400  && leftHeight<=772){
    //     rocket.style.display="none";
    //     document.getElementById("boom1").style.visibility="visible";

    // }
}
function reset1(){
    for(let i=0;i<arr1.length;++i){
        window.clearInterval(arr1[i]);
    }
}
// ---------------------------------------------------
var topHeight2=401;
var rightHeight2=1212;
var flag=0;
function fly2(){
    debugger;
    var rocket2 = document.getElementById("rocket2");
    
    if(topHeight2 >41){
        topHeight2=topHeight2-20;
        rocket2.style.top=topHeight2+"px";
    }
    if(topHeight2<=41  && rightHeight2>192){
        rightHeight2=rightHeight2-20;
        rocket2.style.left=rightHeight2+"px";
        rocket2.style.transform = 'rotate(-90deg)';
    }
    if(rightHeight2 <= leftHeight+100){
        document.getElementById("boom2").style.visibility="visible";
        for(let i=0;i<arr1.length;++i){
            window.clearInterval(arr1[i]);
        }
        for(let i=0;i<arr2.length;++i){
            window.clearInterval(arr2[i]);
        }
    }
    // if(leftHeight>=772){
    //     topHeight=topHeight+20;
    //     rocket.style.top=topHeight+"px";
    //     rocket.style.transform = 'rotate(180deg)';
    // }
    // if(topHeight>=400  && leftHeight<=772){
    //     rocket.style.display="none";
    //     document.getElementById("boom2").style.visibility="visible";

    // }
}
function reset2(){
    for(let i=0;i<arr2.length;++i){
        window.clearInterval(arr2[i]);
    }
}
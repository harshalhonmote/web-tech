var Attempts=3;
var flag=0;
var rand = Math.floor(Math.random()*10);
function change(no){
    var ref = document.getElementById(no);
    // ref.style.pointerEvents="none";
    ref.onclick="null";
    
    var atm = document.getElementById("Attempts");
    var showmsg = document.getElementById("showmsg");
    atm.innerText=Attempts-1;

    ref.style.backgroundColor="#ff0e3a";
    if(no == rand)flag=1;
    else{
         Attempts=Attempts-1;
        if(Attempts==0)flag=2;
    } 

    if(flag!=0){
        var btn = document.getElementById("btn");
        var block = document.getElementsByClassName("smallBox");
        for(let j=0;j<block.length;++j){
            block[j].onclick="null";
        }
        if(flag==1){
            ref.style.backgroundColor="#ffcd3d";
            showmsg.innerText="YOU WIN";
            showmsg.style.color="Green";
        }
        else{
            showmsg.innerText="BETTER LUCK NEXT TIME";
            showmsg.style.color="#E95B5B";
        }
        btn.style.backgroundColor="green"
    } 
}
function reset(){
    window.location.href="index.html";
}
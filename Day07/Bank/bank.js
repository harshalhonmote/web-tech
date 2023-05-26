var time=15;
var totalAmt=1000;
var intervalObj;
var timeremRef=document.getElementById("timerem");
intervalObj= window.setInterval(timer,1000);
function bank(){
    intervalObj= window.setInterval(timer,1000);
    var amtRef = document.getElementById("amt");
    var totalRef = document.getElementById("total");
    var errbankmsg = document.getElementById("bankmsg");
    var debitAmt =parseInt(amtRef.value);
    if(amtRef.value!=""){
        if(totalAmt<debitAmt){
            errbankmsg.innerText="Balance is Not sufficient !!"
            errbankmsg.style.backgroundColor="red";
        }
        else{
            errbankmsg.innerText="";
            totalAmt=totalAmt-debitAmt;
            totalRef.innerText=totalAmt;
            window.clearInterval(intervalObj);
        } 
    }else{
        errbankmsg.innerText="Please Enter Ammount"
        errbankmsg.style.backgroundColor="red";
    }

}
function timer(){
   time=time-1;
   console.log(time);
   timeremRef.innerText=time;
   if(time<=0){
    window.clearInterval(intervalObj);
    window.location.href="index.html";
 }
}
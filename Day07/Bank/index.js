
function valid(){
    var user = document.getElementById("input1");
    var pass = document.getElementById("input2");
    var errmsg = document.getElementById("showmsg");
    if(user.value =="" || pass.value==""){
         errmsg.innerText="please fill info"
    }
    else{
        errmsg.innerText="";
        if(user.value =="Harsh" && pass.value=="1234"){
            window.location.href="bank.html";
        }
    }
}

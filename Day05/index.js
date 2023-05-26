function Add(){
    var a = document.getElementById("input1");
    var b = document.getElementById("input2");
    
    if(a.value==""){
        document.getElementById("p1").innerText="please enter value";
    }
    if(b.value==""){
        document.getElementById("p2").innerText="please enter value";
    }
   
    var c= parseInt(a.value)+parseInt(b.value);
   
   if(a.value!="" && b.value!=""){
    document.getElementById("p1").innerText="";
    document.getElementById("p2").innerText="";
    }
    var r = document.getElementById("result");
    r.innerText=c;
}
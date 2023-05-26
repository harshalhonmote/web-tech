//Hoisting

var log=console.log;

//log(v);
var v=10;//var ->Hoisted and assigned "undefined" AND at this line it assigned to "10".

//log(k);//ReferenceError: Cannot access 'k' before initialization 
       //->k is Hoisted but 'not' assigned "undefined" -Deadzone.
let k;//"undefined" Assigned at this line.

//f1();//Hoisted at top with defination.
function f1(){
    log("F1");
}

//vv();//vv is not a function -->at this line vv-"undefined"
var vv = function(){ //at this line vv is assigned to function.
    log("VV");
}

function print1(){
    x=200 //global variable
    var p=10;
    let q=100;
    // log(p);
    // log(q);
    function inner(){
        log(p);//10
        log(q);//100
    }
    inner();
}
//print1();
//log(p);//ReferenceError: p is not defined
// log(q);//ReferenceError: q is not defined

function print2(){
   var p=10000;
    {
        var p=101;//scope
        let q=100;//scope
    }
    log(p);//ReferenceError: p is not defined
    //log(q);//ReferenceError: q is not defined
}
print2();


function addTodo(){
    var inputRef = document.getElementById("itodo");
    var addRef = document.getElementById("addTodo");

    if(inputRef.value !=""){
        addRef.innerHTML=addRef.innerHTML+`<h2 style="background-color: rgb(13, 85, 256);width:40%;border-radius:5px;">${inputRef.value}</h2>`;
        inputRef.value="";
    }
    
}
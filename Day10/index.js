var itemArr=[];

function loadItem() {
    //debugger;
  var menuref = document.getElementById("menu");
  fetch("http://127.0.0.1:5500/Day09/item.json")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((item) => {
       // debugger;
        itemArr.push(item);
        console.log(itemArr[0]);
        var pi =  `<div class="item">
        <img src="${item.photo}">
        <div id="priceName">Price :${item.price} &#8377</div>
        <br>
        <button class="addToCart" onClick="addToCart(${item.id})">ADD To Cart</button>
        </div>`;
        menuref.innerHTML = menuref.innerHTML + pi;
      });
    });
}
const presentItemSet = new Set();
function addToCart(id){
   // debugger;
    var flag=0;
        if (presentItemSet.has(id)) {
          flag=1;
        }
      if(flag==0){
        presentItemSet.add(id);
        id = id-1;
    var cartRef = document.getElementById("cart");
    var row=` <div id="cartRow">
    <div>${itemArr[id].id}</div>
    <div>${itemArr[id].itemName}</div>
    <div>${itemArr[id].price}</div>
    <div>
        <button id="qty" onclick="addQty(${itemArr[id].id})">+</button>
        <span id="${itemArr[id].id}">1</span>
        <button id="qty" onclick="minsQty(${itemArr[id].id})">-</button>
    </div>
    <div id="${itemArr[id].id}sub">${itemArr[id].price}</div>
</div>`
cartRef.innerHTML=cartRef.innerHTML+row;
var totalRef = document.getElementById("total");
totalRef.innerText=parseInt(totalRef.innerText)+itemArr[id].price;
      }
}
function addQty(rowId){
    debugger;
    var rowRef = document.getElementById(rowId);
    rowRef.innerText = parseInt(rowRef.innerText)+1; 

    var subTotalRef = document.getElementById(rowId+"sub");
    subTotalRef.innerText=parseInt(subTotalRef.innerText)+itemArr[rowId-1].price;

    total(itemArr[rowId-1].price,"add");
}
function minsQty(rowId){
    debugger;
    var rowRef = document.getElementById(rowId);
    var currentQtyValue = parseInt(rowRef.innerText)-1; 
    rowRef.innerText = currentQtyValue; 

    var subTotalRef = document.getElementById(rowId+"sub");
    if(currentQtyValue ==0){
        presentItemSet.delete(rowId);
        rowRef.parentElement.parentElement.remove();
    }
    else{
        subTotalRef.innerText=parseInt(subTotalRef.innerText)-itemArr[rowId-1].price;
    }
    total(itemArr[rowId-1].price,"sub");
}

function total(subTotalRef,status){
    var totalRef = document.getElementById("total");
   if(status =="add"){
    totalRef.innerText=parseInt(totalRef.innerText)+subTotalRef;
   }
   else{
    totalRef.innerText=parseInt(totalRef.innerText)-subTotalRef;
   }
}
function pay(){
    var totalRef = document.getElementById("total");
    if(totalRef.innerText == "0"){

    }else{
        alert(" ✅YOU ARE ABOUT TO PAY "+totalRef.innerText +"₹");
    }
    
}

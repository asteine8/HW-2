
var Output = function() {
   for (var i = 0; i < arr.length; i = i + 1){
       a[i].innerHTML = arr[i];
   }
   for (var j = arr.length; j < a.length; j++) {
       a[j].innerHTML = "";
   }
}

var RunPush = function() {
    console.log("push");
    if (arr.length == maxN){
        alert ("Error: Stack Overflow");
    }
    else {
        arr.push(PushInputField.value);
    }
    Output();
 }
 
 var RunPop = function() {
    console.log("pop");
    let n = arr.pop();
    if (typeof(n) == "undefined")
    {alert ("Error: Undefined, Empty Stack");}
    Output();
 }
// arr.pop
//     return false;
//         alert("Undefined, Empty Stack")


var arr = new Array();
var maxN = 10;
var PushInputField = document.getElementById("PushInputField");
var a = document.getElementsByClassName("Stack");
var Push = document.getElementById("Push");
var Pop = document.getElementById("Pop");
Push.addEventListener("click", RunPush);
Pop.addEventListener("click", RunPop);
console.log("init");
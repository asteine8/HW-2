
var InputA = document.getElementById("InputA");
var InputB = document.getElementById("InputB");
var button = document.getElementById("Button");

var outputDiv = document.getElementById("Footer");

button.addEventListener("click", Run); 

var Run = function() {
    var result = RussianPM(InputA.value,InputB.value);

    outputDiv.innerHTML = "<p>" + result + "</p>";
}

var RussianPM = function(A , B) {
    // Sorter block

    if (A < B) {
        // alert("A is less than B, pick a number larger than B for A");
        // return NaN;
        let C = A;
        A = B;
        B = C;
    }

    let total = 0;

    while (B > 1) {
        if (B%2 == 1) {
            total += A;
        }
        A = A * 2;
        B = Math.floor(B / 2);
    }
    total = total + A;

    return total;
}

var myArray = new Array(10);


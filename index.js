// Tìm số nguyên dương nhỏ nhất



function ex1() {

    var n ;
    var sum = 0;

    for (var i = 0 ; sum <= 10000 ; i++) {
    n = i;
    sum += i;
    
}

console.log(n)

document.getElementById("bai1").innerHTML = n;
}



// Tính tổng 


function ex2() {
  var x = document.getElementById("x").value ;
  var n = document.getElementById("n").value ;
var sumx = 0;
   

     for(var i = 1 ; i <= n  ; i++ ) {
        y = x**i;
        sumx += y;
     }

     document.getElementById("bai2").innerHTML = sumx;
}

// Bài 3 

function ex3() {
    var n = document.getElementById("giaiThua").value;

    var x = 1 ;

    for (var i = 1;i <= n ; i++) {
        
        x *= i;
    }

    document.getElementById("bai3").innerHTML = x;
}

// Bài 4

function ex4() {

    var addDiv = document.getElementById("addDiv");
    var showDiv = "";

    for(var i = 1; i < 10 ; i++ ) {
        if (i % 2 === 0 ) {
            showDiv += `<div class="addDiv" style="background-color:red; display: block;"> 
            <p>Div Chẵn</p></div>`
        } else {
            showDiv += `<div class="addDiv" style="background-color:blue; display: block;" ><p> Div Lẻ</p></div>`
        }

    }
    addDiv.innerHTML = showDiv;
    addDiv.style.display = "block";
}
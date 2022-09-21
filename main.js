
let add = document.getElementById("add");
let dataEle={};


function valueadd(){
    let numberEle = document.getElementById("number");
    let nameEle = document.getElementById("fname");
    let ageEle = document.getElementById("age");

    number = numberEle.value;
    fname = nameEle.value;
    age = ageEle.value;

    console.log(valueadd);
}

add.addEventListener("click",valueadd);



let table = document.getElementById("table");
let tablerow = document.getElementById("tablerow");
let tablehead = document.getElementById("tablehead");
let tabledown = document.getElementById("tabledown");
let edits = document.getElementById("edits");
let deletes = document.getElementById("deletes");



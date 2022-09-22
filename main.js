let add = document.getElementById("add");
let numberEle = document.getElementById("number");
let nameEle = document.getElementById("fname");
let ageEle = document.getElementById("age");


let fun = function(){
  if(numberEle!==""){
    let table = document.getElementById("table"); 
    let tablerow = document.getElementById("tablerow");
    
    let r = table.insertRow(table.length);
    let cell1 = r.insertCell(0);
    let cell2 = r.insertCell(1);
    let cell3 = r.insertCell(2);
    let cell4 = r.insertCell(3);
    let cell5 = r.insertCell(4);


    cell1.innerText = numberEle.value;
    cell2.innerText = nameEle.value;
    cell3.innerText = ageEle.value;

    
    numberEle.value = "";
    nameEle.value = "";
    ageEle.value = "";

   
    let editEle = document.createElement("button");
    editEle.innerText = "Edits";
    cell4.appendChild(editEle);


    let deleteEle = document.createElement("button");
    deleteEle.innerText = "Delete";
    cell4.appendChild(deleteEle);

    function editesEle(){

        numberEle.value = cell1.innerText;
        nameEle.value = cell2.innerText;
        ageEle.value = cell3.innerText;
    
    }
    editEle.addEventListener("click",function(){
          editesEle();


    });
    deleteEle.addEventListener("click",function(){
        let what=this.parentNode.parentNode;
        let tables=what.parentNode;
        tables.removeChild(what);
  });


  }
}

add.addEventListener("click",function(){
    fun();


});







     












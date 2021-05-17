//Hyobin Im - 991526068

function saveToLS(){
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("products", document.getElementById("products").value);
    localStorage.setItem("quantity", document.getElementById("quantity").value);
    localStorage.setItem("price", document.getElementById("price").value);
}

function valName(){
    let name = document.getElementById("name");
    let strRegex = /^[a-zA-Z_ ]+$/;
    if (name.value == ""){
        alert("Please Enter Name");
        return false;
    } else if (!strRegex.test(name.value)){
        alert("Please Enter Valid Name");
        return false;
    } else {
        return true;
    }
}

function valQuantity(){
    if (document.getElementById("quantity").value < 1){
        alert("Please Enter Valid Quantity");
        return false;
    } else {
        return true;
    }
}

function valEmail(){
    let email = document.getElementById("email");
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email.value)){
        alert("Please Enter Valid Email");
        return false;
    } else {
        return true;
    }
}

function createQuote(){
    if (valName() == true && valQuantity() == true && valEmail() == true){
        saveToLS();
        location.assign('./pages/index.html');
    } else{
        return;
    }
}

function loadQuote(){

    let p = localStorage.getItem("price");
    let q = localStorage.getItem("quantity");

    document.getElementById("outName").innerHTML += localStorage.getItem("name");
    document.getElementById("outEmail").innerHTML += localStorage.getItem("email");
    document.getElementById("outProduct").innerHTML += localStorage.getItem("products");
    document.getElementById("outQuantity").innerHTML += q;
    document.getElementById("outPrice").innerHTML += p;

    let total = p * q;
    document.getElementById("outTotal").innerHTML += total;
}


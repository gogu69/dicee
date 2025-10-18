let a = null;
let b = null;
const sub = document.querySelector(".sub");

function aruncZa() {
    a = Math.trunc((Math.random()*6)+1);
    return a;
}

function aruncZb() {
    b = Math.trunc((Math.random()*6)+1);
    return b;
}

function mesaj() {
    let mesaj = "";
    if (a < b) {
        mesaj = "A castigat jucatorul B";
        // sub.classList.remove("zarA-color", "egalitate-color");
        // sub.classList.add("zarB-color");
        
    }
    else if (a > b){
        mesaj = "A castigat jucatorul A";
        // sub.classList.remove("zarB-color","egalitate-color");
        // sub.classList.add("zarA-color");
    } 
    else {
        mesaj = "Egalitate!";
        // sub.classList.remove("zarA-color", "zarB-color");
        // sub.classList.add("egalitate-color");
    }

    return mesaj;
}

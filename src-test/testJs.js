let a;
let b;

function arunca() {
    a = Math.trunc((Math.random()*6)+1);
    b = Math.trunc((Math.random()*6)+1);
    return {a,b};
}

function mesaj() {

    let mesaj = "";
    if (a < b) {
        mesaj = "A castigat jucatorul B";
    }
    else if (a > b){
        mesaj = "A castigat jucatorul A";
    } 
    else {
        mesaj = "Egalitate!";
    }
    return mesaj;
}
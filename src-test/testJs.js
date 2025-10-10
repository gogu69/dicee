function zarA() {
    let randNa = Math.trunc((Math.random()*6)+1);
    return randNa;
}
function zarB() {
    let randNb = Math.trunc((Math.random()*6)+1);
    return randNb;
}

function mesaj() {
    let a = zarA();
    let b = zarB();
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
console.log(mesaj());
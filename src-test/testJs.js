// function joc(){

let a;
let b;
const sub = document.querySelector(".sub");

function arunca() {
    a = Math.trunc((Math.random()*6)+1);
    b = Math.trunc((Math.random()*6)+1);
    return {a,b};
}

function mesaj() {
    let mesaj = "";
    if (a < b) {
        mesaj = "A castigat jucatorul B";
        sub.classList.remove("zarA-color", "egalitate-color");
        sub.classList.add("zarB-color");
        
    }
    else if (a > b){
        mesaj = "A castigat jucatorul A";
        sub.classList.remove("zarB-color","egalitate-color");
        sub.classList.add("zarA-color");
    } 
    else {
        mesaj = "Egalitate!";
        sub.classList.remove("zarA-color", "zarB-color");
        sub.classList.add("egalitate-color");
    }

    return mesaj;
}

function animatieZaruri() {
  const zarA = document.querySelector(".zarA");
  const zarB = document.querySelector(".zarB");

  zarA.classList.add("animate");
  zarB.classList.add("animate");

  // Elimină clasa după animație
  setTimeout(() => {
    zarA.classList.remove("animate");
    zarB.classList.remove("animate");
  }, 500);
}

// }
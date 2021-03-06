const inpNaam = document.querySelector('#inpNaam')
const inpBod = document.querySelector('#inpBod')
const btn = document.querySelector('#btnBod')
const lbl = document.querySelector('#message')


let hoogsteBod = 0;
let hoogsteBieder = null;

btn.addEventListener('click', function () {

    let bod = inpBod.value;
    let naam = inpNaam.value;

    if (bod > hoogsteBod) {
        lbl.innerHTML = `Gefeliciteerd! je hebt momenteel het hoogste bod`;
        hoogsteBieder = naam;
        hoogsteBod = bod;
    } else {
        lbl.innerHTML = `Jammer! ${hoogsteBieder} heeft een hoger bod`;
    }

})
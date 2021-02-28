const naam = document.querySelector('#inpNaam')
const bod = document.querySelector('#inpBod')
const btn = document.querySelector('#btnBod')
const lbl = document.querySelector('#message')


let oudebod = bod;
let nieuwebod = bod;
let momentnaam = naam;

btn.addEventListener('click', function(){

    if (bod > 0 ) {
        lbl = `Gefeleciteerd! je hebt momenteel het hoogste bod`;
        
    } else {
        text = `jammer! ${momentnaam} heeft een hoger bod`;
        lbl = text;
    }

})


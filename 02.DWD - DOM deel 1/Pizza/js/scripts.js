const button1 = document.querySelector('#pizza1')
const button2 = document.querySelector('#pizza2')
const button3 = document.querySelector('#pizza3')
const lbl = document.querySelector('#keuze')
const image = document.querySelector('#image')


button1.addEventListener('click', function(){

    lbl.innerHTML = `Je keuze: hot & spicy`;
    image.src = "/img/hawai.png"
});

button2.addEventListener('click', function(){

    lbl.innerHTML = `Je keuze: 4 seizoenen`;
    image.src = "/img/seizoenen.png"
});

button3.addEventListener('click', function(){

    lbl.innerHTML = `Je keuze: hawai`;
    image.src = "/img/spicy.png"
});
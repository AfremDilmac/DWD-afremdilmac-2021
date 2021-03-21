const txtSize = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');
const image = document.querySelector('#img');
const btnBlur = document.querySelector('#btnB');
const btnConstrast = document.querySelector('#btnC');
const btnGrayscale = document.querySelector('#btnG');
const btnHue = document.querySelector('#btnH');
const btnDrop = document.querySelector('#btnD');
const btnClear = document.querySelector('#btnClear');

document.title = 'Filter oefening';

sldSize.addEventListener('click', function () {
    txtSize.innerHTML = sldSize.value + '%';
    let opacity = sldSize.value / 100;
    img.style.opacity = opacity;
});


btnBlur.addEventListener('click', function(){
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    image.classList.add('blur');

});

btnConstrast.addEventListener('click', function(){
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    image.classList.add('contrast');
});

btnGrayscale.addEventListener('click', function(){
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('contrast');
    image.classList.add('grayscale');
});

btnHue.addEventListener('click', function(){
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    image.classList.add('hue');
});

btnDrop.addEventListener('click', function(){
    image.classList.remove('blur');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    image.classList.add('drop');
});

btnClear.addEventListener('click', function(){
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    image.classList.remove('hue');
});
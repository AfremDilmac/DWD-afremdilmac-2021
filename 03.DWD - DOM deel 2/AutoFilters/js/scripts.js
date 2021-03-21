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
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    btnBlur.classList.add('current');
    image.classList.add('blur');

});

btnConstrast.addEventListener('click', function(){
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    btnConstrast.classList.add('current');
    image.classList.add('contrast');
});

btnGrayscale.addEventListener('click', function(){
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('hue');
    image.classList.remove('contrast');
    btnGrayscale.classList.add('current');
    image.classList.add('grayscale');
});

btnHue.addEventListener('click', function(){
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    btnHue.classList.add('current');
    image.classList.add('hue');
});

btnDrop.addEventListener('click', function(){
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('blur');
    image.classList.remove('hue');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    btnDrop.classList.add('current');
    image.classList.add('drop');
});

btnClear.addEventListener('click', function(){
    btnBlur.classList.remove('current');
    btnConstrast.classList.remove('current');
    btnGrayscale.classList.remove('current');
    btnDrop.classList.remove('current');
    btnHue.classList.remove('current');
    image.classList.remove('blur');
    image.classList.remove('drop');
    image.classList.remove('grayscale');
    image.classList.remove('contrast');
    image.classList.remove('hue');
});
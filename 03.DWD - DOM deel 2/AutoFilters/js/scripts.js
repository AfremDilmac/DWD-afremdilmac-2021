const txtSize = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');
const image = document.querySelector('#img');
const btnBlur = document.querySelector('#btnB');
const btnConstrast = document.querySelector('#btnC');
const btnGrayscale = document.querySelector('#btnG');
const btnHue = document.querySelector('#btnH');
const btnDrop = document.querySelector('#btnD');
const btnClear = document.querySelector('#btnClear');
const buttons = document.querySelectorAll('#buttons button'); 

document.title = 'Filter oefening';

sldSize.addEventListener('click', function () {
    txtSize.innerHTML = sldSize.value + '%';
    let opacity = sldSize.value / 100;
    img.style.opacity = opacity;
});

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelector('.current').classList.remove('current');
        btn.classList.add('current');
    });
});

btnBlur.addEventListener('click', function(){
    image.classList.remove('drop', 'hue', 'grayscale', 'contrast',);
    image.classList.add('blur');
});

btnConstrast.addEventListener('click', function(){
    image.classList.remove('grayscale', 'blur', 'drop', 'hue');
    image.classList.add('contrast');
});

btnGrayscale.addEventListener('click', function(){
    image.classList.remove('blur', 'drop', 'hue', 'contrast');
    image.classList.add('grayscale');
});

btnHue.addEventListener('click', function(){
    image.classList.remove('contrast', 'blur', 'drop', 'grayscale');
    image.classList.add('hue');
});

btnDrop.addEventListener('click', function(){
    image.classList.remove('contrast', 'blur', 'hue', 'grayscale');
    image.classList.add('drop');
});

btnClear.addEventListener('click', function(){
    image.classList.remove('hue', 'contrast', 'grayscale', 'drop', 'blur');
});
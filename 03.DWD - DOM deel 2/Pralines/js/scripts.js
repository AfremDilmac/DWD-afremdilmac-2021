const images = document.querySelectorAll('#images div');
const naam = document.querySelector('#naam');
const calorieen = document.querySelector('#calorieen');
const beschrijving = document.querySelector('#beschrijving');


images.forEach(img => {
  img.addEventListener('click', function (){
    naam.innerHTML =  img.querySelector('img').alt
    calorieen.innerHTML = img.getAttribute('data-calorie')
    beschrijving.innerHTML = img.getAttribute('data-beschrijving')
    document.querySelector('.current').classList.remove('current');
    img.classList.add('current')
    img.classList.add('visited');
    });
});
    
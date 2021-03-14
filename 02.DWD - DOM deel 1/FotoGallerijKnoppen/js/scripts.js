const figBig = document.querySelector('#figBig');
const thumbs = document.querySelectorAll('.thumbs div');
const btnNext = document.querySelector('#btnNext');
const btnPrevious = document.querySelector('#btnPrev');

let currentImg = 0;

thumbs.forEach(thn => {
   thn.addEventListener('click', function () {
      // verwijder current class van vorige thumb
      document.querySelector('.current').classList.remove('current');
      // voeg current en visited class toe aan huidige thumb
      thn.classList.add('current');
      thn.classList.add('visited');
      // pas afbeelding en beschrijving aan
      figBig.querySelector('img').src = thn.getAttribute('data-photo');
      figBig.querySelector('figcaption').innerHTML = thn.querySelector('img').alt;
     
   });
});

btnNext.addEventListener('click', function () {
   currentImg += 1;
   if (currentImg == 5){
      currentImg = 0;
   }
   afbeeldingen(currentImg);
});

btnPrevious.addEventListener('click', function (){
   currentImg += 1;
   if (currentImg == 5){
      currentImg = 0;
   }
   afbeeldingen(currentImg);
});

function afbeeldingen(currImg) {
   figBig.querySelector('img').src = thumbs[currImg].getAttribute('data-photo');
   figBig.querySelector('figcaption').innerHTML = thumbs[currImg].querySelector('img').alt;
}
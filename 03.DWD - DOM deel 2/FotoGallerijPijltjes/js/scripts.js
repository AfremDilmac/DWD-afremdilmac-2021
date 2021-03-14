const figBig = document.querySelector('#figBig');
const thumbs = document.querySelectorAll('.thumbs div');

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

addEventListener('keydown', function(e){
   if (e.key.toLocaleLowerCase() == 'arrowleft') {
      currentImg -= 1;
      if (currentImg == -1){
         currentImg = 4;
      }
      afbeeldingen(currentImg);
   }
   else if (e.key.toLocaleLowerCase() == 'arrowright') {
      currentImg += 1;
      if (currentImg == 5){
         currentImg = 0;
      }
      afbeeldingen(currentImg);
   }
});

function afbeeldingen(currImg) {
   figBig.querySelector('img').src = thumbs[currImg].getAttribute('data-photo');
   figBig.querySelector('figcaption').innerHTML = thumbs[currImg].querySelector('img').alt;
}
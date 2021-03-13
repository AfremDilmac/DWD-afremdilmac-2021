const figBig = document.querySelector('#figBig');
const thumbLinks = document.querySelectorAll('.thumbs a');
const btnNext = document.querySelector('#btnNext');
const items = document.querySelectorAll('#thumbs li')

thumbLinks.forEach(lnk => {
    lnk.addEventListener('click', function (){
      document.querySelector('.current').classList.remove('current');
      lnk.classList.add('current');
      lnk.classList.add('visited');
      figBig.querySelector('img').src = lnk.getAttribute('data-photo');

    });

});

btnNext.addEventListener('click', function(){
   document.querySelector('.current').classList.remove('current');
   lnk.classList.add('current');
   lnk.classList.add('visited');
   figBig.querySelector('img').src = lnk.getAttribute('data-photo');


 });


function handleLinkClicks(e) {
   e.preventDefault();
   figBig.querySelector('img').src = this.href;
   figBig.querySelector('figcaption').innerHTML = this.querySelector('img').alt;
}

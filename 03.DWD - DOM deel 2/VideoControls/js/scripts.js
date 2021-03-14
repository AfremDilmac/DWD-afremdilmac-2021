const sldSound = document.querySelector('#sldsound');
const video = document.querySelector('#myvideo');
const lblSound = document.querySelector('#lblsound');
const btnPlay = document.querySelector('#btnplay');
const btnStop = document.querySelector('#btnstop');
const btnRewind = document.querySelector('#btnrewind');
const cbxFunk = document.querySelector('#inpfunk');


sldSound.addEventListener('mouseup', function(){
    lblSound.innerHTML = sldSound.value;
    video.volume = (sldSound.value / 100);
});

btnPlay.addEventListener('click', function () {
    video.play();
});

btnStop.addEventListener('click', function () {
  video.pause();
});

btnRewind.addEventListener('click', function(){
    video.currentTime = 0;
});

cbxFunk.addEventListener('click', function(){

  if (cbxFunk.checked == true) {
    video.classList.add('video');
  }     
  else if (cbxFunk.checked == false)
  video.classList.remove('video');
});

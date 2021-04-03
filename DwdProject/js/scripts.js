const character = document.querySelector('#img');
const btnPlay = document.querySelector('#btnplay');
const txtSound = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');



//Sound
let sndStart = new Audio();
sndStart.volume = 0.5;
sndStart.src = "snd/play.mp3";

sldSize.addEventListener('click', function () {
    txtSound.innerHTML = sldSize.value + '%';
    let sound = sldSize.value / 100;
    sndStart.volume = sound;
});


btnPlay.addEventListener('click', function(){
    sndStart.play();
});


//Character movement
addEventListener('keydown', function(e){
    if (e.keyCode == 37) {
        character.classList.add('face-left');
        character.classList.remove('face-up')
        character.classList.remove('face-right')
        character.classList.remove('face-down')
    }
    if (e.keyCode == 39) {
        character.classList.add('face-right');
        character.classList.remove('face-left')
        character.classList.remove('face-up')
        character.classList.remove('face-down')
        
    }

    //Deze twee hebben momenteel nog geen echte doel omdat men alleen maar naar links of rechts kan gaan
    if (e.keyCode == 38) {
        character.classList.add('face-up');
        character.classList.remove('face-left')
        character.classList.remove('face-right')
        character.classList.remove('face-down')
    }
    if (e.keyCode == 40) {
        character.classList.add('face-down');
        character.classList.remove('face-left')
        character.classList.remove('face-up')
        character.classList.remove('face-right')
    }
    
 });
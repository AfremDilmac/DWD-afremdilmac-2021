const character = document.querySelector('#img');
const btnPlay = document.querySelector('#btnplay');
const txtSound = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//Canvas
canvas.width = 800;
canvas.height = 500;
//Character movement geleerd op bron: https://www.youtube.com/watch?v=EYf_JwzwTlQ&t=923s
const keys = [];

const player = {
    x: 400,
    y: 220,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 1,
    moving: false,
};

const playerSprite = new Image();
playerSprite.src = "img/sprite.png";




function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
    handlePlayerFrame();

}
animate();

function movePlayer(){
    if (keys[38] && player.y > 0 ) {
        player.y -= player.speed;
        player.frameY = 3;
    }

    if (keys[37] && player.x > 0 ) {
        player.x -= player.speed;
        player.frameY = 1;
    }

    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
    }

    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
    }
}

function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) {
        player.frameX++;
    }
    else player.frameX = 0;
}


window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    player.moving = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

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

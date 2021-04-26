const character = document.querySelector('#img');
const btnPlay = document.querySelector('#btnplay');
const txtSound = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');
const btnFullScreen = document.querySelector('#btnfullscreen');
const btnMuteSound = document.querySelector('#btnmute');
const btnUnmuteSound = document.querySelector('#btnunmute');
const btnNormalScreen = document.querySelector('#btnnormal');
const btnDarkMode = document.querySelector('#btndark');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const countdown = document.querySelector('#countdown');
const buttons = document.querySelectorAll('.options button');


//Start game
btnPlay.addEventListener('click', function (e) {


    //Canvas
    canvas.width = 800;
    canvas.height = 500;

    //Timer
    let time;
    let i = 60;
    let minuten;
    let seconden;

    function timer() {
        i--;
        countdown.innerHTML = Math.floor(i / 60) + ' : ' + Math.floor(i % 60);
        if (countdown.innerHTML == '0 : 0') {
            canvas.style.visibility = 'hidden';
            countdown.innerHTML = '0';
        }
    }
    time = setInterval(timer, 1000);

    //Character movement geleerd op bron: https://www.youtube.com/watch?v=EYf_JwzwTlQ&t=923s
    const keys = [];

    //character parameters
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

    function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
    //Character animation
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        requestAnimationFrame(animate);
        handlePlayerFrame();

    }
    animate();

    //Animation On/Off wanneer ik op een toets druk of niet.
    function handlePlayerFrame() {
        if (player.frameX < 3 && player.moving) {
            player.frameX++;
        } else player.frameX = 0;
    }

    window.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
        player.moving = true;
    });

    window.addEventListener("keyup", function (e) {
        delete keys[e.keyCode];
        player.moving = false;
    });

    //character movement
    function movePlayer() {
        if (keys[38] && player.y > 0) {
            player.y -= player.speed;
            player.frameY = 3;
        }

        if (keys[37] && player.x > 20) {
            player.x -= player.speed;
            player.frameY = 1;
        }

        if (keys[40] && player.y < canvas.height - 120) {
            player.y += player.speed;
            player.frameY = 0;
        }

        if (keys[39] && player.x < canvas.width - 52) {
            player.x += player.speed;
            player.frameY = 2;
        }
    }



    //Sound
    let sndStart = new Audio();
    sndStart.volume = 0.5;
    sndStart.src = "snd/play.mp3";
    sndStart.play();

    let sndOptions = new Audio();
    sndOptions.volume = 0.5;
    sndOptions.src = "snd/options.mp3"

    sldSize.addEventListener('click', function () {
        txtSound.innerHTML = sldSize.value + '%';
        let sound = sldSize.value / 100;
        sndStart.volume = sound;
    });



    //Options + sound foreach button
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.current').classList.remove('current');
            btn.classList.add('current');
            sndOptions.play();
        });
    });

    btnMuteSound.addEventListener('click', function () {
        sndStart.muted = true;
    });

    btnUnmuteSound.addEventListener('click', function () {
        sndStart.muted = false;
    });

    btnNormalScreen.addEventListener('click', function () {
        document.exitFullscreen();
    });

    btnFullScreen.addEventListener('click', function () {
        document.getElementById("canvas1").requestFullscreen()
    });
});
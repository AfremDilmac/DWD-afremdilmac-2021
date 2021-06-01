const character = document.querySelector('#img');
const btnPlay = document.querySelector('#btnplay');
const btnReady = document.querySelector('#btnlogin');
const txtSound = document.querySelector('#lblpercentage');
const sldSize = document.querySelector('#sldsize');
const btnFullScreen = document.querySelector('#btnfullscreen');
const btnMuteSound = document.querySelector('#btnmute');
const btnUnmuteSound = document.querySelector('#btnunmute');
const btnNormalScreen = document.querySelector('#btnnormal');
const btnDarkMode = document.querySelector('#btndark');
const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext('2d');
const countdown = document.querySelector('#countdown');
const buttons = document.querySelectorAll('.options button');
const login = document.querySelector('.loginstart');
const inpAvatar = document.querySelector('#avatar');
const rdbCharacter1 = document.querySelector('#character1');
const rdbCharacter2 = document.querySelector('#character2');
const inpChooseCharacter1 = document.querySelector('#character1');
const inpChooseCharacter2 = document.querySelector('#character2');
const playerName = document.querySelector('#name');
const inpUsername = document.querySelector('#inpusername');
const btnLocal = document.querySelector('#btnlogin');
const figBig = document.querySelector('#figBig');
const thumbs = document.querySelectorAll('.thumbs div');
const btnLeft = document.querySelector('#btnleft');
const btnRight = document.querySelector('#btnright');
const currentCharacter = document.querySelector('#character');

window.addEventListener("load", function (event) {
    btnPlay.disabled = true;
});

let currentImg = 0;

thumbs.forEach(thn => {
   thn.addEventListener('click', function () {
      document.querySelector('.current').classList.remove('current');
      figBig.querySelector('img').src = thn.getAttribute('data-photo');
   });
});

btnLeft.addEventListener('click', function(e){
    currentImg -= 1;
    if (currentImg == -1){
        currentImg = 1;
     }
     afbeeldingen(currentImg);
});

btnRight.addEventListener('click', function (e){
    currentImg -= 1;
    if (currentImg == -1){
        currentImg = 1;
     }
     afbeeldingen(currentImg);
});

function afbeeldingen(currImg) {
   figBig.querySelector('img').src = thumbs[currImg].getAttribute('data-photo');
}

const username = {
    load: document.getElementById("btnlogin"),
    title: document.getElementById("name"),
    input: document.getElementById("inpusername"),
    saveName: document.getElementById("btnlogin"),
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadFromLocalStorage(key) {
    const loaded = localStorage.getItem(key);
    if (loaded != null) {
        return loaded;
    }
    return `Nothing found in ${key}`;
}

username.saveName.addEventListener("click", function(e) {
    const inputText = username.input.value;
    if (checkInput()) {
        saveToLocalStorage("savedName", inputText);
    }
});

username.load.addEventListener('click', function (e){
    username.title.innerHTML = loadFromLocalStorage("savedName");
});


btnReady.addEventListener('click', function (e) {
    btnPlay.disabled = false;
    btnPlay.classList.remove('btnstart');
    btnPlay.classList.add('btnplay');
});

//Choose character
const playerSprite = new Image();
if (currentImg == 0) {
    playerSprite.src = "img/sprite.png";
}
else{
    playerSprite.src = "img/sprite2.png";
}

const enemySprite = new Image();
enemySprite.src = "img/spriteryuk.png";

//bullet
const bulletSprite = new Image();
bulletSprite.src = "img/bullet.png";

//Start game
btnPlay.addEventListener('click', function (e) {
    {
        //Canvas
        canvas.width = 800;
        canvas.height = 500;
        canvas.classList.add('gamestart');
        canvas.classList.remove('canvas1');
        login.classList.add('login');
        login.classList.remove('loginstart');
        inpUsername.innerHTML = '';
        inpAvatar.innerHTML = '';

        //Timer
        let time;
        let i = 300;
        let minuten;
        let seconden;

        function timer() {
            i--;
            countdown.innerHTML = Math.floor(i / 60) + ' : ' + Math.floor(i % 60);
            if (countdown.innerHTML == '0 : 0') {
                btnPlay.innerHTML = "restart game";
                canvas.classList.add('gameover');
                sndStart.muted = true;
                clearInterval(time);
            } else {
                canvas.classList.remove('gameover');
                btnPlay.innerHTML = "play game";
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

        const enemy = {
            x: 110,
            y: 300,
            width: 48,
            height: 64,
            frameX: 0,
            frameY: 0,
            speed: 0.65,
            moving: false,
        }
        
            const bullet = {
            x: 0,
            y: 0,
            width: 32,
            height: 48,
            frameX: 0,
            frameY: 0,
            speed: 1,
            moving: false,
        };
        
        function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
            ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
        }

        //Character animation
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
            drawSprite(enemySprite, enemy.width * enemy.frameX, enemy.height * enemy.frameY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
            movePlayer();
            moveEnnemy();
            gameOver();
            playerShoot();
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
                console.log(keys[38]);
            }

            if (keys[37] && player.x > 20) {
                player.x -= player.speed;
                player.frameY = 1;
                console.log(keys[37]);
            }

            if (keys[40] && player.y < canvas.height - 120) {
                player.y += player.speed;
                player.frameY = 0;
                console.log(keys[40]);
            }

            if (keys[39] && player.x < canvas.width - 52) {
                player.x += player.speed;
                player.frameY = 2;
                console.log(keys[39]);
            }
        }
        //Hier bereken ik het afstand tussen onze enemy en speler en laat ik onze monster naar ons speler lopen. 
        function moveEnnemy() {
            let differencex = enemy.x - player.x;
            let differencey = enemy.y - player.y;

            if (differencey > 0) {
                enemy.frameY = 3;
                enemy.y -= enemy.speed;
            } else {
                enemy.frameY = 0;
                enemy.y += enemy.speed;
            }
            if (differencex > 0) {
                enemy.frameY = 1;
                enemy.x -= enemy.speed;
            } else {
                enemy.frameY = 2;
                enemy.x += enemy.speed;
            }
        }
        
            function playerShoot(){
                bullet.y = player.y;
                bullet.x = player.x;
                if (keys[89] && bullet.y > 0) {
                    if (player.frameY == 3) {
                        bullet.frameY = 3;
                        bullet.y -= bullet.speed;
                        drawSprite(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width, bullet.height, bullet.x, bullet.y, bullet.width, bullet.height);
                    }
                }
                if (keys[89] && bullet.x > 20) {
                    if (player.frameY == 1) {
                        bullet.frameY = 1;
                        bullet.y -= bullet.speed;
                        drawSprite(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width, bullet.height, bullet.x, bullet.y, bullet.width, bullet.height);
                    }
                }
                if (keys[89] && player.y < canvas.height - 120) {
                    if (player.frameY == 0) {
                        bullet.frameY = 0;
                        bullet.y += bullet.speed;
                        drawSprite(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width, bullet.height, bullet.x, bullet.y, bullet.width, bullet.height);
                    }
                }
                if (keys[89] && player.y < canvas.width - 52) {
                    if (player.frameY == 2) {
                        bullet.frameY = 2;
                        bullet.y += bullet.speed;
                        drawSprite(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width, bullet.height, bullet.x, bullet.y, bullet.width, bullet.height);
                    }
                }
            }
        
        function gameOver() {
            if (player.x < enemy.x + player.width &&
                player.x + player.width > enemy.x &&
                player.y < enemy.y + enemy.height &&
                player.y + player.height > enemy.y) {
                canvas.classList.add('gameover');
                clearInterval(time);
                sndStart.muted = true;
            }
        }
        //Sound
        let sndStart = new Audio();
        sndStart.volume = 0.2;
        sndStart.src = "snd/play.mp3";
        sndStart.play();

        let sndOptions = new Audio();
        sndOptions.volume = 0.1;
        sndOptions.src = "snd/options.mp3"

        sldSize.addEventListener('click', function () {
            txtSound.innerHTML = sldSize.value + '%';
            let sound = sldSize.value / 100;
            sndStart.volume = sound;
        });
    }

    //Options + sound foreach button
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.current').classList.remove('current');
            btn.classList.add('current');
            btn.disabled = true;
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
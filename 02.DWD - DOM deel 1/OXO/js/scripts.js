const buttons = document.querySelectorAll('#wrapper button')
const img = document.querySelector('#imguitvoer');
const message = document.querySelector('#imguitvoer');
const title = document.querySelector('#title');
const restart = document.querySelector('#btnrestart');
const current = document.querySelector('#current');

let turn = 1;
let sndWin = new Audio();
sndWin.volume = 0.3;
sndWin.src = "snd/win.mp3";


buttons.forEach(btn => {
    btn.addEventListener('click', function () {

        //Beurt bepalen
        if (turn == 1) {
            btn.innerHTML = 'X';
            current.innerHTML = 'Current player: Player 2'
            turn = 0;
            btn.disabled = true;
            btn.style.backgroundColor = 'purple';
        } else {
            btn.innerHTML = 'O';
            current.innerHTML = 'Current player: Player 1'
            btn.disabled = true;
            btn.style.backgroundColor = 'purple';
            turn = 1;
        }

        //Player 1 win
        if (btn1.innerHTML == 'X' && btn2.innerHTML == 'X') {
            if (btn3.innerHTML == 'X') {
                img.src = "/OXO/img/gameover.jpg";
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn4.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn6.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn7.innerHTML == 'X' && btn8.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'X' && btn4.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn2.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn8.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'X' && btn6.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'X' && btn2.innerHTML == 'X') {
            if (btn3.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn4.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn6.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn7.innerHTML == 'X' && btn8.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'X' && btn4.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn2.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn8.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'X' && btn6.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 1 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }

        //Player 2 Win
        if (btn1.innerHTML == 'O' && btn2.innerHTML == 'O') {
            if (btn3.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn4.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn6.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn7.innerHTML == 'O' && btn8.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'O' && btn4.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn2.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn8.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'O' && btn6.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'O' && btn2.innerHTML == 'O') {
            if (btn3.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn4.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn6.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn7.innerHTML == 'O' && btn8.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'O' && btn4.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn2.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn8.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn3.innerHTML == 'O' && btn6.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();
            }
        }
        if (btn1.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();

            }
        }
        if (btn3.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/gameover.jpg';
                title.innerHTML = 'Player 2 win!';
                document.getElementById("btnrestart").style.visibility = "visible";
                sndWin.play();

            }
        }
    });
});

// Restart button
restart.addEventListener('click', function () {
    buttons.forEach(btn => {
        btn.innerHTML = '-';
        btn.disabled = false;
        img.src = '';
        title.innerHTML = 'OXO';
        document.getElementById("btnrestart").style.visibility = "hidden";
        btn.style.backgroundColor = '#1B88E5';

    });
});
const buttons = document.querySelectorAll('#wrapper button')
const img = document.querySelector('#imguitvoer');
const message = document.querySelector('#imguitvoer');
const btnretry = document.querySelector('btnagain');

let turn = 1;

buttons.forEach(btn => {
    btn.addEventListener('click', function () {

        //Beurt bepalen
        if (turn == 1) {
            btn.innerHTML = 'X';
            turn = 0;
            btn.disabled = true;
        } else {
            btn.innerHTML = 'O';
            btn.disabled = true;
            turn = 1;
        }

        //Player 1 win
        if (btn1.innerHTML == 'X' && btn2.innerHTML == 'X') {
            if (btn3.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn4.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn6.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn7.innerHTML == 'X' && btn8.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn1.innerHTML == 'X' && btn4.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn2.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn8.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn3.innerHTML == 'X' && btn6.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn1.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn3.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn1.innerHTML == 'X' && btn2.innerHTML == 'X') {
            if (btn3.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn4.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn6.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn7.innerHTML == 'X' && btn8.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn1.innerHTML == 'X' && btn4.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn2.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn8.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn3.innerHTML == 'X' && btn6.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn1.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn9.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }
        if (btn3.innerHTML == 'X' && btn5.innerHTML == 'X') {
            if (btn7.innerHTML == 'X') {
                img.src = '/OXO/img/player1wins.png';
            }
        }

        //Player 2 Win
        if (btn1.innerHTML == 'O' && btn2.innerHTML == 'O') {
            if (btn3.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn4.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn6.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn7.innerHTML == 'O' && btn8.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn1.innerHTML == 'O' && btn4.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn2.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn8.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn3.innerHTML == 'O' && btn6.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn1.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn3.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn1.innerHTML == 'O' && btn2.innerHTML == 'O') {
            if (btn3.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn4.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn6.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn7.innerHTML == 'O' && btn8.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn1.innerHTML == 'O' && btn4.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn2.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn8.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn3.innerHTML == 'O' && btn6.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
            }
        }
        if (btn1.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn9.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';

            }
        }
        if (btn3.innerHTML == 'O' && btn5.innerHTML == 'O') {
            if (btn7.innerHTML == 'O') {
                img.src = '/OXO/img/player2wins.png';
              
            }
        }

    });
});
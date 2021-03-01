const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const message = document.querySelector('#lblmessage');
const img = document.querySelector('#imguitvoer');
let turn = 0;



btn1.addEventListener('click', function(){


    if (turn %2 == 0) {
        btn1.innerHTML = 'O';
        turn++;
        btn1.disabled = true;
    }
     else {
        btn1.innerHTML = 'X';
        btn1.disabled = true;
    }

    if (btn1.innerHTML == 'O' && btn2.innerHTML == 'O') {
        if (btn3.innerHTML == 'O') {
            img.src = "/img/player1win.jpg"
        }
    };
   
});

btn2.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn2.innerHTML = 'X';
        turn++;
        btn2.disabled = true;
    }
     else {
        btn2.innerHTML = 'O';
        btn2.disabled = true;
    }
});

btn3.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn3.innerHTML = 'O';
        btn3.disabled = true;
        turn++;
    }
     else {
        btn3.innerHTML = 'X';
        btn3.disabled = true;
    }
});

btn4.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn4.innerHTML = 'X';
        turn++;
        btn4.disabled = true;
    }
     else {
        btn4.innerHTML = 'O';
        btn4.disabled = true;
    }
});
btn5.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn5.innerHTML = 'O';
        turn++;
        btn5.disabled = true;
    }
     else {
        btn5.innerHTML = 'X';
        btn5.disabled = true;
    }
});
btn6.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn6.innerHTML = 'X';
        turn++;
        btn6.disabled = true;
    }
     else {
        btn6.innerHTML = 'O';
        btn6.disabled = true;
    }
});
btn7.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn7.innerHTML = 'O';
        turn++;
        btn7.disabled = true;
    }
     else {
        btn7.innerHTML = 'X';
        btn7.disabled = true;
    }
});
btn8.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn8.innerHTML = 'X';
        turn++;
        btn8.disabled = true;
    }
     else {
        btn8.innerHTML = 'O';
        btn8.disabled = true;
    }
});
btn9.addEventListener('click', function(){

    if (turn %2 == 0) {
        btn9.innerHTML = 'O';
        turn++;
        btn9.disabled = true;
    }
     else {
        btn9.innerHTML = 'X';
        btn9.disabled = true;
    }
});


const buttons = document.querySelectorAll('#wrapper button')
const img = document.querySelector('#imguitvoer');
console.log(buttons);

let turn = 1;

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
   
        if (turn == 1) {
            btn1.innerHTML = 'X';
            turn = 0;
            btn1.disabled = true;
        }
    else {
        btn1.innerHTML = 'O';
        btn1.disabled = true;
        turn = 1;
    }

    if (turn == 1) {
        btn2.innerHTML = 'X';
        btn2.disabled = true;
        turn = 0;
    }
    else{
        btn2.innerHTML = 'O';
        btn2.disabled = true;
        turn = 1;
    }

    });
});
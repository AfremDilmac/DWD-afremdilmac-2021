const txtSize = document.querySelector('#lblpx');
const sldSize = document.querySelector('#sldsize');
const inpVet = document.querySelector('#inpvet');
const inpItalic = document.querySelector('#inpitalic');
const inpUppercase = document.querySelector('#inpuppercase');
const txtArea = document.querySelector('#txtbericht');
const btnStyle1 = document.querySelector('#btnstyle1')
const btnStyle2 = document.querySelector('#btnstyle2')
const btnStyle3 = document.querySelector('#btnstyle3')

btnStyle1.addEventListener('click', function (){
    txtArea.style.textShadow = '5px 5px'
    txtArea.style.backgroundImage = '';
    txtArea.style.transform = '';
    btnStyle1.disabled = true;
    btnStyle2.disabled = false;
    btnStyle3.disabled = false;
    btnStyle1.style.backgroundColor = 'gray';
    btnStyle2.style.backgroundColor = 'white';
    btnStyle3.style.backgroundColor = 'white';
});

btnStyle2.addEventListener('click', function (){
    txtArea.style.backgroundImage = 'linear-gradient(to right, red , yellow)';
    txtArea.style.textShadow = '0px 0px'
    txtArea.style.transform = '';
    btnStyle1.disabled = false;
    btnStyle2.disabled = true;
    btnStyle3.disabled = false;
    btnStyle1.style.backgroundColor = 'white';
    btnStyle2.style.backgroundColor = 'gray';
    btnStyle3.style.backgroundColor = 'white';
});

btnStyle3.addEventListener('click', function (){
    txtArea.style.transform = 'scale(-1, 1)';
    txtArea.style.textShadow = '0px 0px'
    txtArea.style.backgroundImage = '';
    btnStyle1.disabled = false;
    btnStyle2.disabled = false;
    btnStyle3.disabled = true;
    btnStyle1.style.backgroundColor = 'white';
    btnStyle2.style.backgroundColor = 'white';
    btnStyle3.style.backgroundColor = 'gray';
});

cbx.addEventListener('click', function(){

    if (inpVet.checked == true) {
        txtArea.style.fontWeight = 'bold';
    }
    else if (inpVet.checked == false) {
        txtArea.style.fontWeight = 'normal';
    }

    if (inpItalic.checked == true) {
        txtArea.style.fontStyle = 'italic';
    }
    else  if (inpItalic.checked == false) {
        txtArea.style.fontStyle = 'normal';
    }

    if (inpUppercase.checked == true) {
        txtArea.style.textTransform = "uppercase";
    }
    else if (inpUppercase.checked == false) {
        txtArea.style.textTransform = "lowercase";
    }
    
});

sldSize.addEventListener('mouseup', function(){
    txtSize.innerHTML = sldSize.value + 'px';
    txtArea.style.fontSize = `${sldSize.value}px`;
});




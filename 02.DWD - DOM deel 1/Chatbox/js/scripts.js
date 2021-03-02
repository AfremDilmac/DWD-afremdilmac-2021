const inpName = document.querySelector('#naam');
const txt = document.querySelector('#txtbericht');
const bericht = document.querySelector('#test');
const btn = document.querySelector('#btnsend');


btn.addEventListener('click', function(){

bericht.innerHTML += `${inpName.value.bold()} says: \n ${txt.value}`;
inpName.value = '';
txt.value = '';
});

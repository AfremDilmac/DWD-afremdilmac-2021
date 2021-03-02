const inpName = document.querySelector('#naam');
const txt = document.querySelector('#txtbericht');
const bericht = document.querySelector('#test');
const btn = document.querySelector('#btnsend');


btn.addEventListener('click', function(){

bericht.innerHTML += `<p>${inpName.value.bold()} says:  </br> ${txt.value}</p>`;
inpName.value = '';
txt.value = '';
});

const blockquote = document.querySelector('#blockquote');
const img = document.querySelector('#image');
const btn = document.querySelector('#btn');

    // fetch settings; PAS DIT AAN
let url = 'https://api.chucknorris.io/jokes/random'; // basis url

let options = {}; // extra opties
let params = new URLSearchParams(); // extra parameters
params.append('parameter1', 'value1');
params.append('parameter2', 'value2');
url += '?' + params.toString();
// fetch url; LAAT ONGEWIJZIGD
fetch(url, options)
.then(resp => { return resp.json(); })
.then(data => verwerkData(data))
.catch(err => verwerkFout(err));
// verwerk fouten – PAS DIT EVENTUEEL AAN
function verwerkFout(err) {
console.log('request mislukt: ', err)
}
// verwerk data – PAS DIT AAN
function verwerkData(data) {
blockquote.innerHTML = data.value;
img.src = data.icon_url;
console.log(data);
}

btn.addEventListener('click', function () {
    location.reload();

});

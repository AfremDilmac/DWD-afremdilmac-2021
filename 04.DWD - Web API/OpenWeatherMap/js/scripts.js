const lblWeather = document.querySelector('#weather');
const btnParis = document.querySelector('#btnParis');
const btnBrussel = document.querySelector('#btnBrussels');
const btnAmsterdam = document.querySelector('#btnAmsterdam');

// fetch settings; PAS DIT AAN
let url = 'https://api.openweathermap.org/data/2.5/weather?id=2800866&appid=f872ea812be596f5bcdbd8ba36387f8b&units=metric&lang=nl'; // basis url
let options = {}; // extra opties
let params = new URLSearchParams(); // extra parameters
params.append('q', 'appid');
params.append('lang', 'units');


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
console.log('ontvangen data: ', data)
lblWeather.innerHTML = `It is in ${data.name} ${data.main.temp} Celsius and with a wind with ${data.wind.speed} speed`;
}

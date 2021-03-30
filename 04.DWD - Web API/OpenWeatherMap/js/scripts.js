const lblWeather = document.querySelector('#weather');
const stad = document.querySelector('#stad');
const graden = document.querySelector('#graden');
const weer = document.querySelector('#weer');

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
stad.innerHTML = data.name;
graden.innerHTML = `${data.main.temp} ℃`;
weer.innerHTML = `${data.weather[0].description}`;

}

const lblWeather = document.querySelector('#weather');
const bestad = document.querySelector('#bestad');
const begraden = document.querySelector('#begraden');
const beweer = document.querySelector('#beweer');
const nlstad = document.querySelector('#nlstad');
const nlgraden = document.querySelector('#nlgraden');
const nlweer = document.querySelector('#nlweer');
const frstad = document.querySelector('#frstad');
const frgraden = document.querySelector('#frgraden');
const frweer = document.querySelector('#frweer');

// fetch settings; BRUSSEL
let url = 'https://api.openweathermap.org/data/2.5/weather?id=2800866&appid=f872ea812be596f5bcdbd8ba36387f8b&units=metric&lang=nl'; // basis url
let options = {}; // extra opties
let params = new URLSearchParams(); // extra parameters
params.append('q', 'appid');
params.append('lang', 'units');

// fetch url; BRUSSEL
fetch(url, options)
.then(resp => { return resp.json(); })
.then(data => verwerkData(data))
.catch(err => verwerkFout(err));
// verwerk fouten – BRUSSEL
function verwerkFout(err) {
console.log('request mislukt: ', err)
}
// verwerk data – BRUSSEL
function verwerkData(data) {
console.log('ontvangen data: ', data)
bestad.innerHTML = data.name;
begraden.innerHTML = `${data.main.temp} ℃`;
beweer.innerHTML = `${data.weather[0].description}`;
}


// fetch settings; AMSTERDAM
let url1 = 'https://api.openweathermap.org/data/2.5/weather?id=2759794&appid=f872ea812be596f5bcdbd8ba36387f8b&units=metric&lang=nl'; // basis url
let options1 = {}; // extra opties
let params1 = new URLSearchParams(); // extra parameters
params1.append('q', 'appid');
params1.append('lang', 'units');


// fetch url; AMSTERDAM
fetch(url1, options1)
.then(resp1 => { return resp1.json(); })
.then(data1 => verwerkData1(data1))
.catch(err1 => verwerkFout1(err1));
// verwerk fouten – AMSTERDAM
function verwerkFout(err1) {
console.log('request mislukt: ', err1)
}
// verwerk data – AMSTERDAM
function verwerkData1(data1) {
console.log('ontvangen data: ', data1)
nlstad.innerHTML = data1.name;
nlgraden.innerHTML = `${data1.main.temp} ℃`;
nlweer.innerHTML = `${data1.weather[0].description}`;
}


// fetch settings; PARIJS
let url2 = 'https://api.openweathermap.org/data/2.5/weather?id=2968815&appid=f872ea812be596f5bcdbd8ba36387f8b&units=metric&lang=nl'; // basis url
let options2 = {}; // extra opties
let params2 = new URLSearchParams(); // extra parameters
params2.append('q', 'appid');
params2.append('lang', 'units');

// fetch url; PARIJS
fetch(url2, options2)
.then(resp2 => { return resp2.json(); })
.then(data2 => verwerkData2(data2))
.catch(err2 => verwerkFout2(err2));
// verwerk fouten – PAS DIT EVENTUEEL AAN
function verwerkFout2(err2) {
console.log('request mislukt: ', err2)
}

// verwerk data –  PARIJS
function verwerkData2(data2) {
console.log('ontvangen data: ', data2)
frstad.innerHTML = data2.name;
frgraden.innerHTML = `${data2.main.temp} ℃`;
frweer.innerHTML = `${data2.weather[0].description}`;
}

/*
 {
        "id": 2759794,
        "name": "Amsterdam",
        "state": "",
        "country": "NL",
        "coord": {
            "lon": 4.88969,
            "lat": 52.374031
        }

        {
        "id": 2968815,
        "name": "Paris",
        "state": "",
        "country": "FR",
        "coord": {
            "lon": 2.3486,
            "lat": 48.853401
        }

*/
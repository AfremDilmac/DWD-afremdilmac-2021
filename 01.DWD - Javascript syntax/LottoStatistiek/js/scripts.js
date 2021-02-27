const CIJFERS = 43;
const ZES_WILLEKEURIG = 6;
const VIJFTIG_POGINGEN = 50;

//6 willekeurige cijfers

function genereerUniekeGetallenreeks(aantal, max){
    let getallen = [];
    for (let index = 0; index < aantal; index++) {
        
        
        if (getallen.includes(nieuwGetal)) {
            continue;
            getallen.push();
        }
    }
    return getallen;
}

let getrokkenGetallen = genereerUniekeGetallenreeks(ZES_WILLEKEURIG)
console.log(getrokkenGetallen);

function nummer(){
    let nummers = [];
    for (let index = 0; index < 6; index++) {
        let num = Math.floor(Math.random() * 42) + 1;
        for (let index = 0; index < 42; index++) {
            if (num.includes(nummers)) {
             return   
            }
            nummers.push(num);
        }
        
    }
}

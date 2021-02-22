function IsCorrectPaswoord(pw) {

    if (pw.length < 9) {
        return false;
    }
    if (pw.includes("@")) {
        return false;
    }
    if (pw == "password") {
        return false;
    }
    return true;
    

}

let paswoorden = ["klepketoe", "test", "Azerty123", "rogier@work", "paswoord", "MisterNasty12", "pwnz0red"];

console.log("Alle passwoorden: ");
for (let index = 0; index < paswoorden.length; index++) {
    console.log((index + 1) + "." + paswoorden[index]);
}
console.log();
let welOk = [];
let nietOk = [];
for(let pw of paswoorden){
    if (IsCorrectPaswoord(pw)) {
        welOk.push(pw)
    } else {
        nietOk.push(pw)
    }
}

console.log("Ok: " + welOk.join(", "));
console.log("Niet ok: " + nietOk.join(", "));
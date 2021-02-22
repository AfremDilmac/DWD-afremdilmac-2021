const CIJFERS = 43;
const ZES_WILLEKEURIG = 6;
const VIJFTIG_POGINGEN = 50;
let count = 0;
//6 willekeurige cijfers
let arr1 = []
arr1[0] = Math.floor(Math.random() * CIJFERS);
arr1[1] = Math.floor(Math.random() * CIJFERS);
arr1[2] = Math.floor(Math.random() * CIJFERS);
arr1[3] = Math.floor(Math.random() * CIJFERS);
arr1[4] = Math.floor(Math.random() * CIJFERS);
arr1[5] = Math.floor(Math.random() * CIJFERS);

//trekking
console.log("getrokken getallen: " + arr1.toString());




let arr2 = []
arr2[0] = Math.floor(Math.random() * CIJFERS);
arr2[1] = Math.floor(Math.random() * CIJFERS);
arr2[2] = Math.floor(Math.random() * CIJFERS);
arr2[3] = Math.floor(Math.random() * CIJFERS);
arr2[4] = Math.floor(Math.random() * CIJFERS);
arr2[5] = Math.floor(Math.random() * CIJFERS);

if (arr1[0] == arr2[0]) {
    count++;
}
if (arr1[1] == arr2[1]) {
    count++;
}
if (arr1[2] == arr2[2]) {
    count++;
}
if (arr1[3] == arr2[3]) {
    count++;
}
if (arr1[4] == arr2[4]) {
    count++;
}
if (arr1[5] == arr2[5]) {
    count++;
}

let arr2 = []
arr2[0] = Math.floor(Math.random() * CIJFERS);
arr2[1] = Math.floor(Math.random() * CIJFERS);
arr2[2] = Math.floor(Math.random() * CIJFERS);
arr2[3] = Math.floor(Math.random() * CIJFERS);
arr2[4] = Math.floor(Math.random() * CIJFERS);
arr2[5] = Math.floor(Math.random() * CIJFERS);

if (arr1[0] == arr2[0]) {
    count++;
}
if (arr1[1] == arr2[1]) {
    count++;
}
if (arr1[2] == arr2[2]) {
    count++;
}
if (arr1[3] == arr2[3]) {
    count++;
}
if (arr1[4] == arr2[4]) {
    count++;
}
if (arr1[5] == arr2[5]) {
    count++;
}


//resultaten 50 spelers
console.log("aantal juist: " + count1 + ",");

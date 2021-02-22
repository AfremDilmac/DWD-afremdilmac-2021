const CIJFERS = 43;
const ZES_WILLEKEURIG = 6;
const VIJFTIG_POGINGEN = 50;

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

let count = 0;
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

let arr3 = []
arr3[0] = Math.floor(Math.random() * CIJFERS);
arr3[1] = Math.floor(Math.random() * CIJFERS);
arr3[2] = Math.floor(Math.random() * CIJFERS);
arr3[3] = Math.floor(Math.random() * CIJFERS);
arr3[4] = Math.floor(Math.random() * CIJFERS);
arr3[5] = Math.floor(Math.random() * CIJFERS);

let count1 = 0;
if (arr1[0] == arr3[0]) {
    count1++;
}
if (arr1[1] == arr3[1]) {
    count1++;
}
if (arr1[2] == arr3[2]) {
    count1++;
}
if (arr1[3] == arr3[3]) {
    count1++;
}
if (arr1[4] == arr3[4]) {
    count1++;
}
if (arr1[5] == arr3[5]) {
    count1++;
}

let arr4 = []
arr4[0] = Math.floor(Math.random() * CIJFERS);
arr4[1] = Math.floor(Math.random() * CIJFERS);
arr4[2] = Math.floor(Math.random() * CIJFERS);
arr4[3] = Math.floor(Math.random() * CIJFERS);
arr4[4] = Math.floor(Math.random() * CIJFERS);
arr4[5] = Math.floor(Math.random() * CIJFERS);

let count2 = 0;
if (arr1[0] == arr4[0]) {
    count2++;
}
if (arr1[1] == arr4[1]) {
    count2++;
}
if (arr1[2] == arr4[2]) {
    count2++;
}
if (arr1[3] == arr4[3]) {
    count2++;
}
if (arr1[4] == arr4[4]) {
    count2++;
}
if (arr1[5] == arr4[5]) {
    count2++;
}

//resultaten 50 spelers
console.log("aantal juist: " + count + "," + count1 + "," + count2);

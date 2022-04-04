const age = 19;
let canHavelt = false;
let canHaveItText = "";

// if(age >= 18) {
//     canHavelt = true;
// }
// else {
//     canHavelt = false;
// }

console.log(`Kullanıcı ehliyet alabilir mi ? ${canHavelt}`);

canHavelt = age >= 18 ? true : false;
console.log(canHavelt);

// canHaveItText = 
console.log(`${age >= 18 ? "Ehliyet Alabilir" : "Ehliyet Alamaz"}`);
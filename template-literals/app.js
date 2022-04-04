const firstName = "Samed";
const lastName = "Kütahyalı";

function concatenateStrings(firstString, lastString) {
    return `${firstString} ${lastString} `;   
}

console.log("Hoşgeldin " + firstName + " " + lastName);

console.log(`Hoşgeldin ${concatenateStrings(firstName,lastName)}`);


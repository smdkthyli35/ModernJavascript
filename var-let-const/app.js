// var keyword'ü ile bizler değişkenleri tekrardan tanımlayabiliyor ve atayabiliyoruz. Tehlikeli bir durum !!!
// var keywordü ile tanımlanan değişkenler function scope oluyor.
// bir function'ın içinde iken değişkenler function'ın dışına çıkamıyorlar.

function myTestFunction() {

var firstName = "Samed";
console.log(firstName);

var firstName = "Kütahyalı";
console.log(firstName);

var firstName = true;
firstName =  25;
console.log(firstName);

if (firstName === 25) {
    var message = "Doğru Cevap";
}
console.log(message);
}

myTestFunction();

console.log(message); // hata verir!



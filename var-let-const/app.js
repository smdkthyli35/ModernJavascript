//-----------------------------VAR---------------------------------------

// var keyword'ü ile bizler değişkenleri tekrardan tanımlayabiliyor ve atayabiliyoruz. Tehlikeli bir durum !!!
// var keywordü ile tanımlanan değişkenler function scope oluyor.
// bir function'ın içinde iken değişkenler function'ın dışına çıkamıyorlar.

// function myTestFunction() {

// var firstName = "Samed";
// console.log(firstName);

// var firstName = "Kütahyalı";
// console.log(firstName);

// var firstName = true;
// firstName =  25;
// console.log(firstName);

// if (firstName === 25) {
//     var message = "Doğru Cevap";
// }
// console.log(message);
// }

// myTestFunction();

// console.log(message); // hata verir!

//---------------------------LET-----------------------------------------------

//let keywordü ile değişkenleri tanımlayabiliriz.

// let firstName = "Samed";
// console.log(firstName);

//let keywordü ile değişken tanımladığımız zaman aynı değişkenin üzerine aynı isimde yeni bir değişken tanımlayamıyoruz.

//let firstName = "Kütahyalı"; // hata verir!

// firstName = false;
// console.log(firstName); //çıktı : false.

//let kullanarak herhangi bir obje, dizi tanımlayabiliriz. Değiştirebileceğimiz, belirli aralıklarla güncelleyeceğimiz 
//değişkenleri tanımlarken let kullanabiliyoruz.

//-----------------------------------------CONST---------------------------------------------

//Değiştirmek istemediğimiz değişkenleri const ile tanımlayabiliyoruz.
// const age = 26;
// age = 27;
// console.log(age); // hata verir!

// string, number, bool gibi yerlerde değiştiremiyoruz. fakat bizleri yanıltabilecek obje ve dizi kısımları mevcut!!

const person = {
    firstName: "Samed",
    lastName: "Kütahyalı"
};

// person = {
//     firstName: "Hakan"
// }; //çalıştırdığımızda person değerini tekrar atadığımızı söyleyip bize kızar.

console.log(person);

person.firstName = "Arman"; //buna izin verir.

console.log(person); // çıktı : { firstName: 'Samed', lastName: 'Kütahyalı' }
//                              { firstName: 'Arman', lastName: 'Kütahyalı' }

//Dizilerde de aynı durum. Diziye yeni bir eleman ekleyelim.
const persons = ["Samed","Alper","Ayşe"];
console.log(persons);

persons.push("Ali");
console.log(persons); //Çıktı : [ 'Samed', 'Alper', 'Ayşe' ]
//                              [ 'Samed', 'Alper', 'Ayşe', 'Ali' ]

//ama

persons = ["Samed","Alper","Ayşe","Ali"];
//yaptığımız zaman bize hata verecektir!!!
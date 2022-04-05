// //Destructuring

const person = {
    country:"Türkiye",
    city:"İzmir",
    firstName:"Samed",
    lastName:"Kütahyalı",
    age:21
};

// // const firstName = person.firstName;
// // const lastName = person.lastName;
// // const age = person.age;

// const {firstName,lastName,age} = person; //destructuring parçalayarak alıyor.

// console.log(`Adınız: ${firstName}, Soyadınız: ${lastName}, Yaşınız: ${age}`);

// const getThePerson = () => {
//     return {
//     country:"Türkiye",
//     city:"İzmir",
//     firstName:"Samed",
//     lastName:"Kütahyalı",
//     age:21
//     };
// }

// const {country,city} =  getThePerson();

// console.log(`Ülkeniz: ${country}, Şehriniz: ${city}`);

// const personCreater = ({age,country}) => {
//     return `${age}, ${country}`;
// }

// console.log(personCreater(person));

//Array Destructuring : Arrayler üzerinden değer almamızı sağlıyor.

const [first,second,,,fifth] = ["Alper","Ali","Mehmet","Ayşe","Aslı"];

console.log(first,second,fifth);
// function logMyError(errorMessage) {
//     console.error(errorMessage);
// }

//Örnek 1
// const logMyError = errorMessage => console.error(errorMessage); // arrow functions kullanımı.
// logMyError("Bir hata oluştu!");

// //Örnek 2
// const sumUp =(num1, num2) => num1 + num2;
// console.log(sumUp(10,20));

const person = {
    firstName: "Samed",
    lastName: "Kütahyalı",
    sayMyName:function(){
        console.log(this.firstName + this.lastName);
    },
    sayMyNameArrow:() => {
        console.log(this.firstName,this.lastName); //undefined hata verir. Arrow Function, Fistname ve lastname'e erişemiyor.
    }
}

person.sayMyName();
person.sayMyNameArrow();

//Arrow functionlar çağrıldığı zaman çağrıldığı yerin üzerindeki classı hedef alır. Html üzerinde window objesini verecektir.
//Normal functionlar ise içerisinde bulunduğu objeyi veya sınıfı hedef alacaktır.
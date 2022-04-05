const cars = [
    {
        id:1,
        brand:"Lamborginhi",
        model:"Avendator",
        year:2021
    },
    {
        id:2,
        brand:"Porsche",
        model:"Taycan",
        year:2021
    },
    {
        id:3,
        brand:"Toyota",
        model:"Corolla",
        year:2015
    },
    {
        id:4,
        brand:"Mercedes Benz",
        model:"Maybach S 650",
        year:2021
    }
];

// console.log(cars);

const newCars = [...cars,{id:5,brand:"Tofaş",model:"Şahin SLX",year:1996}];
//... yani spread operatörü ile cars içerisindeki değerleri sırasıyla buraya aktar demiş olduk.

// console.log(newCars);

const carsCopy = [...cars]; // kopyalama işlemi

// console.log(carsCopy); 

const carsCopy2 = [...cars, ...newCars]; // birleştirme işlemi
// console.log(carsCopy2);

//fonksiyonlara parametre olarak vererekte kullanılabilir.

const [lamborginhi,porsche,...otherCars] = [...newCars]; //arrayleri parçalayabiliyoruz.
console.log(lamborginhi,porsche,otherCars);
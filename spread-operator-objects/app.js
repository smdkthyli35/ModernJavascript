const user = {
    firstName:"Samed",
    lastName:"Kütahyalı"
};

const address = {
    country:"Turkey",
    city:"İzmir",
    street:"Barbaros"
};

const userAddress = {...user,...address};
console.log(userAddress);

// const newUser = {...user}; //kopyalama işlemi
// console.log(newUser);


const newUserWithId = {id:1, ...user};
// console.log(newUserWithId);

// const newUser = {...user};
// console.log(newUser);

// user.firstName = "Arman";
// console.log(newUser);

const {country,...newUser} = {...userAddress};
console.log(country,newUser);
type Person={
    name:string;
    age:number;
    isStudent:boolean;
    address:{city:string,country:string}
}

    const person1:Person={
    name:"Divyanshi",
    age:21,
    isStudent:true,
    address:{
        city:"Ankleshwar",
        country:"India"
    }

}

const person2: Person = {
  name: "Hetvi",
  age: 18,
  isStudent: true,
  address: {
    city: "Vadodara",
    country: "India",
  },
};

console.log(person1.name);
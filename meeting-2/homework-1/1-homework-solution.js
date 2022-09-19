function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owners = [];

  this.getCarInfo = function () {
    return `${make} ${model} released in ${year}`;
  };

  this.addOwner = function (owner) {
    this.owners.push(owner);
  };

  this.removeOwner = function (owner) {
    return this.owners.shift(owner);
  };

  this.getOwnersCount = function () {
    return this.owners.length;
  };

  this.getOwnerNames = function () {
    return this.owners.map((person) => `${person.name} ${person.surname}`);
  };

  this.getFullInfo = function () {
    return `${this.make} ${this.model} from ${this.year}. ${
      this.owners.length
    } person owns this car. These are - ${this.owners.map(
      (owner) => ` ${owner.name} ${owner.surname}`
    )}`;
  };
}

function Person(name, surname, age, gender, cars) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = [];

  this.fulName = function () {
    return `${name} ${surname}`;
  };
  this.countCars = function () {
    return this.cars.length;
  };
  this.buysCar = function (car) {
    this.cars.push(car);
    car.addOwner(this);
  };
  this.sellsCar = function (car) {
    for (var i = 0; i < this.cars.length; i++) {
      if (this.cars[i] === car) {
        this.cars.splice(i, 1);
        i--;
      }
    }
    car.removeOwner(this);
  };

  this.getAllCarsInfo = function () {
    return `${this.name} owns this cars: ${this.cars.map(
      (item) => ` ${item.getCarInfo()}`
    )}.`;
  };
}

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fulName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fulName: ilona.fulName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});

// console.log({
//   daniel: {
//     fullName: daniel916.fullName(),
//     countCars: daniel916.countCars(),
//     getAllCarsInfo: daniel916.getAllCarsInfo(),
//   },
//   elon: {
//     fullName: ilona.fullName(),
//     countCars: ilona.countCars(),
//     getAllCarsInfo: ilona.getAllCarsInfo(),
//   },
//   duti_picoti: {
//     getOwnersCount: duti_picoti.getOwnersCount(),
//     getOwnerNames: duti_picoti.getOwnerNames(),
//     getFullInfo: duti_picoti.getFullInfo(),
//     getCarInfo: duti_picoti.getCarInfo(),
//   },
//   stodevianosto: {
//     getOwnersCount: stodevianosto.getOwnersCount(),
//     getOwnerNames: stodevianosto.getOwnerNames(),
//     getFullInfo: stodevianosto.getFullInfo(),
//     getCarInfo: stodevianosto.getCarInfo(),
//   },
// });

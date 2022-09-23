class Vechile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vechile {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
    this.owners = [];
  }

  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  }
  addOwner(owner) {
    this.owners.push(owner);
  }
  removeOwner(owner) {
    return this.owners.shift(owner);
  }
  getOwnersCount() {
    return this.owners.length;
  }
  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  }
  getFullInfo() {
    return `${this.make} ${this.model} from ${
      this.year
    }. ${this.getOwnersCount()} person owns this car. These are - ${this.owners
      ?.map((owner) => `${owner.fullName()}`)
      .join(", ")}`;
  }
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }
  countCars() {
    return this.cars?.length;
  }
  buysCar(car) {
    this.cars.push(car);
    car.addOwner(this);
  }
  sellsCar(car) {
    for (var i = 0; i < this.cars.length; i++) {
      if (this.cars[i] === car) {
        this.cars.splice(i, 1);
        i--;
      }
    }
    car.removeOwner(this);
  }
  getAllCarsInfo() {
    return `${this.name} owns this cars: ${this.cars?.map(
      (item) => ` ${item.getCarInfo()}`
    )}.`;
  }
}

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti);
daniel916.buysCar(stodevianosto);
daniel916.sellsCar(duti_picoti);
ilona.buysCar(stodevianosto);
ilona.buysCar(duti_picoti);

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
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

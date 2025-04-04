import { Car } from "./Car";
import { Truck } from "./Truck";
import { Motorcycle } from "./Motorcycle";
import { Garage } from "./Garage";


// Create a garage
const myGarage = new Garage();


// Add cars
const myCar = new Car("Toyota", "Camry", 2022, 5);
const myTruck = new Truck("Volvo", "FH16", 2019, 20000);
const myBike = new Motorcycle("Harley-Davidson", "Iron 883", 2021, false);


// Start the engines
myCar.startEngine();
myTruck.startEngine();
myBike.startEngine();


// Add to garage
myGarage.addVehicle(myCar);
myGarage.addVehicle(myTruck);
myGarage.addVehicle(myBike);


// Display a list of vehicles in the garage
myGarage.listVehicles();

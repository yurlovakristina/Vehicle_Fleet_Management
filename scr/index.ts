import { Car } from "./Car";
import { Truck } from "./Truck";
import { Motorcycle } from "./Motorcycle";
import { Garage } from "./Garage";

// Создаем гараж
const myGarage = new Garage();

// Добавляем машины
const myCar = new Car("Toyota", "Camry", 2022, 5);
const myTruck = new Truck("Volvo", "FH16", 2019, 20000);
const myBike = new Motorcycle("Harley-Davidson", "Iron 883", 2021, false);

// Запускаем двигатели
myCar.startEngine();
myTruck.startEngine();
myBike.startEngine();

// Добавляем в гараж
myGarage.addVehicle(myCar);
myGarage.addVehicle(myTruck);
myGarage.addVehicle(myBike);

// Выводим список транспорта в гараже
myGarage.listVehicles();

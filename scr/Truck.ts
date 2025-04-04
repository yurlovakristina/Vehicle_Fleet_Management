import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
    private cargoCapacity: number;  // Вместимость груза в кг

    constructor(brand: string, model: string, year: number, cargoCapacity: number) {
        super(brand, model, year);
        this.cargoCapacity = cargoCapacity;
    }

    startEngine(): void {
        console.log(`🚛 Грузовик ${this.getInfo()} запускает двигатель...`);
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}

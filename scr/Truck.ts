import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
    private cargoCapacity: number;  

    constructor(brand: string, model: string, year: number, cargoCapacity: number) {
        super(brand, model, year);
        this.cargoCapacity = cargoCapacity;
    }

    startEngine(): void {
        console.log(`🚛 Truck ${this.getInfo()} starts the engine...`);
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}

import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    private passengers: number;

    constructor(brand: string, model: string, year: number, passengers: number) {
        super(brand, model, year);
        this.passengers = passengers;
    }

    startEngine(): void {
        console.log(`🚗 Automobile ${this.getInfo()} starts...`);
    }

    getPassengers(): number {
        return this.passengers;
    }
}

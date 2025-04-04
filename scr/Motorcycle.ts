import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    private hasSidecar: boolean;

    constructor(brand: string, model: string, year: number, hasSidecar: boolean) {
        super(brand, model, year);
        this.hasSidecar = hasSidecar;
    }

    startEngine(): void {
        console.log(`🏍️ Motorbike ${this.getInfo()} engine roars...`);
    }

    hasSideCar(): boolean {
        return this.hasSidecar;
    }
}

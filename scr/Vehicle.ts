export abstract class Vehicle {
    protected brand: string;
    protected model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    abstract startEngine(): void;

    getInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

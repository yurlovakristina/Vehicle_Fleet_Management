import { Vehicle } from "./Vehicle";

export class Garage {
    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
        console.log(`✅ Added: ${vehicle.getInfo()}`);
    }

    listVehicles(): void {
        console.log("📋 List of vehicles in the garage:");
        this.vehicles.forEach(v => console.log(` - ${v.getInfo()}`));
    }
}

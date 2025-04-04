import { Vehicle } from "./Vehicle";

export class Garage {
    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
        console.log(`✅ Добавлено: ${vehicle.getInfo()}`);
    }

    listVehicles(): void {
        console.log("📋 Список транспорта в гараже:");
        this.vehicles.forEach(v => console.log(` - ${v.getInfo()}`));
    }
}

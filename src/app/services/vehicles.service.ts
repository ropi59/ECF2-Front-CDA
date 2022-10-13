import {Injectable} from "@angular/core";
import {User} from "../models/users.model";
import {Vehicle} from "../models/vehicles.model";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService{
  vehicles: Vehicle[] = [
    new Vehicle(1, "car", "Peugeot", "508 SW", "FT-548-RS", "B", 59, "Disponible","./assets/vehicles/508.png"),
    new Vehicle(2, "car", "Ferrari", "LaFerrari", "LA-738-RI", "A", 179, "Disponible","./assets/vehicles/laferrari.png"),
    new Vehicle(3, "car", "Cadillac", "Escalade", "ES-414-DE", "D", 149, "Indisponible","./assets/vehicles/escalade.png"),
    new Vehicle(4, "car", "Aixam", "CityGo", "PY-111-RS", "B", 9, "Disponible","./assets/vehicles/aixam.png"),
    new Vehicle(5, "motorcycle", "Suzuki", "GSXR-1000", "GS-564-XR", "A", 39, "Disponible","./assets/vehicles/gsxr1000.jfif"),
    new Vehicle(6, "motorcycle", "Harley-Davidson", "SPORTSTER-S", "FT-548-RS", "A", 49, "Indisponible","./assets/vehicles/sportster-s.png"),
    new Vehicle(7, "truck", "Tesla", "Semi-truck", "TS-758-LA", "A", 449, "Disponible","./assets/vehicles/semiTesla.png"),
    new Vehicle(8, "utility", "Fiat", "Ducato", "DU-547-TO", "C", 119, "Indisponible","./assets/vehicles/ducato.png"),

  ]

  getAllVehicles(): Vehicle[]{
    return this.vehicles;
  }

  getVehicleById(vehicleId: number): Vehicle {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === vehicleId);
    if (!vehicle) {
      throw new Error ('Véhicule non trouvé');
    }else {
      return vehicle;
    }
  }

  addVehicle(vehicle: Vehicle)  {
    vehicle.id = this.vehicles.length + 1;
    this.vehicles.push(vehicle)
  }

  deleteById(vehicleId : number) : void {
    this.vehicles.splice(vehicleId - 1, 1);
  }
}

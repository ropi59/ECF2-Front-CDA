import {Injectable} from "@angular/core";
import {Vehicle} from "../models/vehicles.model";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService{
  vehicleUpdated!: Vehicle;
  /**
   * Liste de tous les véhicules
   */
  vehicles: Vehicle[] = [
    new Vehicle(1, "car", "Peugeot", "508 SW", "FT-548-RS", "B", 59, "Disponible","./assets/vehicles/508.png"),
    new Vehicle(2, "car", "Ferrari", "LaFerrari", "LA-738-RI", "A", 179, "Disponible","./assets/vehicles/laferrari.png"),
    new Vehicle(3, "car", "Cadillac", "Escalade", "ES-414-DE", "D", 149, "Indisponible","./assets/vehicles/escalade.png"),
    new Vehicle(4, "car", "Aixam", "CityGo", "PY-111-RS", "B", 9, "Disponible","./assets/vehicles/aixam.png"),
    new Vehicle(5, "motorcycle", "Suzuki", "GSXR-1000", "GS-564-XR", "A", 39, "Disponible","./assets/vehicles/gsxr1000.png"),
    new Vehicle(6, "motorcycle", "Harley-Davidson", "SPORTSTER-S", "FT-548-RS", "A", 49, "Indisponible","./assets/vehicles/sportster-s.png"),
    new Vehicle(7, "truck", "Tesla", "Semi-truck", "TS-758-LA", "A", 449, "Disponible","./assets/vehicles/semiTesla.png"),
    new Vehicle(8, "utility", "Fiat", "Ducato", "DU-547-TO", "C", 119, "Indisponible","./assets/vehicles/ducato.png"),
  ]

  /**
   * récupère tous les véhicules
   */
  getAllVehicles(): Vehicle[]{
    return this.vehicles;
  }

  /**
   * Récupère un véhicule par son id
   * @param vehicleId l'id du véhicule à trouver
   */
  getVehicleById(vehicleId: number): Vehicle {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === vehicleId);
    if (!vehicle) {
      throw new Error ('Véhicule non trouvé');
    }else {
      return vehicle;
    }
  }

  /**
   * Ajoute un véhicule
   * @param vehicle le véhicule à ajouter
   */
  addVehicle(vehicle: Vehicle)  {
    console.log(vehicle);
    vehicle.id = this.vehicles.length + 1;
    this.vehicles.push(vehicle)
  }

  /**
   * Supprime un véhicule par son id
   * @param vehicleId l'id du véhicule à supprimer
   */
  deleteById(vehicleId : number) : void {
    this.vehicles.splice(vehicleId - 1, 1);
  }

  /**
   * Met à jour les informations d'un véhicule
   * @param vehicleToUpdate les informations mises à jour
   * @param vehicleId l'id du véhicule à mettre à jour
   */
  updateVehicle(vehicleToUpdate: Vehicle, vehicleId: number){
    this.vehicleUpdated = (this.getVehicleById(vehicleId));
    this.vehicleUpdated.setGenre(vehicleToUpdate.genre);
    this.vehicleUpdated.setBrand(vehicleToUpdate.brand);
    this.vehicleUpdated.setModel(vehicleToUpdate.model);
    this.vehicleUpdated.setImmat(vehicleToUpdate.immat);
    this.vehicleUpdated.setState(vehicleToUpdate.state);
    this.vehicleUpdated.setPrice(vehicleToUpdate.price);
    this.vehicleUpdated.setDisponibility(vehicleToUpdate.disponibility)
  }
}

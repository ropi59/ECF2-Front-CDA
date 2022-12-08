import {Injectable} from "@angular/core";
import {Vehicle} from "../models/vehicles.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService{
  vehicleUpdated!: Vehicle;

  constructor(private http: HttpClient) {
  }

  /**
   * récupère tous les véhicules
   */
  getAllVehicles(): Observable<Vehicle[]>{
    return this.http.get <Vehicle[]>('http://localhost:8080/vehicles')
  }

  /**
   * Récupère un véhicule par son id
   * @param vehicleId l'id du véhicule à trouver
   */
  getVehicleById(vehicleId: number): Observable<Vehicle> {
    return this.http.get <Vehicle>(`http://localhost:8080/vehicles/${vehicleId}`)
  }

  /**
   * Ajoute un véhicule
   * @param vehicle le véhicule à ajouter
   */
  addVehicle(vehicle: Vehicle)  {
    this.http.post(`http://localhost:8080/vehicles`, vehicle )
  }

  /**
   * Supprime un véhicule par son id
   * @param vehicleId l'id du véhicule à supprimer
   */
  deleteById(vehicleId : number) : void {
    this.http.delete(`http://localhost:8080/vehicles/${vehicleId}` )
  }

  /**
   * Met à jour les informations d'un véhicule
   * @param vehicleToUpdate les informations mises à jour
   * @param vehicleId l'id du véhicule à mettre à jour
   */
  updateVehicle(vehicleToUpdate: Vehicle, vehicleId: number){
    this.getVehicleById(vehicleId).subscribe(data => this.vehicleUpdated = data);
    this.vehicleUpdated.setGenre(vehicleToUpdate.genre);
    this.vehicleUpdated.setBrand(vehicleToUpdate.brand);
    this.vehicleUpdated.setModel(vehicleToUpdate.model);
    this.vehicleUpdated.setImmat(vehicleToUpdate.immat);
    this.vehicleUpdated.setState(vehicleToUpdate.state);
    this.vehicleUpdated.setPrice(vehicleToUpdate.price);
    this.vehicleUpdated.setDisponibility(vehicleToUpdate.disponibility)
    this.http.put(`http://localhost:8080/vehicles/${vehicleId}`, this.vehicleUpdated)
  }
}

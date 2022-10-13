import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../models/vehicles.model";
import {VehiclesService} from "../../../services/vehicles.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicle!: Vehicle;
  vehicles!: Vehicle[];
  /**
   * booléens pour savoir si on doit afficher ou non le formulaire
   */
  newVehicle!: boolean;
  updateVehicle!: boolean;

  constructor(private vehicleService: VehiclesService,) { }

  ngOnInit(): void {
    this.newVehicle = false;
    this.updateVehicle = false;
    /**
     * récupère la liste de tous les véhicules
     */
    this.vehicles = this.vehicleService.getAllVehicles();
  }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouveau véhicule
   */
  createVehicle() {
    this.newVehicle = true;
    this.updateVehicle = false;
  }

  /**
   * masque le formulaire  de création quand on le valide ou quand on annule la saisie
   */
  cancelNewVehicle() {
    this.newVehicle = false;
  }

  /**
   * Récupère un véhicule par son ID en vu de le modifier
   * @param userId id du client
   */
  modifyVehicle(vehicleId : number){
    this.updateVehicle = true;
    this.newVehicle = false;
    this.vehicle = this.vehicleService.getVehicleById(vehicleId)

  }

  /**
   * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
   */
  cancelUpdateVehicle() {
    this.updateVehicle = false
  }
}

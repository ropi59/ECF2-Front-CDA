import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../../models/vehicles.model";
import {VehiclesService} from "../../../services/vehicles.service";
import {VehicleListComponent} from "../vehicle-list/vehicle-list.component";
import {Disponibility} from "../../../models/disponibility";

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  Disponibility!: Disponibility;

  constructor(private vehicleService : VehiclesService,
              private vehicleList: VehicleListComponent) { }

  ngOnInit(): void {
  }

  /**
   * Demande au service de supprimer un véhicule par son id
   */
  deleteVehicle() {
    this.vehicleService.deleteById(this.vehicle.id)
  }

  /**
   * Demande au service de modifier un véhicule par son id
   */
  modifyVehicle(){
    this.vehicleList.modifyVehicle(this.vehicle.id);
  }
}

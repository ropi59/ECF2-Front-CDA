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
  newVehicle!: boolean;
  updateVehicle!: boolean;

  constructor(private vehicleService: VehiclesService,) { }

  ngOnInit(): void {
    this.newVehicle = false;
    this.updateVehicle = false;
    this.vehicles = this.vehicleService.getAllVehicles();
  }

  createVehicle() {
    this.newVehicle = true;
  }

  cancelNewVehicle() {
    this.newVehicle = false;
  }

  modifyVehicle(vehicleId : number){
    this.updateVehicle = true;
    this.vehicle = this.vehicleService.getVehicleById(vehicleId)

  }

  cancelUpdateVehicle() {
    this.updateVehicle = false
  }
}

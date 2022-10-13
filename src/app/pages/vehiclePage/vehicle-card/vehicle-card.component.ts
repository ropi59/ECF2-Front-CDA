import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../../models/vehicles.model";
import {VehiclesService} from "../../../services/vehicles.service";
import {VehicleListComponent} from "../vehicle-list/vehicle-list.component";

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle!: Vehicle;

  constructor(private vehicleService : VehiclesService,
              private vehicleList: VehicleListComponent) { }

  ngOnInit(): void {
  }

  deleteVehicle() {
    this.vehicleService.deleteById(this.vehicle.id)
  }

  modifyVehicle() {
    this.vehicleList.modifyVehicle(this.vehicle.id)
  }
}

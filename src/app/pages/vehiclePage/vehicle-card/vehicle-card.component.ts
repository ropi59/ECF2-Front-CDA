import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../../models/vehicles.model";
import {UsersService} from "../../../services/users.service";
import {UserListComponent} from "../../userPage/user-list/user-list.component";
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
    this.vehicleList.modifyUser(this.vehicle.id)
  }
}

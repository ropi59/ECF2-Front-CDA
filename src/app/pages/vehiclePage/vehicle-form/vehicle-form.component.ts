import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../models/vehicles.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {VehiclesService} from "../../../services/vehicles.service";
import {VehicleListComponent} from "../vehicle-list/vehicle-list.component";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  newvehicle!: Vehicle;

  formVehicle : FormGroup = this.formBuilder.group({
    type: '',
    brand: '',
    model: '',
    immat: '',
    state: '',
    price: 0,
    disponibility: ''
  })

  constructor(private vehicleService : VehiclesService,
              private formBuilder : FormBuilder,
              private vehicleList : VehicleListComponent) { }

  ngOnInit(): void {
  }

  submit(){
    this.vehicleService.addVehicle(this.formVehicle.value)
  }

  cancel(){
    this.vehicleList.cancelNewVehicle()
  }

}

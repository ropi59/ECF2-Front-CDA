import {Component, Input, OnInit} from '@angular/core';
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
  @Input() vehicle!: Vehicle;

  formVehicle : FormGroup = this.formBuilder.group({
    genre: '',
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
    this.formVehicle.patchValue({
      genre: this.vehicle.genre,
      brand: this.vehicle.brand,
      model: this.vehicle.model,
      immat: this.vehicle.immat,
      state: this.vehicle.state,
      price: this.vehicle.price,
      disponibility: this.vehicle.disponibility
    })
  }

  submit(){
    if (this.vehicleList.newVehicle){
      this.vehicleService.addVehicle(this.formVehicle.value)
    } else {
      this.vehicleService.updateVehicle(this.formVehicle.value, this.vehicle.id)
    }
    this.cancel();

  }

  cancel(){
    this.vehicleList.cancelNewVehicle()
    this.vehicleList.cancelUpdateVehicle();
  }

}

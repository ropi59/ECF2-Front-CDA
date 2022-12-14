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

  formTitle: string = "Ajouter véhicule";

  /**
   * Création du formulaire pour les véhicules
   */
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
    /**
     * Prérempli le formulaire lorsque l'on veut modifier un véhicule
     */
    this.formVehicle.patchValue({
      genre: this.vehicle.genre,
      brand: this.vehicle.brand,
      model: this.vehicle.model,
      immat: this.vehicle.immat,
      state: this.vehicle.state,
      price: this.vehicle.price,
      disponibility: this.vehicle.disponibility
    })

    this.displayTitle();
  }

  /**
   *  Demande au service de traiter le contenu du formulaire à la validation
   */
  submit(){
    if (this.vehicleList.newVehicle){
      this.vehicleService.addVehicle(this.formVehicle.value)
    } else {
      this.vehicleService.updateVehicle(this.formVehicle.value, this.vehicle.id)
    }
    this.cancel();

  }

  /**
   * cache l'affichage du formulaire
   */
  cancel(){
    this.vehicleList.cancelNewVehicle()
    this.vehicleList.cancelUpdateVehicle();
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle(){
    if (this.vehicleList.updateVehicle){
      this.formTitle = "Modifier véhicule"
    }else{
      this.formTitle = "Ajouter véhicule"
    }
  }

}

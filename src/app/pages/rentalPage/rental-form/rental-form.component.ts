import {Component, Input, OnInit} from '@angular/core';
import {Rental} from "../../../models/rental.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RentalsService} from "../../../services/rentals.service";
import {RentalListComponent} from "../rental-list/rental-list.component";
import {User} from "../../../models/users.model";
import {Vehicle} from "../../../models/vehicles.model";
import {UsersService} from "../../../services/users.service";
import {VehiclesService} from "../../../services/vehicles.service";

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.scss']
})
export class RentalFormComponent implements OnInit {
  @Input() rental!: Rental;
  users!: User[];
  vehicles!: Vehicle[];
  user!: User;
  vehicle!: Vehicle;

  formTitle: string = "Nouvelle location"

  formRental : FormGroup = this.formBuilder.group({
    user : User,
    vehicle : Vehicle,
    startDate : Date,
    endDate : Date
  })

  constructor(private rentalService : RentalsService,
              private formBuilder : FormBuilder,
              private rentalList : RentalListComponent,
              private userService : UsersService,
              private vehicleService : VehiclesService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => this.users = data);
    this.vehicleService.getAllVehicles().subscribe(data => this.vehicles = data);

    /**
     * Prérempli le formulaire en cas de mise à jour d'une location
     */
    this.formRental.patchValue({
      user : this.rental.user.id + this.rental.user.name + this.rental.user.firstName + this.rental.user.email,
      vehicle : this.rental.vehicle.id + this.rental.vehicle.brand + this.rental.vehicle.model,
      startDate : this.rental.startDate,
      endDate : this.rental.endDate
    })

    /**
     * Affiche l'entête du formulaire
     */
    this.displayTitle();

  }

  /**
   * Demande au service de traiter le contenu du formulaire à la validation
   */
  submit(){
    if (this.rentalList.newRental){
      //Récupération du client
      let identity = this.formRental.controls['user'].value;
      let identityTab = identity.split(" ");
      this.userService.getUserById(Number(identityTab[0])).subscribe(data => this.user = data);
      //Récupération du véhicule
      let vehicle = this.formRental.controls['vehicle'].value;
      let vehicleTab = vehicle.split(" ")
      this.vehicleService.getVehicleById(Number(vehicleTab[0]));
      //Récupération des dates
      let startDateValue = this.formRental.controls['startDate'].value;
      let startDate = new Date(startDateValue)
      let endDateValue = this.formRental.controls['endDate'].value;
      let endDate = new Date(endDateValue)
      //envoi de la demande de création au service
      this.rentalService.addRental(this.user, this.vehicle, startDate, endDate)
    } else {
      //Récupération des dates
      let startDateValue = this.formRental.controls['startDate'].value;
      let startDate = new Date(startDateValue)
      let endDateValue = this.formRental.controls['endDate'].value;
      let endDate = new Date(endDateValue)
      //envoi de la demande de mise à jour au service
      this.rentalService.updateRental(this.user, this.vehicle, startDate, endDate, this.rental.id)
    }
    this.cancel();
  }

  /**
   * Cache l'affichage du formulaire
   */
  cancel(){
    this.rentalList.cancelNewRental();
    this.rentalList.cancelUpdateRental();
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle() {
    if (this.rentalList.updateRental) {
      this.formTitle = "Modifier location"
    } else {
      this.formTitle = "Nouvelle location"
    }
  }

}

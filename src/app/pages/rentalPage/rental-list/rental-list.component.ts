import { Component, OnInit } from '@angular/core';
import {Rental} from "../../../models/rental.model";
import {RentalsService} from "../../../services/rentals.service";
import {User} from "../../../models/users.model";
import {UsersService} from "../../../services/users.service";
import {Vehicle} from "../../../models/vehicles.model";
import {VehiclesService} from "../../../services/vehicles.service";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rental!: Rental;
  rentals!: Rental[];
  users!: User[];
  vehicles!: Vehicle[];
  /**
   * booléens pour savoir si on doit afficher ou non le formulaire
   */
  newRental!: boolean;
  updateRental!: boolean;

  constructor(private rentalService: RentalsService,
              private userService: UsersService,
              private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.newRental = false;
    this.updateRental = false;
    /**
     * Récupère la liste de toutes les locations
     */
    this.rentalService.getAllRentals().subscribe(data => this.rentals = data);
    /**
     * Récupère la liste de tous les clients
     */
    this.userService.getAllUsers().subscribe(data => this.users = data);
    /**
     * Récupère la liste de tous les vehicules
     */
    this.vehicleService.getAllVehicles().subscribe(data => this.vehicles = data);

  }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouvelle location
   */
  createRental() {
    this.newRental = true;
    this.updateRental = false;
  }

  /**
   * Masque le formulaire de création quand on le valide ou quand on annule la saisie
   */
  cancelNewRental(){
    this.newRental = false;
  }

  /**
   * Récupère une location par son ID en vue de la modifier
   * @param rentalId
   */
  modifyRental(rentalId: number){
    this.updateRental = true;
    this.newRental = false;
    this.rentalService.getRentalById(rentalId).subscribe(data => this.rental = data);
  }

  /**
   * Masque le formulaire de mise à jour quand on le valide ou quand on annule la saisie
   */
  cancelUpdateRental(){
    this.updateRental = false;
  }

}

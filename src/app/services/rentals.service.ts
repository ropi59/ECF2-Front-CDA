import {Injectable} from "@angular/core";
import {Rental} from "../models/rental.model";
import {UsersService} from "./users.service";
import {VehiclesService} from "./vehicles.service";
import {Vehicle} from "../models/vehicles.model";
import {User} from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export  class RentalsService{
  rentalUpdated!: Rental;

  /**
   * Constructeur
   * @param userService pour récupérer les clients
   * @param vehicleService pour récupérer les véhicules
   */
  constructor(private userService: UsersService,
              private vehicleService: VehiclesService) {
  }

  /**
   * Liste des locations
   */
  rentals: Rental[] = [
    new Rental(1, this.userService.getUserById(1), this.vehicleService.getVehicleById(2), new Date(), new Date()),
    new Rental(2, this.userService.getUserById(2), this.vehicleService.getVehicleById(3), new Date(), new Date()),
    new Rental(3, this.userService.getUserById(3), this.vehicleService.getVehicleById(5), new Date(), new Date()),
    new Rental(4, this.userService.getUserById(4), this.vehicleService.getVehicleById(8), new Date(), new Date()),
    new Rental(5, this.userService.getUserById(2), this.vehicleService.getVehicleById(6), new Date(), new Date()),
    new Rental(6, this.userService.getUserById(1), this.vehicleService.getVehicleById(1), new Date(), new Date()),
  ]

  /**
   * Récupère toutes les locations
   */
  getAllRentals(): Rental[]{
    return this.rentals;
  }

  /**
   * Récupère une location par son id
   * @param rentalId id de la location à trouver
   */
  getRentalById(rentalId: number): Rental {
    const rental = this.rentals.find(rental => rental.getId() === rentalId);
    if (!rental){
      throw new Error('Location non trouvée.');
    } else {
      return rental;
    }
  }

  /**
   * Créer une location
   * @param user le client pour la location
   * @param vehicle le véhicule choisit
   * @param startDate la date de début de la location
   * @param endDate la date de fin de la location
   */
  addRental(user: User, vehicle: Vehicle, startDate: Date, endDate: Date){
    let id = this.rentals.length + 1;
    let rental = new Rental(id, user, vehicle, startDate, endDate);
    this.rentals.push(rental)
    console.log(rental)
  }

  /**
   * Supprime une location par son id
   * @param rentalId l'id de la location à supprimer
   */
  deleteRentalById(rentalId: number) {
    this.rentals.splice(rentalId - 1, 1);
  }

  /**
   * Met à jour une location
   * @param user le nouveau client pour la location
   * @param vehicle le nouveau véhicule choisit
   * @param startDate la nouvelle date de début
   * @param endDate la nouvelle date de fin
   * @param rentalId l'id de la location
   */
  updateRental(user: User, vehicle: Vehicle, startDate: Date, endDate: Date, rentalId: number){
    this.rentalUpdated = (this.getRentalById(Number(rentalId)));
    this.rentalUpdated.setUser(user);
    this.rentalUpdated.setVehicle(vehicle);
    this.rentalUpdated.setStartDate(startDate);
    this.rentalUpdated.setEndDate(endDate);
  }

}



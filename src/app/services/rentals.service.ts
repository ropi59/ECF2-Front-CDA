import {Injectable} from "@angular/core";
import {Rental} from "../models/rental.model";
import {UsersService} from "./users.service";
import {VehiclesService} from "./vehicles.service";
import {Vehicle} from "../models/vehicles.model";
import {User} from "../models/users.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export  class RentalsService{
  rentalUpdated!: Rental;
  rentals!: Rental[];
  rental!: Rental;

  /**
   * Constructeur
   * @param userService pour récupérer les clients
   * @param vehicleService pour récupérer les véhicules
   */
  constructor(private userService: UsersService,
              private vehicleService: VehiclesService,
              private http: HttpClient) {
  }

  /**
   * Récupère toutes les locations
   */
  getAllRentals(): Observable<Rental[]>{
    return this.http.get <Rental[]>('http://localhost:8080/rentals')
  }

  /**
   * Récupère une location par son id
   * @param rentalId id de la location à trouver
   */
  getRentalById(rentalId: number): Observable<Rental> {
    return this.http.get <Rental>(`http://localhost:8080/rentals/${rentalId}`)
  }

  /**
   * Créer une location
   * @param user le client pour la location
   * @param vehicle le véhicule choisi
   * @param startDate la date de début de la location
   * @param endDate la date de fin de la location
   */
  addRental(user: User, vehicle: Vehicle, startDate: Date, endDate: Date){
    this.rental.setUser(user);
    this.rental.setVehicle(vehicle);
    this.rental.setStartDate(startDate);
    this.rental.setEndDate(endDate)
    this.http.post(`http://localhost:8080/rentals`, this.rental )
  }

  /**
   * Supprime une location par son id
   * @param rentalId l'id de la location à supprimer
   */
  deleteRentalById(rentalId: number) {
    this.http.delete(`http://localhost:8080/users/${rentalId}` )
  }

  /**
   * Met à jour une location
   * @param user le nouveau client pour la location
   * @param vehicle le nouveau véhicule choisi
   * @param startDate la nouvelle date de début
   * @param endDate la nouvelle date de fin
   * @param rentalId l'id de la location
   */
  updateRental(user: User, vehicle: Vehicle, startDate: Date, endDate: Date, rentalId: number){
    this.getRentalById(Number(rentalId)).subscribe(data => this.rentalUpdated = data);
    this.rentalUpdated.setUser(user);
    this.rentalUpdated.setVehicle(vehicle);
    this.rentalUpdated.setStartDate(startDate);
    this.rentalUpdated.setEndDate(endDate);
    this.http.put(`http://localhost:8080/rentals/${rentalId}`, this.rentalUpdated)
  }

}



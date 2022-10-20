import {User} from "./users.model";
import {Vehicle} from "./vehicles.model";

export class Rental {
  id!: number;
  user!: User;
  vehicle!: Vehicle;
  startDate!: Date;
  endDate!: Date;

  /**
   * Constructeur d'une location
   * @param id id de la location
   * @param user client associé à la location
   * @param vehicle véhicule loué
   * @param startDate date de début de la location
   * @param endDate date de fin de la location
   */
  constructor(id: number, user: User, vehicle: Vehicle, startDate: Date, endDate: Date) {
    this.id = id;
    this.user = user;
    this.vehicle = vehicle;
    this.startDate = startDate;
    this.endDate = endDate;
  }


  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getUser(): User {
    return this.user;
  }

  setUser(value: User) {
    this.user = value;
  }

  getVehicle(): Vehicle {
    return this.vehicle;
  }

  setVehicle(value: Vehicle) {
    this.vehicle = value;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  setStartDate(value: Date) {
    this.startDate = value;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  setEndDate(value: Date) {
    this.endDate = value;
  }
}

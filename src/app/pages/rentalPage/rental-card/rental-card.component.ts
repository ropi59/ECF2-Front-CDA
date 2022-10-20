import {Component, Input, OnInit} from '@angular/core';
import {Rental} from "../../../models/rental.model";
import {RentalsService} from "../../../services/rentals.service";
import {RentalListComponent} from "../rental-list/rental-list.component";

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent implements OnInit {
  @Input() rental!: Rental;

  constructor(private rentalService: RentalsService,
              private rentalList : RentalListComponent) { }

  ngOnInit(): void {
  }

  /**
   * Methode pour envoyer l'id de la location au service en vue de la supprimer
   */
  deleteRental(){
    this.rentalService.deleteRentalById(this.rental.id)
  }

  /**
   * Methode pour envoyer la location au service en vue de la modifier
   */
  modifyRental(){
    this.rentalList.modifyRental(this.rental.id);
  }

}

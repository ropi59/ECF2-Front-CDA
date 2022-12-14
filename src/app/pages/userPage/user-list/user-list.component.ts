import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/users.model";
import {UsersService} from "../../../services/users.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user!: User;
  users!: User[];
  /**
   * booléens pour savoir si on doit afficher ou non le formulaire
   */
  newUser!: boolean;
  updateUser!: boolean;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.newUser = false;
    this.updateUser = false;
    /**
     * récupère la liste de tous les utilisateurs
     */
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouvel utilisateur
   */
  createUser() {
    this.newUser = true;
    this.updateUser = false;
  }

  /**
   * masque le formulaire  de création quand on le valide ou quand on annule la saisie
   */
  cancelNewClient() {
    this.newUser = false;
  }

  /**
   * Récupère un client par son ID en vue de le modifier
   * @param userId id du client
   */
  modifyUser(userId: number){
    this.updateUser = true;
    this.newUser = false;
    this.userService.getUserById(userId).subscribe(data => this.user = data);
  }
  /**
   * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
   */
  cancelUpdateClient() {
    this.updateUser = false;

  }
}

import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup } from "@angular/forms";
import {User} from "../../../models/users.model";
import {UsersService} from "../../../services/users.service";
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
    @Input() user!: User;

    formTitle: string = "Ajouter client";

  /**
   * Création du formulaire pour les clients
   */
  formUser : FormGroup = this.formBuilder.group({
    name: '',
    firstName: '',
    email: ''
  })

  constructor(private userService : UsersService,
              private formBuilder : FormBuilder,
              private userList: UserListComponent) { }

  ngOnInit(): void {
    /**
     * Prérempli le formulaire en cas de mise à jour d'un client
     */
    this.formUser.patchValue({
      name: this.user.name,
      firstName: this.user.firstName,
      email: this.user.email
    })

    /**
     * Affiche l'entête du formulaire
     */
    this.displayTitle();
  }

  /**
   *  Demande au service de traiter le contenu du formulaire à la validation
   */
  submit(){
      if (this.userList.newUser){
        this.userService.addUser(this.formUser.value)
      }else {
       this.userService.updateUser(this.formUser.value, this.user.id);
      }
      this.cancel();
  }

  /**
   * cache l'affichage du formulaire
   */
  cancel() {
    this.userList.cancelNewClient();
    this.userList.cancelUpdateClient();
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle(){
    if (this.userList.updateUser){
      this.formTitle = "Modifier client"
    }else {
      this.formTitle = "Ajouter client"
    }
  }

}

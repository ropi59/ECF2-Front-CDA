import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/users.model";
import {UsersService} from "../../../services/users.service";
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;

  constructor(private userService : UsersService,
              private userList: UserListComponent) { }

  ngOnInit(): void {
  }

  /**
   * methode pour envoyer l'id de l'utilisateur au service en vue de le supprimer
   */
  deleteUser() {
    this.userService.deleteById(this.user.id)
  }
  /**
   * methode pour envoyer l'id de l'utilisateur au service en vue de le modifier
   */
  modifyUser() {
    this.userList.modifyUser(this.user.id);
  }
}

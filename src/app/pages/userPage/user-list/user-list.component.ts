import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/users.model";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user!: User;
  users!: User[];
  newUser!: boolean;
  updateUser!: boolean;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.newUser = false;
    this.updateUser = false;
    this.users = this.userService.getAllUsers();
  }

  createUser() {
    this.newUser = true;
  }

  cancelNewClient() {
    this.newUser = false;
  }

  modifyUser(userId: number){
    this.updateUser = true;
    this.user = this.userService.getUserById(userId);
  }

  cancelUpdateClient() {
    this.updateUser = false;
  }
}

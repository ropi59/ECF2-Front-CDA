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

    formUser : FormGroup = this.formBuilder.group({
    name: '',
    firstName: '',
    email: ''
  })

  constructor(private userService : UsersService,
              private formBuilder : FormBuilder,
              private userList: UserListComponent) { }

  ngOnInit(): void {
    this.formUser.patchValue({
      name: this.user.name,
      firstName: this.user.firstName,
      email: this.user.email
    })
  }

  submit(){
      if (this.userList.newUser){
        this.userService.addUser(this.formUser.value)
      }else {
       this.userService.updateUser(this.formUser.value, this.user.id);
      }
      this.cancel();
  }

  cancel() {
    this.userList.cancelNewClient();
    this.userList.cancelUpdateClient();
  }




}

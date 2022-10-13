import {Injectable} from "@angular/core";
import {User} from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  users: User[] = [
    new User(1, "Archer", "Mallory", "mallory.archer@mail.com"),
    new User(2, "Archer", "Sterling", "sterling.archer@mail.com"),
    new User(3, "Dylan", "Barry", "barry.dylan@mail.com"),
    new User(4, "Kane", "Lana", "lana.kane@mail.com"),
  ]

  getAllUsers(): User[]{
    return this.users;
  }

  getUserById(userId: number): User {
    const user = this.users.find(user => user.id === userId);
    if (!user) {
      throw new Error ('Client non trouvé');
    }else {
      return user;
    }
  }

  addUser(user: User)  {
    user.id = this.users.length + 1;
    this.users.push(user)
  }

  deleteById(userId : number) : void {
    this.users.splice(userId - 1, 1);
  }

  updateUser(userId: number) {
    console.log(this.getUserById(userId))
  }
}

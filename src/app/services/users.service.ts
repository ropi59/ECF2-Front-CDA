import {Injectable} from "@angular/core";
import {User} from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  userUpdated!: User;
  /**
   * Liste des clients
   */
  users: User[] = [
    new User(1, "Archer", "Mallory", "mallory.archer@mail.com"),
    new User(2, "Archer", "Sterling", "sterling.archer@mail.com"),
    new User(3, "Dylan", "Barry", "barry.dylan@mail.com"),
    new User(4, "Kane", "Lana", "lana.kane@mail.com"),
  ]

  /**
   * Récupère tous les clients
   */
  getAllUsers(): User[]{
    return this.users;
  }

  /**
   * récupère un client par son id
   * @param userId id du client à trouver
   */
  getUserById(userId: number): User {
    const user = this.users.find(user => user.id === userId);
    if (!user) {
      throw new Error ('Client non trouvé');
    }else {
      return user;
    }
  }

  /**
   * Ajoute un client
   * @param user les données du client à créer
   */
  addUser(user: User)  {
    user.id = this.users.length + 1;
    this.users.push(user)
  }

  /**
   * Supprime un client par son id
   * @param userId l'id du client à supprimer
   */
  deleteById(userId : number) : void {
    this.users.splice(userId - 1, 1);
  }

  /**
   * Met à jour les informations d'un client
   * @param userToUpdate les informations mises à jour
   * @param userId l'id du client à mettre à jour
   */
  updateUser(userToUpdate: User, userId: number){
    this.userUpdated = (this.getUserById(userId));
    this.userUpdated.setName(userToUpdate.name);
    this.userUpdated.setFirstName((userToUpdate.firstName));
    this.userUpdated.setEmail(userToUpdate.email)
  }
}

import {Injectable} from "@angular/core";
import {User} from "../models/users.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService{
  userUpdated!: User;
  users!: User[];

  constructor(private http: HttpClient) {
  }

  /**
   * Récupère tous les clients
   */
  getAllUsers(): Observable<User[]>{
    return this.http.get <User[]>('http://localhost:8080/users')
  }

  /**
   * récupère un client par son id
   * @param userId id du client à trouver
   */
  getUserById(userId: number): Observable<User> {
    return this.http.get <User>(`http://localhost:8080/users/${userId}`)
  }

  /**
   * Ajoute un client
   * @param user les données du client à créer
   */
  addUser(user: User)  {
    this.http.post(`http://localhost:8080/users`, user )
  }

  /**
   * Supprime un client par son id
   * @param userId l'id du client à supprimer
   */
  deleteById(userId : number) : void {
    this.http.delete(`http://localhost:8080/users/${userId}` )
  }

  /**
   * Met à jour les informations d'un client
   * @param userToUpdate les informations mises à jour
   * @param userId l'id du client à mettre à jour
   */
  updateUser(userToUpdate: User, userId: number){
    this.http.put(`http://localhost:8080/users/${userId}`, userToUpdate)
  }

}

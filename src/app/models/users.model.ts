export class User {
  id!: number;
  name!: string;
  firstName!: string;
  email!: string;

  /**
   * Contructeur d'un client
   * @param id id du client
   * @param name nom du client
   * @param firstName prénom du client
   * @param email mail du client
   */
  constructor(id: number, name: string, firstName: string, email: string){
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
  }

  //Getters setters
  getId() {
    return this.id;
  }

  setId(id:number){
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName: string){
    this.firstName = firstName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email: string){
    this.email = email;
  }
}



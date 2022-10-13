export class User {
  id!: number;
  name!: string;
  firstName!: string;
  email!: string;

  constructor(id: number, name: string, firstName: string, email: string){
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
  }

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
    return this.name;
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



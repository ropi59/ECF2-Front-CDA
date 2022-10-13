export class Vehicle {
  id!:number;
  genre!: string;
  brand!: string;
  model!: string;
  immat!: string;
  state!: string;
  price!: number;
  disponibility!: string;
  vehiclePic!: string;

  /**
   * Constructeur d'un véhicule
   * @param id id du véhicule
   * @param genre type du véhicule : moto | voiture | camion | utilitaire
   * @param brand marque du véhicule
   * @param model modèle du véhicule
   * @param immat immatriculation du véhicule
   * @param state état du véhicule : A | B | C | D
   * @param price prix de la location à la journée
   * @param disponibility disponibilité du véhicule
   * @param vehiclePic photo du véhicule
   */
  constructor(id:number, genre: string, brand: string, model: string, immat: string, state: string, price: number, disponibility: string, vehiclePic: string){
    this.id = id;
    this.genre = genre;
    this.brand = brand;
    this.model = model;
    this.immat = immat;
    this.state = state;
    this.price = price;
    this.disponibility = disponibility;
    this.vehiclePic = vehiclePic;
  }

  //Getters setters
  getId(){
    return this.id;
  }

  setId(id: number){
    this.id = id;
  }

  getGenre(){
    return this.genre;
  }

  setGenre(genre: string){
    this.genre = genre;
  }

  getBrand(){
    return this.brand;
  }

  setBrand(brand: string){
    this.brand = brand;
  }

  getModel(){
    return this.model;
  }

  setModel(model: string){
    this.model = model;
  }

  getImmat(){
    return this.immat;
  }

  setImmat(immat: string){
    this.immat = immat;
  }

  getState(){
    return this.state;
  }

  setState(state: string){
    this.state = state;
  }

  getPrice(){
    return this.price;
  }

  setPrice(price: number){
    this.price = price;
  }

  getDisponibility(){
    return this.disponibility;
  }

  setDisponibility(disponibility: string){
    this.disponibility = disponibility;
  }

  getVehiclePic(){
    return this.vehiclePic;
  }

  setVehiclePic(vehiclePic: string){
    this.vehiclePic = vehiclePic;
  }
}

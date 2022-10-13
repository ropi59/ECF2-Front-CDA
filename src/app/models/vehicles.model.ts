export class Vehicle {
  id!:number;
  type!: string;
  brand!: string;
  model!: string;
  immat!: string;
  state!: string;
  price!: number;
  disponibility!: string;
  vehiclePic!: string;

  constructor(id:number, type: string, brand: string, model: string, immat: string, state: string, price: number, disponibility: string, vehiclePic: string){
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.immat = immat;
    this.state = state;
    this.price = price;
    this.disponibility = disponibility;
    this.vehiclePic = vehiclePic;
  }

  getId(){
    return this.id;
  }

  setId(id: number){
    this.id = id;
  }

  getType(){
    return this.type;
  }

  setType(type: string){
    this.type = type;
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

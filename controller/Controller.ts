import { Director } from "../builder/Director";
import { CarStorage } from "../storages/CarStorage";

export interface IMediator {
  notify(event: string): void;
}

export class ConcreteMediator implements IMediator {
  private carStorage: CarStorage;
  private director: Director;


  constructor(carStorage: CarStorage, director: Director) {
    this.carStorage = carStorage;
    this.carStorage.setMediator(this);
    this.director = director;
    this.director.setMediator(this);
  }

  public notify(event: string): void {
    if (event === 'carTaken') {
      console.log('carTaken');

    }
    else if (event === 'd') {

    }
  }
}

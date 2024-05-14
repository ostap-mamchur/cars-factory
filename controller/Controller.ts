import { Director } from "../builder/Director";
import { CarStorage } from "../storages/CarStorage";

export interface IMediator {
  notify(event: string): void;
}

export interface IController {
  start(): void
}

export class Controller implements IMediator, IController {
  private carStorage: CarStorage;
  private director: Director;


  constructor(carStorage: CarStorage, director: Director) {
    this.carStorage = carStorage;
    this.carStorage.setMediator(this);
    this.director = director;
    this.director.setMediator(this);
  }
  start(): void {
    this.analyse();
  }
  

  notify(event: string): void {
    if (event === 'carTaken') {
      this.analyse();
    }
  }

  private analyse() {
    console.log('<---- CONTROLLER START ----->')
  }
}

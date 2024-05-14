import { Colleague } from "../controller/Colleague";
import { IMediator } from "../controller/Controller";
import { IAccessor } from "../entities/Accessor";
import { IBody } from "../entities/Body";
import { ICar } from "../entities/Car";
import { IEngine } from "../entities/Engine";
import { IStorage } from "../storages/IStorage";
import { ICarBuilder } from "./CarBuilder";

export interface IDirector {
  makeCar(): ICar
}

export class Director extends Colleague implements IDirector {
  protected mediator?: IMediator;

  constructor(
    private carBuilder: ICarBuilder, 
    private engineStorage: IStorage<IEngine>,
    private bodyStorage: IStorage<IBody>,
    private accessorStorage: IStorage<IAccessor>
  ) {
    super();
  }
  
  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }

  makeCar(): ICar {
    const body = this.bodyStorage.get(1); 
    const engine = this.engineStorage.get(1); 
    const accessor = this.accessorStorage.get(1); 

    this.carBuilder.setAccessor(accessor);
    this.carBuilder.setEngine(engine);
    this.carBuilder.setBody(body);

    const car = this.carBuilder.getCar();

    this.carBuilder.reset();

    return car;
  }
}
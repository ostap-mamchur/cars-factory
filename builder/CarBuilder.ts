import { IAccessor } from "../entities/Accessor"
import { IBody } from "../entities/Body"
import { Car, ICar } from "../entities/Car"
import { IEngine } from "../entities/Engine"

export interface ICarBuilder {
  setEngine(engine: IEngine): void
  setBody(body: IBody): void
  setAccessor(accessor: IAccessor): void
  getCar(): ICar
  reset(): void
}

export class CarBuilder implements ICarBuilder {
  private car: ICar

  constructor() {
    this.car = new Car()
  }

  setEngine(engine: IEngine): void {
    this.car.engine = engine
  }

  setBody(body: IBody): void {
    this.car.body = body
  }

  setAccessor(accessor: IAccessor): void {
    this.car.accessor = accessor
  }

  getCar(): ICar {
    return this.car
  }

  reset(): void {
    this.car = new Car()
  }
}

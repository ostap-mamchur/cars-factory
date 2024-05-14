import { Accessor, IAccessor } from "../entities/Accessor"
import { Body, IBody } from "../entities/Body"
import { Engine, IEngine } from "../entities/Engine"

export interface ICarPartsFactory {
    
  createEngine(): IEngine
  createBody(): IBody
  createAccessor(): IAccessor
}

export class CarPartsFactory implements ICarPartsFactory {

  createEngine(): IEngine {
      return new Engine()
  }

  createBody(): IBody {
      return new Body()
  }

  createAccessor(): IAccessor {
      return new Accessor()
  }
}
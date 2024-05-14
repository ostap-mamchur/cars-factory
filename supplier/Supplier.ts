import { IAccessor } from "../entities/Accessor";
import { IBody } from "../entities/Body";
import { IEngine } from "../entities/Engine";
import { ICarPartsFactory } from "../factory/CarPartsFactory";
import { IStorage } from "../storages/IStorage";

export interface ISupplier {
  start(): void;
}

export class Supplier implements ISupplier {
  constructor(
    private factory: ICarPartsFactory,
    private engineStorage: IStorage<IEngine>,
    private bodyStorage: IStorage<IBody>,
    private accessorStorage: IStorage<IAccessor>
  ) { }

  start(): void {
    console.log('<---- SUPPLIER START ----->')
  }
}
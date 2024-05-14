import { ICar } from "../entities/Car";
import { IStorage } from "../storages/IStorage";

interface IDealer {
  start(): void;
}

export class Dealer implements IDealer {
  constructor(private carStorage: IStorage<ICar>) { }

  start(): void {
    console.log('<---- DEALER START ----->')
  }
}
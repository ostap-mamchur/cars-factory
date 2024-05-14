import { Colleague } from "../controller/Colleague";
import { IMediator } from "../controller/Controller";
import { ICar } from "../entities/Car";
import { IStorage } from "./IStorage";

export class CarStorage extends Colleague implements IStorage<ICar> {
  protected mediator?: IMediator;

  private items: ICar[] = [];
  private maxSize: Number = 20;

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }

  isFull(): boolean {
    return this.items.length === this.maxSize;
  }
  add(item: ICar): void {
    this.items.push(item);
  }
  get(id: number): ICar {
    return this.items[0];
  }
}
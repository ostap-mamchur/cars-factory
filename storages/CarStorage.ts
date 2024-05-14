import { ICar } from "../entities/Car";
import { IStorage } from "./IStorage";

export class CarStorage implements IStorage<ICar> {
  private items: ICar[] = [];
  private maxSize: Number = 20;

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
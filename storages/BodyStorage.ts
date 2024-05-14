import { IBody } from "../entities/Body";
import { IStorage } from "./IStorage";

export class BodyStorage implements IStorage<IBody> {
  private items: IBody[] = [];
  private maxSize: Number = 20;

  isFull(): boolean {
    return this.items.length === this.maxSize;
  }
  add(item: IBody): void {
    this.items.push(item);
  }
  get(id: number): IBody {
    return this.items[0];
  }
}
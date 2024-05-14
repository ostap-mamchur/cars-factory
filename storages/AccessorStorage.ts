import { IAccessor } from "../entities/Accessor";
import { IStorage } from "./IStorage";

export class AccessorStorage implements IStorage<IAccessor> {
  private items: IAccessor[] = [];
  private maxSize: Number = 20;

  isFull(): boolean {
    return this.items.length === this.maxSize;
  }
  add(item: IAccessor): void {
    this.items.push(item);
  }
  get(id: number): IAccessor {
    return this.items[0];
  }
}
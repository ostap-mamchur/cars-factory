import { IEngine } from "../entities/Engine";
import { IStorage } from "./IRepository";

export class EngineStorage implements IStorage<IEngine> {
  private items: IEngine[] = [];
  private maxSize: Number = 20;

  isFull(): boolean {
    return this.items.length === this.maxSize;
  }

  add(item: IEngine): void {
    this.items.push(item);
  }
  
  get(id: number): IEngine {
    return this.items[0];
  }
}
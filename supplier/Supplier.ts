import { IAccessor } from "../entities/Accessor";
import { IBody } from "../entities/Body";
import { IEngine } from "../entities/Engine";
import { ICarPartsFactory } from "../factory/CarPartsFactory";
import { IStorage } from "../storages/IStorage";

export interface ISupplier {
  start(): void;
}
export type SupplierFactory<T> = () => T;

export class Supplier implements ISupplier {
    private running: boolean = true;
  constructor(
    private factory: ICarPartsFactory,
    private delay: number,
    //private warehouse: Warehouse<T>,
    //private factory: SupplierFactory<T>,
    private engineStorage: IStorage<IEngine>,
    private bodyStorage: IStorage<IBody>,
    private accessorStorage: IStorage<IAccessor>
    ) { }

    setDelay(delay: number) {
        this.delay = delay;
    }

    private async run() {
        while (this.running) {
           //if (this.warehouse.add(this.factory()))
           // {
           //   await this.sleep(this.delay);
           // } else {
                await this.sleep(100); // Retry after 100ms if warehouse is full
           // }
        }
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

  start(): void {
    console.log('<---- SUPPLIER START ----->')
    this.running = true;
    }

    stop() {
        this.running = false;
    }
}
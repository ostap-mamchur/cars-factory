import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { Car, ICar } from "../../entities/Car";
import { CarSchema } from "../schemas";

export interface ICarRepository {
  add(item: ICar): Promise<ICar>;
  get(id: number): Promise<ICar>
}

export class CarRepository implements ICarRepository {
  constructor (private db: PostgresJsDatabase, private cars: CarSchema) { }

  async add(item: ICar) {
    const carEntity = await this.db.insert(this.cars).values({ engineId: item.engine.id, bodyId: item.body.id, accessorId: item.accessor.id }).returning();
    item.id = carEntity[0].id;
    return item;
  }

  async get(id: number) {
    const carEntity = await this.db.select({ id }).from(this.cars);
    return new Car()
  }
}
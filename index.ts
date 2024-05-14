import { CarBuilder, ICarBuilder } from "./builders/CarBuilder"
import { CarPartsFactory, ICarPartsFactory } from "./factories/CarPartsFactory"

const factory: ICarPartsFactory = new CarPartsFactory()
const engine = factory.createEngine()
const body = factory.createBody()
const accessor = factory.createAccessor()

const builder: ICarBuilder = new CarBuilder()

builder.setEngine(engine)
builder.setBody(body)
builder.setAccessor(accessor)

console.log(builder.getCar())
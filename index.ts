interface IEngine {}

interface IBody {}

interface IAccessor {}

class Engine implements IEngine {}

class Body implements IBody {}

class Accessor implements IAccessor {}



interface ICarPartsFactory {
    
    createEngine(): IEngine
    createBody(): IBody
    createAccessor(): IAccessor
}

class CarPartsFactory implements ICarPartsFactory {

    createEngine(): IEngine {
        return new Engine()
    }

    createBody(): IBody {
        return new Body()
    }

    createAccessor(): IAccessor {
        return new Accessor()
    }
}

interface ICar {

    set engine(engine: IEngine)
    set body(body: IBody)
    set accessor(accessor: IAccessor)
}

class Car implements ICar {

    private _engine!: IEngine
    private _body!: IBody
    private _accessor!: IAccessor

    get engine() { 
        return this._engine 
    }

    get body() { 
        return this._body 
    }

    get accessor() { 
        return this._accessor 
    }

    set engine(engine: IEngine)
    {
        this._engine = engine
    }

    set body(body: IBody)
    {
        this._body = body
    }

    set accessor(accessor: IAccessor)
    {
        this._accessor = accessor
    }
}

interface ICarBuilder {

    setEngine(engine: IEngine): void
    setBody(body: IBody): void
    setAccessor(accessor: IAccessor): void
}

class CarBuilder implements ICarBuilder {
    private car: ICar

    constructor() {
        this.car = new Car()
    }

    setEngine(engine: IEngine): void {
        this.car.engine = engine
    }

    setBody(body: IBody): void {
        this.car.body = body
    }

    setAccessor(accessor: IAccessor): void {
        this.car.accessor = accessor
    }

    getCar(): ICar {
        return this.car
    }
}

const factory = new CarPartsFactory()
const engine = factory.createEngine()
const body = factory.createBody()
const accessor = factory.createAccessor()

const builder = new CarBuilder()

builder.setEngine(engine)
builder.setBody(body)
builder.setAccessor(accessor)

console.log(builder.getCar())
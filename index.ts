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
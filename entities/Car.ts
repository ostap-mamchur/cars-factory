import { IAccessor } from "./Accessor"
import { IBody } from "./Body"
import { IEngine } from "./Engine"

export interface ICar {
  id?: number;

    set engine(engine: IEngine)
    set body(body: IBody)
    set accessor(accessor: IAccessor)
}

export class Car implements ICar {
    id?: number;

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

    set engine(engine: IEngine) {
        this._engine = engine
    }

    set body(body: IBody) {
        this._body = body
    }

    set accessor(accessor: IAccessor) {
        this._accessor = accessor
    }
}
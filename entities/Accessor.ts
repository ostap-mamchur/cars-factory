export interface IAccessor {
  id?: number;
}

export class Accessor implements IAccessor {
  id?: number;

  constructor(id?: number)  {
    this.id = id;
  }
}
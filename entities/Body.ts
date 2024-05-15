export interface IBody {
  id?: number;
}

export class Body implements IBody {
  id?: number;

  constructor(id?: number)  {
    this.id = id;
  }
}
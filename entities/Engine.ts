export interface IEngine {
  id?: number;
}

export class Engine implements IEngine {
  id?: number;

  constructor(id?: number)  {
    this.id = id;
  }
}
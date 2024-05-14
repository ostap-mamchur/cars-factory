import { IMediator } from "./Controller";

export class Colleague {
  protected mediator?: IMediator;

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}

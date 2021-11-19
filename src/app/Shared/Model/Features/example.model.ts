import BaseEntity from "../Base/base.model"

export class Example extends BaseEntity {
  constructor(public name: string, public lastName: string){
      super();
  }
}
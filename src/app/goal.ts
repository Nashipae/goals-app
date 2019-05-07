export class Goal {

  public showDescription:boolean;

  constructor(public id:number, public name: string, public description:string, public completeDate: Date){

  //  hide details
    this.showDescription=false;


  }
}

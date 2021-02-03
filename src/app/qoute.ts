export class Qoute {
    
    showDescription:boolean;
    like:number;
    dislike:number;

    constructor( public id: number, public type :string, public name :string ,public description :string ,public supmit:string ,public completeDate:Date ) 
    {
     this.showDescription=false
     this.like=0
     this.dislike=0
    }
}


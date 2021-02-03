import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
qoutes :Qoute[] =[
  new Qoute (1,"Insperational","victor","petience pays but pains", "Emmanuel", new Date(2020,4,6)),
  new Qoute (2,"Love","tripplevic","there is no way to success but success is the way","Bernard", new Date(2020 ,9, 10)),
  new Qoute (3,"mortivational","manuu","do not boast about tommorrow for you do not know what a day may bring forth","Enock" ,new Date (2000,6,12)),
  new Qoute (4,"love","victa","petience pays but bail","Gedion" ,new Date(2001,4,7)),
  new Qoute (5,"insperational","victa","petience pays but bail" ,"victor",new Date (1990,6,8)),


]
addNewQoute(qoute){
  let qouteLength = this.qoutes.length;
  qoute.id = qouteLength+1;
 qoute.completeDate = new Date(qoute.completeDate)
  this.qoutes.push(qoute)
}
likes (index){
this.qoutes[index].like++;
}
dislikes(index){
this.qoutes[index].dislike++;
}

toggleDetail(index){
  this.qoutes[index].showDescription= !this.qoutes[index].showDescription;
}
deleteQoute(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].name}?`)

    if (toDelete){
      this.qoutes.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit ,Input,Output , EventEmitter } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {
@Input() qoute:Qoute;
@Output() isComplete= new EventEmitter <boolean> ();
qouteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
numberofupvotes:number=0
upvoteclick(){
  this.numberofupvotes++;
}
numberofdownvotes:number = 0
downvoteclick(){
  this.numberofdownvotes ++;
}
  constructor() { }

  ngOnInit(): void {
  }

}

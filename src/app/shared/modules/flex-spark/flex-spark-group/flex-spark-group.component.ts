import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-group',
  templateUrl: './flex-spark-group.component.html',
  styleUrls: ['./flex-spark-group.component.scss']
})
export class Group implements OnInit {

  constructor() { }

   @Input()  id: String;


  ngOnInit() {
  }

}

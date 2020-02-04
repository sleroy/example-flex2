import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-hgroup',
  templateUrl: './flex-spark-hgroup.component.html',
  styleUrls: ['./flex-spark-hgroup.component.scss']
})
export class HGroup implements OnInit {

  constructor() { }

   @Input()  verticalAlign: String;
   @Input()  id: String;


  ngOnInit() {
  }

}

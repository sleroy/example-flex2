import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-panel',
  templateUrl: './flex-spark-panel.component.html',
  styleUrls: ['./flex-spark-panel.component.scss']
})
export class Panel implements OnInit {

  constructor() { }

   @Input()  verticalCenter: Number;
   @Input()  title: String;
   @Input()  horizontalCenter: Number;


  ngOnInit() {
  }

}

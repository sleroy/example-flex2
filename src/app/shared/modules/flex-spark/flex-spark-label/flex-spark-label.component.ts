import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-label',
  templateUrl: './flex-spark-label.component.html',
  styleUrls: ['./flex-spark-label.component.scss']
})
export class Label implements OnInit {

  constructor() { }

   @Input()  paddingBottom: Number;
   @Input()  textAlign: String;
   @Input()  id: String;
   @Input()  text: any;


  ngOnInit() {
  }

}

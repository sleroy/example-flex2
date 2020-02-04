import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-label',
  templateUrl: './flex-spark-label.component.html',
  styleUrls: ['./flex-spark-label.component.scss']
})
export class Label implements OnInit {

  constructor() { }

   @Input()  width: String;
   @Input()  id: String;
   @Input()  paddingBottom: Number;
   @Input()  text: any;
   @Input()  textAlign: String;


  ngOnInit() {
  }

}

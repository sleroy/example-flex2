import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-radio-button-group',
  templateUrl: './flex-spark-radio-button-group.component.html',
  styleUrls: ['./flex-spark-radio-button-group.component.scss']
})
export class RadioButtonGroup implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  enabled: Boolean;
   @Input()  layout: string;
   @Input()  radioValue: any;


  ngOnInit() {
  }
}

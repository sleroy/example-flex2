import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-radio-button',
  templateUrl: './flex-spark-radio-button.component.html',
  styleUrls: ['./flex-spark-radio-button.component.scss']
})
export class RadioButton implements OnInit {

  constructor() { }

   @Input()  groupName: String;
   @Input()  id: String;
   @Input()  label: String;
   @Input()  value: Number;
   @Input()  click: String;
   @Input()  selected: Boolean;


  ngOnInit() {
  }

}

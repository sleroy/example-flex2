import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-label',
  templateUrl: './flex-spark-label.component.html',
  styleUrls: ['./flex-spark-label.component.scss']
})
export class Label implements OnInit {

  constructor() { }

  @Input()  id: String;
  @Input()  label: String;
  @Input()  layout: String;
  @Input()  radioValue: any;
  @Output() onRadioValueChangedUp = new EventEmitter<boolean>();


  ngOnInit() {
  }

  onRadioValueChanged(event){
    this.onRadioValueChangedUp.emit(event);
  }

}

import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding, EventEmitter  } from '@angular/core';


@Component({
  selector: 'flex-mx-date-field',
  templateUrl: './flex-mx-date-field.component.html',
  styleUrls: ['./flex-mx-date-field.component.scss']
})
export class DateField implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: String;
   @Input()  value: String;
   @Output() onDateValueChanged = new EventEmitter<boolean>();


  ngOnInit() {
  }

  onChange(event){
    this.onDateValueChanged.emit(event.value);
  }
}

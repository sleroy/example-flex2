import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding, EventEmitter  } from '@angular/core';


@Component({
  selector: 'flex-mx-check-box',
  templateUrl: './flex-mx-check-box.component.html',
  styleUrls: ['./flex-mx-check-box.component.scss']
})
export class CheckBox implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: String;
   @Input()  checked: boolean;
   @Output() onCheckboxValueChanged = new EventEmitter<boolean>();


  ngOnInit() {
  }

  onChange(event){ 
    this.onCheckboxValueChanged.emit(event);
  }

}

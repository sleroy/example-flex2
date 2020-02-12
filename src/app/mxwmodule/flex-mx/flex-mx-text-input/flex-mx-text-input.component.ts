import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding, EventEmitter  } from '@angular/core';


@Component({
  selector: 'flex-mx-text-input',
  templateUrl: './flex-mx-text-input.component.html',
  styleUrls: ['./flex-mx-text-input.component.scss']
})
export class TextInput implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: String;
   @Input()  text: String;
   @Output() onTextValueChanged = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onChange(event){
    this.onTextValueChanged.emit(event)
  }
}

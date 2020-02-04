import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-date-field',
  templateUrl: './flex-mx-date-field.component.html',
  styleUrls: ['./flex-mx-date-field.component.scss']
})
export class DateField implements OnInit {

  constructor() { }

   @Input()  id: String;


  ngOnInit() {
  }

}

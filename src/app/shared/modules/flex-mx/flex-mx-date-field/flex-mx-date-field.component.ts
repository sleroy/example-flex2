import { Component, OnInit, Input, Output, OnChanges, SimpleChange  } from '@angular/core';


@Component({
  selector: 'flex-mx-date-field',
  templateUrl: './flex-mx-date-field.component.html',
  styleUrls: ['./flex-mx-date-field.component.scss']
})
export class DateField implements OnInit {

  constructor() { }

  @Input()  width: String;
  @Input()  id: String;


  ngOnInit() {
  }

}

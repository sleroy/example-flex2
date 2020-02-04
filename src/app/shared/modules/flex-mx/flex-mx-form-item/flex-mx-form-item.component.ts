import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-form-item',
  templateUrl: './flex-mx-form-item.component.html',
  styleUrls: ['./flex-mx-form-item.component.scss']
})
export class FormItem implements OnInit {

  constructor() { }

   @Input()  label: String;


  ngOnInit() {
  }

}

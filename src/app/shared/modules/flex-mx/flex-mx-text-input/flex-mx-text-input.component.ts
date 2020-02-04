import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-mx-text-input',
  templateUrl: './flex-mx-text-input.component.html',
  styleUrls: ['./flex-mx-text-input.component.scss']
})
export class TextInput implements OnInit {

  constructor() { }

   @Input()  id: String;


  ngOnInit() {
  }

}

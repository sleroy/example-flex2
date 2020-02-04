import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'component-combolist-generique-combox',
  templateUrl: './component-combolist-generique-combox.component.html',
  styleUrls: ['./component-combolist-generique-combox.component.scss']
})
export class GeneriqueCombox implements OnInit {

  constructor() { }

   @Input()  width: String;
   @Input()  id: String;
   @Input()  dataProvider: any;


  ngOnInit() {
  }

}

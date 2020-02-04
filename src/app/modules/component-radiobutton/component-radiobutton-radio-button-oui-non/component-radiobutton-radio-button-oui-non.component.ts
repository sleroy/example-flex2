import { Component, OnInit, Input, Output, OnChanges, SimpleChange  } from '@angular/core';


@Component({
  selector: 'component-radiobutton-radio-button-oui-non',
  templateUrl: './component-radiobutton-radio-button-oui-non.component.html',
  styleUrls: ['./component-radiobutton-radio-button-oui-non.component.scss']
})
export class RadioButtonOuiNon implements OnInit {

  constructor() { }

  @Input()  width: String;
  @Input()  id: String;
  @Input()  label: String;


  ngOnInit() {
  }

}

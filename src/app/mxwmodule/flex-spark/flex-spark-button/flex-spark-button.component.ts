import { Component, OnInit, Input, Output, OnChanges, SimpleChange, HostBinding  } from '@angular/core';


@Component({
  selector: 'flex-spark-button',
  templateUrl: './flex-spark-button.component.html',
  styleUrls: ['./flex-spark-button.component.scss']
})
export class Button implements OnInit {

  constructor() { }

   @Input()  id: String;
   @Input()  label: String;
   @Input()  color: string;


  ngOnInit() {
  }

}

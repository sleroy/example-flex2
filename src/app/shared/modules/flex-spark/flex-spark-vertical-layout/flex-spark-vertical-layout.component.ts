import { Component, OnInit, Input, Output, OnChanges, SimpleChange  } from '@angular/core';


@Component({
  selector: 'flex-spark-vertical-layout',
  templateUrl: './flex-spark-vertical-layout.component.html',
  styleUrls: ['./flex-spark-vertical-layout.component.scss']
})
export class VerticalLayout implements OnInit {

  constructor() { }

  @Input()  paddingBottom: Number;
  @Input()  gap: Number;
  @Input()  paddingRight: Number;
  @Input()  paddingTop: Number;
  @Input()  paddingLeft: Number;


  ngOnInit() {
  }

}

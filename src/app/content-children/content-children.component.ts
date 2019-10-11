import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ContentStepComponent } from './content-step/content-step.component';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrls: ['./content-children.component.css']
})
export class ContentChildrenComponent implements OnInit, AfterContentInit {


  @ContentChildren(ContentStepComponent) steps: QueryList<ContentStepComponent>;

  constructor() {
   }

  ngOnInit() {
  }

 ngAfterContentInit() {
  this.steps.forEach(r => console.log(r));
 }


}

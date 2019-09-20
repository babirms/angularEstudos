import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {


  @ViewChild('native') Input;
  valor = 'valor inicial';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.Input);
    this.valor = this.Input.formName;
  }

}

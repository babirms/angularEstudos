import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-troca-style',
  templateUrl: './troca-style.component.html',
  styleUrls: ['./troca-style.component.css']
})
export class TrocaStyleComponent implements OnInit {

  clicou = true;
  clicouAmarelo = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicou = !this.clicou;
  }

  trocaCor() {
    this.clicouAmarelo = !this.clicouAmarelo;
  }
}

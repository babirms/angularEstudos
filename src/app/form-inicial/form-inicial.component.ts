import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.component.html',
  styleUrls: ['./form-inicial.component.css']
})
export class FormInicialComponent implements OnInit {

  /**
   * Criação de uma instância de FormGroup, construído a partir dos
   * formsControls Nome e Sobrenome.
   * Os formsControls receberão o bind a partir da tag formControlName.
   */
  instanciaForm = new FormGroup({
    nome: new FormControl(),
    sobrenome: new FormControl()
  });

  nomeRecebido: string;
  sobrenomeRecebido: string;

  mostra = false;

  /**
   * Construtor da classe injetado com o serviço FormBuilder
   * @param formBuilder Ajuda a criar controls
   */
  constructor(private formBuilder: FormBuilder) {
    this.criaForm();
   }

  /**
   * Método para criar um formulário.
   */
  criaForm() {
    this.instanciaForm = this.formBuilder.group({
      nome: '',
      sobrenome: ''
    });
  }

  onClick(){
   console.log(this.instanciaForm.value.sobrenome);
  }

  ngOnInit() {
  }

}

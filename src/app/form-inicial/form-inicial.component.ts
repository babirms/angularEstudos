import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.component.html',
  styleUrls: ['./form-inicial.component.css']
})
export class FormInicialComponent implements OnInit, OnChanges {

  @Input() public formName;
  @Input() public formLast;

  /**
   * Criação de uma instância de FormGroup, construído a partir dos
   * formsControls Nome e Sobrenome.
   * Os formsControls receberão o bind a partir da tag formControlName.
   */
  instanciaForm = new FormGroup({
    nome: new FormControl(),
    sobrenome: new FormControl()
  });


  /**
   * Construtor da classe injetado com o serviço FormBuilder
   * @param formBuilder Ajuda a criar controls
   */
  constructor(private formBuilder: FormBuilder) {
    this.criaForm();
   }

   @Input() valor= 2;

  /**
   * Método para criar um formulário.
   */
  criaForm() {
    this.instanciaForm = this.formBuilder.group({
      nome: [this.formName, Validators.required],
      sobrenome: this.formLast
    });
  }


  ngOnInit() {
    /*this.instanciaForm.get('nome').statusChanges
    .pipe(
      distinctUntilChanged(), tap(value => console.log('valor: ', value))
    )
    .subscribe();
    this.instanciaForm.get('nome').value.subscribe(v => console.log(v));*/
  }

  onBlur() {
     this.formName = this.instanciaForm.get('nome').value;
    //  console.log(this.formName);
  }

  ngOnChanges() {
   //  console.log(this.instanciaForm.get('sobrenome'));
  }

}

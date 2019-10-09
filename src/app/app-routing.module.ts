import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormShowComponent } from './form-show/form-show.component';
import { TrocaStyleComponent } from './troca-style/troca-style.component';
import { PagTesteComponent } from './pag-teste/pag-teste.component';

const routes: Routes = [
  { path: 'formulario', component: FormShowComponent},
  { path: 'heranca', component: PagTesteComponent},
  { path: '', component: TrocaStyleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
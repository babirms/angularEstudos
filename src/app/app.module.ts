import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { BarraComponent } from './barra/barra.component';
import { FormShowComponent } from './form-show/form-show.component';
import { TrocaStyleComponent } from './troca-style/troca-style.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { ContentStepComponent } from './content-children/content-step/content-step.component';
import { PagTesteComponent } from './pag-teste/pag-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInicialComponent,
    BarraComponent,
    FormShowComponent,
    TrocaStyleComponent,
    ContentChildrenComponent,
    ContentStepComponent,
    PagTesteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

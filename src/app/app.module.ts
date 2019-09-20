import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { BarraComponent } from './barra/barra.component';
import { FormShowComponent } from './form-show/form-show.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInicialComponent,
    BarraComponent,
    FormShowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

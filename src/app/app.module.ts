import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { BarraComponent } from './barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInicialComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

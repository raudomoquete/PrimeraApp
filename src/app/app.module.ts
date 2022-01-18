import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumarComponent } from './sumar/sumar.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    EventosComponent,
    SumarComponent,
    CronometroComponent,
    FormularioComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

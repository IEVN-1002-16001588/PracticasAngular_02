import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { FormsModule } from '@angular/forms';

import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent,
        PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

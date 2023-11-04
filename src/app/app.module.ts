import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent,
    PruebaComponent,
    CinepolisComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

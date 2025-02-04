import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { ExosComponent } from './exos/exos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exo01Component,
    ExosComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Important pour le two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

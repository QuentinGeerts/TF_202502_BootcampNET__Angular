import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { ExosComponent } from './exos/exos.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { Exo02Component } from './exos/exo02/exo02.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exo01Component,
    ExosComponent,
    NotFoundComponent,
    NavbarComponent,
    Exo02Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule, // Important pour le two-way binding
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

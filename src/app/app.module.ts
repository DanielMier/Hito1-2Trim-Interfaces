// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { PircingComponent } from './pircing/pircing.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    BlogComponent,
    ServicesComponent,
    PircingComponent
    // Añade más componentes si los tienes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Usa las rutas de app.routes.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

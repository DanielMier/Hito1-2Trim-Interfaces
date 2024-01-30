// app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { PircingComponent } from './pircing/pircing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pircing', component: PircingComponent },
  // Puedes agregar más rutas según sea necesario
];

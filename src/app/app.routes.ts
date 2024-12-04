import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},          // Ruta para Inicio
  { path: 'catalogo', component: CatalogoComponent }, // Ruta para Catálogo
  { path: 'contacto', component: ContactoComponent }, // Ruta para Contacto
  { path: 'acerca-de', component: AcercaDeComponent } // Ruta para Acerca de
];

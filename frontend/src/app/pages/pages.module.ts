import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { ContactoComponent } from './contacto/contacto.component';
import { DatosPrestadorComponent } from './datos-prestador/datos-prestador.component';
import { FrecuentesComponent } from './frecuentes/frecuentes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistroComponent } from './registro/registro.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SoporteComponent } from './soporte/soporte.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';

@NgModule({
  declarations: [ 
    ContactoComponent,
    DatosPrestadorComponent,
    FrecuentesComponent,
    HomeComponent,
    LoginComponent,
    PagosComponent,
    RegistroComponent,
    SobreNosotrosComponent,
    SoporteComponent,
    DashboardComponent,
    DashboardUserComponent,
    PerfilUserComponent,
    
  ],
  imports: [ ComponentsModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule ],
  exports: [
    ContactoComponent,
    DatosPrestadorComponent,
    FrecuentesComponent,
    HomeComponent,
    LoginComponent,
    PagosComponent,
    RegistroComponent,
    SobreNosotrosComponent,
    SoporteComponent,
    DashboardComponent,
    DashboardUserComponent,
    PerfilUserComponent,
    FormsModule
  ],
})

export class PagesModule { }
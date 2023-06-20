import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CardPrestadorComponent } from './card-prestador/card-prestador.component';
import { DashboardUserItemComponent } from './dashboard-user-item/dashboard-user-item.component';

@NgModule({
  declarations: [ 
    ButtonComponent, 
    InputComponent, 
    CardPrestadorComponent, DashboardUserItemComponent 
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [ 
    ButtonComponent, 
    InputComponent, 
    CardPrestadorComponent,
    DashboardUserItemComponent
  ],
})

export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CardPrestadorComponent } from './card-prestador/card-prestador.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [ 
    ButtonComponent, 
    InputComponent, 
    CardPrestadorComponent, 
    DropdownComponent 
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [ 
    ButtonComponent, 
    InputComponent, 
    CardPrestadorComponent,
    DropdownComponent
  ],
})

export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent ],
  imports: [
    AppRoutingModule, ComponentsModule
  ],
  exports: [ HeaderComponent, FooterComponent ],
})
export class LayoutsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '@components/Elements';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';

const fragments = [
  FormAuthComponent,
  NavbarComponent
]

@NgModule({
  declarations: fragments,
  exports: fragments,
  imports: [
    CommonModule,
    IonicModule,
    ElementsModule
  ]
})
export class FragmentsModule { }

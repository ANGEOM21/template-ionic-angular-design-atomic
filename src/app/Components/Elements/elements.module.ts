import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAuthComponent } from './button-auth/button-auth.component';


const elements = [
  ButtonAuthComponent
]

@NgModule({
  declarations: elements,
  exports: elements,
  imports: [
    CommonModule,
  ]
})
export class ElementsModule { }

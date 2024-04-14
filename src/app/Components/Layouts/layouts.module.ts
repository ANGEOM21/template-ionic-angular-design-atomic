import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentsModule } from '@components/Fragments';
import { AuthLayoutsComponent } from './auth-layouts/auth-layouts.component';
import { ContentLayoutsComponent } from './content-layouts/content-layouts.component';



const layouts = [
  AuthLayoutsComponent,
  ContentLayoutsComponent
]

@NgModule({
  declarations: layouts,
  exports: layouts,
  imports: [
    CommonModule,
    FragmentsModule
  ]
})
export class LayoutsModule { }

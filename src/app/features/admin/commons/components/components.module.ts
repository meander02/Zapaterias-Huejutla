import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from '../material/material.module';

// const COMPONENTS = [HeaderComponent, FooterComponent]; // Agrega los componentes

@NgModule({
  declarations: [
    ProductFormComponent // Asegúrate de que ProductFormComponent esté declarado aquí
  ],
  imports: [
    MaterialModule,
    FormsModule // Importa FormsModule aquí
  ],
  providers: [],
})
export class adminComponentsModule { }
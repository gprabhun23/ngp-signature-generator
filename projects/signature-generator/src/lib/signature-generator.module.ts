import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SignatureGeneratorComponent } from './signature-generator.component';


@NgModule({
  declarations: [SignatureGeneratorComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [SignatureGeneratorComponent]
})
export class SignatureGeneratorModule { }

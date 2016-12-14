import { NgModule }     from '@angular/core';
import { ContactDetailComponent } from './contact-detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ContactDetailComponent],
  exports: [ContactDetailComponent]
})
export class ContactDetailModule { }

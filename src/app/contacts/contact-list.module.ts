import { NgModule }     from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ContactListComponent],
  exports: [ContactListComponent]
})
export class ContactListModule { }

import { NgModule }     from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ContactListComponent],
  providers: [ ContactService ],
  exports: [ContactListComponent]
})
export class ContactListModule { }

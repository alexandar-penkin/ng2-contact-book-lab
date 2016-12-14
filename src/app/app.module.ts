import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactDetailModule }  from './contacts/contact-detail.module';
import { ContactListModule }  from './contacts/contact-list.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ContactListModule, ContactDetailModule],
  declarations: [AppComponent, AppNavComponent],
  exports: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

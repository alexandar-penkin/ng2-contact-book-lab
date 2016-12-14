import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactListComponent }  from './contacts/contact-list.component';
import { ContactDetailComponent }  from './contacts/contact-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: ContactListComponent },
      { path: 'details', component: ContactDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },
      // { path: 'products', component: ProductListComponent },
      // { path: 'users', component: UserListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
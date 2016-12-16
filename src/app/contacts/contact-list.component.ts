import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];
  public selectedId: number;

  constructor(
    private service: ContactService,
    private router: Router
  ) { }

  public ngOnInit() {
      this.service.getContacts().then(
        contacts => this.contacts = contacts
      );
  }

  public selectItem(contact: Contact) {
    this.selectedId = contact.id;
    this.router.navigate(['/contact', contact.id]);
  }
}

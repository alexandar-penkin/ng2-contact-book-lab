import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from './contact.model';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
  @Input()
  public contact: Contact;
  public isNewProduct: boolean = true;

  constructor(
    private route: ActivatedRoute
  ) { }


  public ngOnInit() {
    this.route.data.forEach(data => { });
  }

}
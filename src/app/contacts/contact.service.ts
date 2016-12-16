import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Contact } from './contact.model';
import { Observable } from 'rxjs/Observable';


const CONTACTS: Contact[] = [
  new Contact(1, 'male', 'Blagoy', 'Petrtov', 'blagoy.petrov@gmail.com', '+359 888 555 444', '27 Dobrich Str'),
  new Contact(2, 'male', 'Ivan', 'Stoyanov', 'ivan.stoyanov@gmail.com', '+359 888 555 333', '21 Lom Str'),
  new Contact(3, 'male', 'Petar', 'Petkov', 'petar.petkov@gmail.com', '+359 888 555 222', '7 Lovech Str')
];

const API_URL: string = 'http://localhost:93/contact-service.php';

@Injectable()
export class ContactService {

    constructor( private http: Http ) { }

    public getContacts(): Promise<Contact[]> {
        return this.http.get(API_URL)
            .map(response => response.json() || {} as Contact[])
            .catch(this.handleErrorObservable)
            .toPromise();
    }

    private handleErrorObservable(error: Response | any) {
        let errMsg: string = error.message ? error.message : error.toString();
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  name?: string;
  lastname?: string;
  email?:string;
  contact_number?:string;
  description?:string;


  submit_contact_us(){

    console.log(this.name);
    console.log(this.lastname);
    console.log(this.email);
    console.log(this.contact_number);
    console.log(this.description);
  }

}

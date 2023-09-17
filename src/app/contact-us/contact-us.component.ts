import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  private apiUrl = 'http://www.jdkinetics.co.za'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  

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

    var data = {
      "name" : this.name,
      "lastname" : this.lastname,
      "email" : this.email,
      "contact_number" : this.contact_number,
      "description" : this.description,
    }

    this.http.post<any>(`${this.apiUrl}/contact-us`, data).subscribe(
    (response)=>{
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your request was sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
    },
    (error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Could not send your request',
        showConfirmButton: false,
        timer: 1500
      })
    });
    
  }

}

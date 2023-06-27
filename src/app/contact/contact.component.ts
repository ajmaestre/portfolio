import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';
import { IEmail } from '../interfaces/IEmail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  data: FormGroup;
  emailSubscription!: Subscription;
  email_body!: IEmail;

  constructor(public changeService: ChangeServiceService, private contactService: ContactService) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    Notiflix.Notify.init({
      success: {
        background: '#000',
        textColor: '#fff',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: '#fff',
        fontAwesomeClassName: 'fas fa-check-circle',
      }        
    });
  }

  sendEmail(){
    Notiflix.Loading.circle('Enviando mensaje...', {
      backgroundColor: '#000',
      messageColor: 'white',
      svgColor: '#fff',
    });
    this.email_body = this.data.value;
    this.emailSubscription = this.contactService.sendMail(this.email_body).subscribe({
      next: (res) =>{
        Notiflix.Loading.remove(); 
        Notiflix.Notify.success('Mensaje enviado', { position: 'center-center', width: '12rem', });
        this.clearForm();
      },
      error: (err) => {
        console.log(err);
      }
    }); 
  }

  clearForm(){
    this.data.setValue({
      email: '',
      subject: '',
      message: ''
    });
  }

  ngOnDestroy(): void {
    this.emailSubscription.unsubscribe();
  }

}

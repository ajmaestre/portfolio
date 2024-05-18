import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';
import { IEmail } from '../interfaces/IEmail';
import { TranslateService } from '@ngx-translate/core';
import { IsAuth } from '../interfaces/isAuth';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  data: FormGroup;
  emailSubscription!: Subscription;
  isConectedSubcription!: Subscription;
  email_body!: IEmail;

  constructor(private contactService: ContactService, private translate: TranslateService) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.isConected();
    window.addEventListener('scroll', this.scrollEvent, true);
    Notiflix.Notify.init({
      success: {
        background: '#242932',
        textColor: '#fff',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: '#fff',
        fontAwesomeClassName: 'fas fa-check-circle',
      },
      warning: {
        background: '#000',
        textColor: '#cca358',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: '#cca358',
      }    
    });
  }

  scrollEvent = () => {
    const sections = document.querySelectorAll('.page');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`[fragment="${sectionId}"]`);

      if (link && sectionTop <= scrollPosition && sectionTop + section.clientHeight > scrollPosition) {
        const links = document.querySelectorAll('ul li a');
        links.forEach(lk => lk.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  sendEmail(){
    if(this.verifyForm()){
      Notiflix.Loading.standard();
      this.email_body = this.data.value;
      this.emailSubscription = this.contactService.sendMail(this.email_body).subscribe({
        next: (res: any) =>{
          Notiflix.Loading.remove(); 
          Notiflix.Notify.success('Mensaje enviado', { position: 'center-center', width: '12rem', });
          this.clearForm();
        },
        error: (err: any) => {
          console.log(err);
        }
      }); 
    }else{
      Notiflix.Notify.warning('You must fill out all the fields', { position: 'center-center', });
    }
  }

  isConected(){
    this.isConectedSubcription = this.contactService.isAuth().subscribe({
      next: (res: IsAuth) => {},
      error: (err: any) => { console.log(err) }
    });
  }

  verifyForm(){
    const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    if(expression.test(this.data.value.email) && this.data.value.message != '' && this.data.value.subject != ''){
      return true;
    }
    return false;
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
    this.isConectedSubcription.unsubscribe();
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

}

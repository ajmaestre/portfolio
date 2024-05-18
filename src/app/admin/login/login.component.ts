import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Session } from 'src/app/interfaces/session';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: FormGroup;
  sessionSubscription!: Subscription;
  session!: Session;

  constructor(private loginService: LoginService){
    this.data = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  getSession(){
    this.session = this.data.value;
      this.sessionSubscription = this.loginService.getSession(this.session).subscribe({
        next: (res: any) =>{
          this.clearForm();
          console.log(this.loginService.getToken());
        },
        error: (err: any) => {
          console.log(err);
        }
      }); 
  }

  clearForm(){
    this.data.setValue({
      username: '',
      password: ''
    });
  }

  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe();
  }

}

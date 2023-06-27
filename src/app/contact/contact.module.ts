import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule
  ],
  providers: [ContactService]
})
export class ContactModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule
  ],
  providers: [ProjectService]
})
export class ProjectModule { }

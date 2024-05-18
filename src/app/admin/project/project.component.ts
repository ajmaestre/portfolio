import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from './project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy{

  data: FormGroup;
  imageUrl: SafeUrl = '';
  project!: Project;
  listProject: Project[] = [];
  listProjectSubscription!: Subscription;

  constructor(private projectService: ProjectService, private sanitizer: DomSanitizer){
    this.data = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      skills: new FormControl([''], Validators.required),
      site: new FormControl('', Validators.required),
      front: new FormControl('', Validators.required),
      back: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.listProjectSubscription = this.projectService.getProjects().subscribe(
      {
        next: (res: Project[]) => {
          this.listProject = res;
          console.log(this.listProject);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  /*getImages(){
    this.photoSubscription = this.adminService.getPhoto(this.user.image || '').subscribe({
      next: (res: Blob) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }*/

  showModalProject(id?: number){

  }

  onLoad(event: Event): void {
    /*const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.saveImageSubscription = this.profileService.saveImage(file)
      .subscribe(res => {
        this.getProflie();
      });
    }*/
  }

  ngOnDestroy(): void {
      this.listProjectSubscription?.unsubscribe();
  }

}

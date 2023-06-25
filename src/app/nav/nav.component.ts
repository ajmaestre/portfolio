import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu: boolean = false;

  constructor(public changeService: ChangeServiceService) { }

  ngOnInit(): void {
    
  }

  changeLanguaje(){
    if(this.changeService.changeLanguage){
      this.changeService.changeLanguage = false;
    }else{
      this.changeService.changeLanguage = true
    }
  }

  showMenu(){
    if(this.menu){
      this.menu = false;
    }else{
      this.menu = true;
    }
  }

}

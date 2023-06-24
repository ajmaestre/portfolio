import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  changeLanguaje(){

  }

  changeTheme(){

  }

  showMenu(){
    if(this.menu){
      this.menu = false;
    }else{
      this.menu = true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: string = "div-image show";

  constructor(private translate: TranslateService) { 
  }

  showMenu(){
    if(this.menu == 'div-image'){
      this.menu = 'div-image show';
    }else{
      this.menu = 'div-image';
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu: string = 'pages show';
  submenu: string = 'ul';

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    
  }

  changeLanguaje(lang: string){
    this.translate.use(lang);
  }

  showMenu(){
    if(this.menu == 'pages'){
      this.menu = 'pages show';
      this.submenu = 'ul';
    }else{
      this.menu = 'pages';
      this.submenu = 'ul show-submenu';
    }
  }

  showSubMenu(){
    if(this.submenu == 'ul'){
      this.submenu = 'ul show-submenu';
    }else{
      this.submenu = 'ul';
    }
  }

}

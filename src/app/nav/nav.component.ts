import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu: boolean = false;
  submenu: boolean = false;

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
    if(this.menu){
      this.menu = false;
    }else{
      this.menu = true;
    }
  }

  showSubMenu(){
    if(this.submenu){
      this.submenu = false;
    }else{
      this.submenu = true;
    }
  }

}

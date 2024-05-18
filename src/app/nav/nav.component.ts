import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private translate: TranslateService, private el: ElementRef) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    
  }

  changeLanguaje(lang: string){
    this.translate.use(lang);
  }

  scrollTo(event: MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    const fragment = target.getAttribute('fragment');
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => link.classList.remove('active'));
    target.classList.add('active');
  }

}

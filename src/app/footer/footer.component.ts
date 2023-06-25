import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public changeService: ChangeServiceService) { }

  ngOnInit(): void {
  }

}

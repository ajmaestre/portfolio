import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public changeService: ChangeServiceService) { }

  ngOnInit(): void {
  }

}

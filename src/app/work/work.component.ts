import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(public changeService: ChangeServiceService) { }

  ngOnInit(): void {
  }

}

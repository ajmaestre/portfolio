import { Component, OnInit } from '@angular/core';
import { ChangeServiceService } from '../change-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(public changeService: ChangeServiceService) { }

  ngOnInit(): void {
  }

}

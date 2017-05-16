import { Component, OnInit } from '@angular/core';
import { HeaderComponent, AboutComponent, SkillsComponent, ContactComponent } from '../../elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

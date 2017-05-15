import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../../elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  	title: String = "Home";

  constructor() { }

  ngOnInit() {
  }

}

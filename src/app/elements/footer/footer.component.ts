import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	title: String = "Add social icon links"

	iconList: any = [
		{	type: 'linkedIn', link: 'https://www.linkedin.com/in/andrew-meiling-87396729/', iconHref: 'test'},
		{	type: 'github', link: 'https://github.com/AndrewSC208', iconHref: 'test'},
		{	type: 'twitter', link: 'https://twitter.com/meilingandrew?lang=en', iconHref: 'test'},
	]

  constructor() { }

  ngOnInit() {
  }

}

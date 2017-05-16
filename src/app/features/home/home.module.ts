import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MnFullpageModule } from "ngx-fullpage";
import { HomeComponent } from './home.component';
import { HeaderComponent, AboutComponent, SkillsComponent, ContactComponent } from '../../elements';

import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MnFullpageModule,
    routing
  ],
  declarations: [
  	HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
  ]
})
export class HomeModule { }

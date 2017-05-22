import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// external:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// internal:
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './features/home/home.module';
// import root app component
import { AppComponent } from './app.component';
import { NavComponent } from './elements';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

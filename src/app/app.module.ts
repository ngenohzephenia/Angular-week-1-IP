import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { DateCountPipe } from './date-count.pipe';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailComponent,
    QouteFormComponent,
    DateCountPipe,
  

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

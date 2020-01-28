import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SigninComponent } from './signin/signin.component';
import {APP_LAZY_ROUTING} from './app.lazy.routing';
import {RouterModule} from "@angular/router";
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_LAZY_ROUTING,RouterModule ],
  declarations: [ AppComponent, HelloComponent, SigninComponent, StudentComponent, AddStudentComponent ],
  bootstrap:    [ AppComponent ],
  exports:[RouterModule]
})
export class AppModule { }

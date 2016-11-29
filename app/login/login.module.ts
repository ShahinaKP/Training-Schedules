import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent }   from "./login.component";

import { LoginService } from "./login.service";


@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule],
  declarations: [ LoginComponent ],
  providers: [LoginService],
  bootstrap:    [ LoginComponent ]
})

export class LoginModule { }
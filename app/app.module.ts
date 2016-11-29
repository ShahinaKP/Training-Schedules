import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }   from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

import { LoginModule} from "./login/login.module";

import { TrainingListModule} from "./trainings/traininglist.module";

import { HeaderComponent} from "./shared/header/header.component";
import { FooterComponent} from "./shared/footer/footer.component";


@NgModule({
  imports:      [BrowserModule, LoginModule, AppRoutingModule, TrainingListModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }   from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

import { LoginModule} from "./login/login.module";

import { TrainingSchedulerModule} from "./trainingScheduler/trainingScheduler.module";

import { HeaderComponent} from "./shared/header/header.component";
import { FooterComponent} from "./shared/footer/footer.component";


@NgModule({
  imports:      [BrowserModule, LoginModule, AppRoutingModule, TrainingSchedulerModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
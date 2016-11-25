import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }   from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

import { HeaderModule} from "./shared/header/header.module";
import { FooterModule} from "./shared/footer/footer.module";

import { LoginModule} from "./login/login.module";

import { TrainingListModule} from "./trainings/traininglist.module";

import { HeaderComponent} from "./shared/header/header.component";
import { FooterComponent} from "./shared/footer/footer.component";

import { LoginService } from "./login/login.service";


@NgModule({
  imports:      [BrowserModule, HeaderModule, FooterModule, LoginModule, AppRoutingModule, TrainingListModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent],
  providers: [LoginService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
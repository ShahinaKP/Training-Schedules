import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }   from "./app.component";

import { HeaderModule} from "./shared/header/header.module";
import { FooterModule} from "./shared/footer/footer.module";

import { HeaderComponent} from "./shared/header/header.component";
import { FooterComponent} from "./shared/footer/footer.component";

@NgModule({
  imports:      [ 
				  BrowserModule,
				  HeaderModule,
				  FooterModule
				],
  declarations: [ 
				  AppComponent,
				  HeaderComponent,
				  FooterComponent
				],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
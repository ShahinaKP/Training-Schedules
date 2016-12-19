import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { TrainingsMainComponent }   from "./trainingsmain.component";
import { TrainingsMainService } from "./trainingsmain.service";
import { TrainingListingComponent } from "../sharedcomponent/trainingListComp.component";
import { TrainingListComponent } from "./trainingList/traininglist.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TrainingsMainComponent, TrainingListingComponent, TrainingListComponent ],
  providers:    [ TrainingsMainService ],
  bootstrap:    [ TrainingsMainComponent ]
})

export class TrainingsMainModule { }
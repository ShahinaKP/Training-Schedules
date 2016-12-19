import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "../app-routing.module";

import { TrainingSchedulerComponent }   from "./trainingScheduler.component";
import { TrainingsMainComponent } from "./trainings/trainingsmain.component";
import { TrainingListComponent } from "./trainings/trainingList/traininglist.component";
import { MyTrainingsComponent} from "./mytrainings/mytrainings.component";
import { TrainingsMainService } from "./trainings/trainingsmain.service";
import { TrainingDetailsComponent } from "./trainings/trainingDetail/trainingDetails.component";
import { TrainingListingComponent } from "./sharedcomponent/trainingListComp.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ TrainingSchedulerComponent, TrainingListComponent, MyTrainingsComponent, TrainingDetailsComponent, TrainingsMainComponent, TrainingListingComponent ],
  providers:    [ TrainingsMainService ],
  bootstrap:    [ TrainingSchedulerComponent ]
})

export class TrainingSchedulerModule { }  
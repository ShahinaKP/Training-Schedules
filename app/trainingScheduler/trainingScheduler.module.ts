import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "../app-routing.module";

import { TrainingSchedulerComponent }   from "./trainingScheduler.component";
import { TrainingsMainComponent } from "./trainings/trainingList/trainingsmain.component";
import { TrainingListComponent } from "./trainings/trainingList/traininglist.component";
import { MyTrainingsComponent} from "./mytrainings/mytrainings.component";
import { TrainingListService } from "./trainings/trainingList/traininglist.service";
import { TrainingDetailsComponent } from "./trainings/trainingDetail/trainingDetails.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ TrainingSchedulerComponent, TrainingListComponent, MyTrainingsComponent, TrainingDetailsComponent, TrainingsMainComponent ],
  providers:    [ TrainingListService ],
  bootstrap:    [ TrainingSchedulerComponent ]
})

export class TrainingSchedulerModule { }
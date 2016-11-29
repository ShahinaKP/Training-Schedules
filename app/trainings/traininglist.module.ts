import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TrainingListComponent }   from './traininglist.component';

import { TrainingListService } from './traininglist.service';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TrainingListComponent ],
  providers:    [ TrainingListService ],
  bootstrap:    [ TrainingListComponent ]
})

export class TrainingListModule { }
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrainingListComponent }   from './traininglist.component';

@NgModule({
  imports:      [ BrowserModule ],
  bootstrap:    [ TrainingListComponent ]
})

export class TrainingListModule { }
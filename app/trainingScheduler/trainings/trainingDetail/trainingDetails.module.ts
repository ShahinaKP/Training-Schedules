import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TrainingDetailsComponent }   from './trainingDetails.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TrainingDetailsComponent ],
  bootstrap:    [ TrainingDetailsComponent ]
})

export class TrainingDetailModule { }
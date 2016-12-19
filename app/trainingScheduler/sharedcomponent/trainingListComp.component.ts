import { Component, Input } from "@angular/core";

@Component({
  selector: "trainings-list",
  templateUrl: "app/trainingScheduler/sharedcomponent/trainingListComp.component.html",
  styleUrls:  ["app/trainingScheduler/trainings.component.css"]
})


export class TrainingListingComponent {
	@Input() training;
} 
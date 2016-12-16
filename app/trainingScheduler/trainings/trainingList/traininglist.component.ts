import { Component, Input, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";

import { TrainingsMainService } from "../trainingsmain.service";
import { TrainingListingComponent } from "../../sharedcomponent/trainingListComp.component";

@Component({
  selector: "training-list",
  templateUrl: "app/trainingScheduler/trainings/trainingList/traininglist.component.html",
  styleUrls:  ["app/trainingScheduler/trainings.component.css"]
})


export class TrainingListComponent implements OnInit {
	trainings: any[];
	constructor(
		private router: Router,
		private trainingListService: TrainingsMainService) {}

	ngOnInit() {
		this.getTrainings();
	}

	getTrainings() {
		this.trainingListService.getTrainings()
			.subscribe(
	            data => {
	            	this.trainings = data;
	            },
	            error => {
	            	//Handle th Error here
	            }
        	);
	}
}
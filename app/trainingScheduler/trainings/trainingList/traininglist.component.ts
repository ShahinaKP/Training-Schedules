import { Component, Input} from "@angular/core";
import { TrainingListService } from "./traininglist.service";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "training-list",
  templateUrl: "app/trainingScheduler/trainings/trainingList/traininglist.component.html",
  styleUrls:  ["app/trainingScheduler/trainings.component.css"]
})


export class TrainingListComponent {
	@Input() trainings: any[];
	constructor(
		private router: Router,
		private trainingListService: TrainingListService
		) {
			this.trainingListService.getTrainings()
			.subscribe(
	            data => {
	            	this.trainings = data;
	            },
	            error => {
	            	//Handle Error here
	            }
        	);
	}

	getDetails() {
		this.router.navigate(["/training_scheduler/trainings/trainingDetails"]);
	}


}
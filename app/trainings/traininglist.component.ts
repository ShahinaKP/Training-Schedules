import { Component, Input} from "@angular/core";
import { TrainingListService } from "./traininglist.service";

@Component({
  selector: "training-list",
  templateUrl: "app/trainings/traininglist.component.html",
  styleUrls:  ['app/trainings/traininglist.component.css']
})


export class TrainingListComponent { 
	@Input() trainings :any[];	

	constructor(
		private trainingListService: TrainingListService;
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
}
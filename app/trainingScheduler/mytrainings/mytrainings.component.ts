import { Component, Input, OnInit} from "@angular/core";
import { RouterModule, Router } from "@angular/router";

import { TrainingsMainService } from "../trainings/trainingsmain.service";
import { TrainingListingComponent } from "../sharedcomponent/trainingListComp.component";
import { LoginComponent } from "../../login/login.component";

@Component({
  selector: "my-trainings",
  templateUrl: "app/trainingScheduler/mytrainings/mytrainings.component.html",
  styleUrls:  ["app/trainingScheduler/trainings.component.css"]
})


export class MyTrainingsComponent implements OnInit {
	trainings: any[];
	mytrainings: any[];
	loginComponent: LoginComponent;
	constructor(
		private router: Router,
		private trainingListService: TrainingsMainService) {}

	ngOnInit() {
		debugger;
		console.log(this.loginComponent.trainerName);
		this.getTrainings();
	}

	getTrainings() {
		this.trainingListService.getTrainings()
			.subscribe(
	            data => {
	            	this.trainings = data;
	            	this.mytrainings = this.trainings.filter(element => {
			            return element.trainer == this.loginComponent.trainerName;
			        });
			        debugger;
	            	this.mytrainings = data;
	            },
	            error => {
	            	//Handle th Error here
	            }
        	);
	}
}
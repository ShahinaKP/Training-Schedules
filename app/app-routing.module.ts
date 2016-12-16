import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TrainingSchedulerComponent } from './trainingScheduler/trainingScheduler.component';
import { TrainingsMainComponent } from './trainingScheduler/trainings/trainingsmain.component';
import { TrainingListComponent } from './trainingScheduler/trainings/trainingList/traininglist.component';
import { MyTrainingsComponent} from './trainingScheduler/mytrainings/mytrainings.component';
import { TrainingDetailsComponent } from './trainingScheduler/trainings/trainingDetail/trainingDetails.component';

const routes :Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'training_scheduler', component: TrainingSchedulerComponent, 
		children: [ 
					{path: 'trainings', component: TrainingsMainComponent,
						children: [
									{path: '', component: TrainingListComponent},
									{path: 'trainingDetails', component: TrainingDetailsComponent} ]
					},
					{path: 'mytrainings', component: MyTrainingsComponent}
				 ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
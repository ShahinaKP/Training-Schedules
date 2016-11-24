import { Component} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "app/login/login.component.html",
  styleUrls:  ["app/login/login.component.css"]
})
export class LoginComponent {	
	loginForm :FormGroup;

    constructor(
    	public fb: FormBuilder,
    	private router: Router
	) {
    	this.loginForm = this.fb.group({
		   	username: ["", Validators.required],
	    	password: ["", Validators.required]
	    });
	}
 
	doLogin(value) {
		debugger;
		console.log(event);
		console.log(this.loginForm.value);
		this.router.navigate(['/trainings']);
	}
}
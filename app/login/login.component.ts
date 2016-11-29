import { Component} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';

import { LoginService } from "./login.service";

@Component({
  selector: "login",
  templateUrl: "app/login/login.component.html",
  styleUrls:  ["app/login/login.component.css"]
})
export class LoginComponent {
	loginForm :FormGroup;
	user: [any];
    invalidLogin: boolean = false;   
    constructor(
    	private fb: FormBuilder,
    	private router: Router,
    	private loginService: LoginService,
	) {
    	this.loginForm = this.fb.group({
		   	username: ["", Validators.required],
	    	password: ["", Validators.required]
	    });
	}
 
	doLogin(value) {
		this.loginService.getUsers()
		.subscribe(
            data => {
            	if(this.chkUser(value, data)) {
                    this.invalidLogin = false;
            		this.router.navigate(['/trainings']);
            	}
            	else {
            		// alert('Enter Valid Credentials');
                    this.invalidLogin = true;

            	}
            },
            error => {
            	//Handle Error here
            }
        );
	}

	chkUser(userValue, users) {
		this.user = users.filter(element => {
            return element.username == userValue.username && element.password == userValue.password ;
        });
        if (this.user.length)
        	return true;
        
	}
}
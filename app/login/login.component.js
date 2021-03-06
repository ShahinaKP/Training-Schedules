"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(fb, router, loginService) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.invalidLogin = false;
        this.loginForm = this.fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.doLogin = function (value) {
        var _this = this;
        this.loginService.getUsers()
            .subscribe(function (data) {
            if (_this.chkUser(value, data)) {
                _this.trainerName = value.username;
                _this.invalidLogin = false;
                _this.router.navigate(["/training_scheduler/trainings"]);
            }
            else {
                // alert("Enter Valid Credentials");
                _this.invalidLogin = true;
            }
        }, function (error) {
            //Handle Error here
        });
    };
    LoginComponent.prototype.chkUser = function (userValue, users) {
        this.user = users.filter(function (element) {
            return element.username == userValue.username && element.password == userValue.password;
        });
        if (this.user.length)
            return true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "app/login/login.component.html",
            styleUrls: ["app/login/login.component.css"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
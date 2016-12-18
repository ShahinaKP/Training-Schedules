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
var router_1 = require("@angular/router");
var trainingsmain_service_1 = require("../trainings/trainingsmain.service");
var MyTrainingsComponent = (function () {
    function MyTrainingsComponent(router, trainingListService) {
        this.router = router;
        this.trainingListService = trainingListService;
    }
    MyTrainingsComponent.prototype.ngOnInit = function () {
        this.getTrainings();
    };
    MyTrainingsComponent.prototype.getTrainings = function () {
        var _this = this;
        this.trainingListService.getTrainings()
            .subscribe(function (data) {
            _this.trainings = data;
            _this.mytrainings = _this.trainings.filter(function (element) {
                return element.trainer == "Trainer Name1"; //this.loginComponent.trainerName;
            });
            debugger;
            //this.mytrainings = data;
        }, function (error) {
            //Handle th Error here
        });
    };
    MyTrainingsComponent = __decorate([
        core_1.Component({
            selector: "my-trainings",
            templateUrl: "app/trainingScheduler/mytrainings/mytrainings.component.html",
            styleUrls: ["app/trainingScheduler/trainings.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, trainingsmain_service_1.TrainingsMainService])
    ], MyTrainingsComponent);
    return MyTrainingsComponent;
}());
exports.MyTrainingsComponent = MyTrainingsComponent;
//# sourceMappingURL=mytrainings.component.js.map
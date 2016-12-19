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
var trainingsmain_service_1 = require("../trainingsmain.service");
var TrainingListComponent = (function () {
    function TrainingListComponent(router, trainingListService) {
        this.router = router;
        this.trainingListService = trainingListService;
    }
    TrainingListComponent.prototype.ngOnInit = function () {
        this.getTrainings();
    };
    TrainingListComponent.prototype.getTrainings = function () {
        var _this = this;
        this.trainingListService.getTrainings()
            .subscribe(function (data) {
            _this.trainings = data;
        }, function (error) {
            //Handle th Error here
        });
    };
    TrainingListComponent = __decorate([
        core_1.Component({
            selector: "training-list",
            templateUrl: "app/trainingScheduler/trainings/trainingList/traininglist.component.html",
            styleUrls: ["app/trainingScheduler/trainings.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, trainingsmain_service_1.TrainingsMainService])
    ], TrainingListComponent);
    return TrainingListComponent;
}());
exports.TrainingListComponent = TrainingListComponent;
//# sourceMappingURL=traininglist.component.js.map
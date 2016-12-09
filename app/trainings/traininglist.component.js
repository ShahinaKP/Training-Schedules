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
var traininglist_service_1 = require("./traininglist.service");
var TrainingListComponent = (function () {
    function TrainingListComponent(trainingListService) {
        var _this = this;
        this.trainingListService = trainingListService;
        this.trainingListService.getTrainings()
            .subscribe(function (data) {
            _this.trainings = data;
        }, function (error) {
            //Handle Error here
        });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TrainingListComponent.prototype, "trainings", void 0);
    TrainingListComponent = __decorate([
        core_1.Component({
            selector: "training-list",
            templateUrl: "app/trainings/traininglist.component.html",
            styleUrls: ["app/trainings/trainings.component.css"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof traininglist_service_1.TrainingListService !== 'undefined' && traininglist_service_1.TrainingListService) === 'function' && _a) || Object])
    ], TrainingListComponent);
    return TrainingListComponent;
    var _a;
}());
exports.TrainingListComponent = TrainingListComponent;
//# sourceMappingURL=traininglist.component.js.map
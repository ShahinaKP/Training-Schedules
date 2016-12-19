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
var TrainingListingComponent = (function () {
    function TrainingListingComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TrainingListingComponent.prototype, "training", void 0);
    TrainingListingComponent = __decorate([
        core_1.Component({
            selector: "trainings-list",
            templateUrl: "app/trainingScheduler/sharedcomponent/trainingListComp.component.html",
            styleUrls: ["app/trainingScheduler/trainings.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], TrainingListingComponent);
    return TrainingListingComponent;
}());
exports.TrainingListingComponent = TrainingListingComponent;
//# sourceMappingURL=trainingListComp.component.js.map
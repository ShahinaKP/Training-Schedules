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
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("../app-routing.module");
var trainingScheduler_component_1 = require("./trainingScheduler.component");
var trainingsmain_component_1 = require("./trainings/trainingList/trainingsmain.component");
var traininglist_component_1 = require("./trainings/trainingList/traininglist.component");
var mytrainings_component_1 = require("./mytrainings/mytrainings.component");
var traininglist_service_1 = require("./trainings/trainingList/traininglist.service");
var trainingDetails_component_1 = require("./trainings/trainingDetail/trainingDetails.component");
var TrainingSchedulerModule = (function () {
    function TrainingSchedulerModule() {
    }
    TrainingSchedulerModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule],
            declarations: [trainingScheduler_component_1.TrainingSchedulerComponent, traininglist_component_1.TrainingListComponent, mytrainings_component_1.MyTrainingsComponent, trainingDetails_component_1.TrainingDetailsComponent, trainingsmain_component_1.TrainingsMainComponent],
            providers: [traininglist_service_1.TrainingListService],
            bootstrap: [trainingScheduler_component_1.TrainingSchedulerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TrainingSchedulerModule);
    return TrainingSchedulerModule;
}());
exports.TrainingSchedulerModule = TrainingSchedulerModule;
//# sourceMappingURL=trainingScheduler.module.js.map
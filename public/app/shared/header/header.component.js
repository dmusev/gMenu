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
var login_service_1 = require("./../../components/login/login.service");
var shared_service_1 = require("./../shared.service");
var HeaderComponent = (function () {
    function HeaderComponent(loginService, sharedService) {
        this.loginService = loginService;
        this.sharedService = sharedService;
    }
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'g-header',
        templateUrl: './header.view.html',
        styleUrls: ['./header.styles.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, shared_service_1.SharedService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map
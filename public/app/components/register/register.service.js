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
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var shared_service_1 = require("./../../shared/shared.service");
var http_1 = require("@angular/http");
// Import RxJs required methods
require("rxjs/add/operator/map");
var RegisterService = (function () {
    function RegisterService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.postUrlPath = '/api/users/create'; // Private intance variable
    } // Resolve http using constructor
    RegisterService.prototype.create = function (userModel) {
        var _this = this;
        var bodyString = JSON.stringify(userModel);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.postUrlPath, bodyString, options)
            .map(function (res) {
            var user = res.json(); // .json() on the response to return data
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.sharedService.isUserLogged = true;
            }
        }).catch(function (error) { return Rx_1.Observable.throw(error || 'Server error'); }); // catch errors if any
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        shared_service_1.SharedService])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map
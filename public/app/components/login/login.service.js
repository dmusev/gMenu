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
var http_1 = require("@angular/http");
var shared_service_1 = require("./../../shared/shared.service");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.postUrlPath = '/api/users/authenticate'; // Private intance variable
        sharedService.isUserLogged = this.isUserLoggedIn();
    } // Resolve http using constructor
    LoginService.prototype.login = function (userCred) {
        var _this = this;
        var bodyString = JSON.stringify(userCred);
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
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
        this.sharedService.isUserLogged = false;
    };
    LoginService.prototype.isUserLoggedIn = function () {
        var userInfo = JSON.parse(localStorage.getItem('currentUser'));
        if (userInfo) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.navigate = function (userRole) {
        if (userRole && userRole === 'admin') {
            this.router.navigate(['admin']);
        }
        else if (userRole && userRole === 'customer') {
            this.router.navigate(['home']);
        }
        else if (userRole && userRole === 'staff') {
            this.router.navigate(['staff']);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        shared_service_1.SharedService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
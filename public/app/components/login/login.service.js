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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.instagramClientId = 'ee5ef913d1a347b488174752523f16c2';
        this.instagramUrl = 'https://api.instagram.com/oauth/authorize/?client_id='
            + this.instagramClientId + '&redirect_uri=http://localhost:3000&response_type=token';
    }
    LoginService.prototype.login = function (username, password) {
        var bodyString = JSON.stringify({ username: username, password: password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('/api/users/authenticate', bodyString, options)
            .map(function (res) {
            var user = res.json();
            console.log(user);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }); // ...and calling .json() on the response to return data
        //  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.getInstagralUrl = function () {
        return this.instagramUrl;
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
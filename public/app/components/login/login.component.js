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
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(route, loginService, fb) {
        this.route = route;
        this.loginService = loginService;
        this.fb = fb;
        this.loading = false;
        this.userNotFound = false;
        this.loginForm = fb.group({
            // To add a validator, we must first convert the string value into an array.
            // The first item in the array is the default value if any, then the next item
            // in the array is the validator. Here we are adding a required validator meaning
            // that the firstName attribute must have a value in it.
            'username': [null, forms_1.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator
            // we have to wrap our array of validators with a Validators.compose function. Here we are
            // using a required, minimum length and maximum length validator.
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.submitLogin = function (userCred) {
        var _this = this;
        this.loading = true;
        this.loginService.login(userCred)
            .subscribe(function (data) {
            var userInfo = JSON.parse(localStorage.getItem('currentUser'));
            var userRole = userInfo ? userInfo.role : '';
            _this.userNotFound = false;
            _this.loginService.navigate(userRole);
        }, function (error) {
            console.error(error);
            _this.userNotFound = true;
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.view.html',
        styleUrls: ['./login.styles.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        login_service_1.LoginService,
        forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
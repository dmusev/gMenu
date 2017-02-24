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
var register_service_1 = require("./register.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, regService, fb) {
        this.route = route;
        this.router = router;
        this.regService = regService;
        this.fb = fb;
        this.radioButtons = [
            { value: 'admin', display: 'Admin', id: 'Role-0' },
            { value: 'customer', display: 'Customer', id: 'Role-1' },
            { value: 'staff', display: 'Staff', id: 'Role-2' }
        ];
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array.
            // The first item in the array is the default value if any, then the next item
            // in the array is the validator. Here we are adding a required validator meaning
            // that the firstName attribute must have a value in it.
            'username': [null, forms_1.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator
            // we have to wrap our array of validators with a Validators.compose function. Here we are
            // using a required, minimum length and maximum length validator.
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
            'role': [null, forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    RegisterComponent.prototype.submitRegistration = function (regUserObj) {
        var _this = this;
        this.loading = true;
        this.regService.create(regUserObj)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.view.html',
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        register_service_1.RegisterService,
        forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./modules/home/home.component");
var register_component_1 = require("./components/register/register.component");
var login_component_1 = require("./components/login/login.component");
var authGuard_component_1 = require("./utils/authGuard.component");
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [authGuard_component_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [authGuard_component_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
];
// Export
exports.Routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map
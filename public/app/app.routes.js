"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./modules/home/home.component");
var register_component_1 = require("./components/register/register.component");
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
// Export
exports.Routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map
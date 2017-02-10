"use strict";
var LoginService = (function () {
    function LoginService() {
        this.instagramClientId = 'ee5ef913d1a347b488174752523f16c2';
        this.instagramUrl = 'https://api.instagram.com/oauth/authorize/?client_id=' + this.instagramClientId + '&redirect_uri=http://localhost:3000&response_type=token';
        this.instagramClientSecret = 'cddf0981f6c4422c96b37b36cd237396';
    }
    LoginService.prototype.getInstagralUrl = function () {
        return this.instagramUrl;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
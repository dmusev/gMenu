import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let allowedRoles = route.data['roles'] as Array<string>;
        let userInfo = JSON.parse(localStorage.getItem('currentUser'));
        let userRole = userInfo ? userInfo.role : '';

        if (userInfo && (allowedRoles.indexOf(userRole) > -1)) {
            return true;
        } else {
            // not logged properly in so redirect to page with the return url and return false
             this.router.navigate(['/login']);
            return false;
        }
    }
}

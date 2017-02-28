import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { SharedService } from './../../shared/shared.service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private postUrlPath = '/api/users/authenticate'; // Private intance variable

  constructor(private http: Http,
    private router: Router,
    private sharedService: SharedService) {
        sharedService.isUserLogged = this.isUserLoggedIn();
    } // Resolve http using constructor

  login(userCred: any): Observable<any> {
    let bodyString  = JSON.stringify(userCred);
    let headers     = new Headers({ 'Content-Type': 'application/json' });
    let options     = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.postUrlPath, bodyString, options)
                         .map((res: Response) => {
                            let user = res.json(); // .json() on the response to return data
                            if (user) {
                              localStorage.setItem('currentUser', JSON.stringify(user));
                              this.sharedService.isUserLogged = true;
                            }
                         }).catch((error: any) => Observable.throw(
                         error || 'Server error')); // catch errors if any
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
      this.sharedService.isUserLogged = false;
  }

  isUserLoggedIn() {
    let userInfo = JSON.parse(localStorage.getItem('currentUser'));

    if (userInfo) {
        return true;
    } else {
        return false;
    }
  }

  navigate(userRole: any): any {
        if (userRole && userRole === 'admin') {
            this.router.navigate(['admin']);
        } else if (userRole && userRole === 'customer') {
            this.router.navigate(['home']);
        } else if (userRole && userRole === 'staff') {
            this.router.navigate(['staff']);
        } else {
            this.router.navigate(['login']);
        }
    }
}

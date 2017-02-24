import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private postUrlPath = '/api/users/authenticate'; // Private intance variable

  constructor(private http: Http,
    private router: Router) { } // Resolve http using constructor

  login(username: string, password: string): Observable<any> {
    let bodyString  = JSON.stringify({ username: username, password: password });
    let headers     = new Headers({ 'Content-Type': 'application/json' });
    let options     = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.postUrlPath, bodyString, options)
                         .map((res: Response) => {
                            let user = res.json(); // .json() on the response to return data
                            if (user) {
                              localStorage.setItem('currentUser', JSON.stringify(user));
                            }
                         }).catch((error: any) => Observable.throw(error.json().error || 'Server error')); // catch errors if any
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  navigate(userRole: any): any {
        if (userRole && userRole === 'admin') {
            this.router.navigate(['admin']);
        } else if (userRole && userRole === 'customer') {
            this.router.navigate(['home']);
        } else if (userRole && userRole === 'staff') {
            this.router.navigate(['home']);
        } else {
            this.router.navigate(['login']);
        }
    }
}

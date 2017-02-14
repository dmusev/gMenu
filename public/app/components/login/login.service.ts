import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private instagramClientId = 'ee5ef913d1a347b488174752523f16c2';
  private instagramUrl: String = 'https://api.instagram.com/oauth/authorize/?client_id='
    + this.instagramClientId + '&redirect_uri=http://localhost:3000&response_type=token';
  // private instagramClientSecret: String = 'cddf0981f6c4422c96b37b36cd237396';

  user: String;

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let bodyString = JSON.stringify({ username: username, password: password });
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('/api/users/authenticate', bodyString, options)
                         .map((res: Response) => {
                            let user = res.json();
                            console.log(user);
                            if (user) {
                              localStorage.setItem('currentUser', JSON.stringify(user));
                            }
                         }); // ...and calling .json() on the response to return data
                        //  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

  getInstagralUrl(): String {
      return this.instagramUrl;
  }


}

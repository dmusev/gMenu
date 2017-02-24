import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    private postUrlPath = '/api/users/create'; // Private intance variable

    constructor(private http: Http) {} // Resolve http using constructor

    create(userModel: any): Observable < any > {
        let bodyString = JSON.stringify(userModel);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.postUrlPath, bodyString, options)
            .map((res: Response) => {
                let user = res.json(); // .json() on the response to return data
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error')); // catch errors if any
    }
}

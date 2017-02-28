import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class SharedService implements OnInit {
    isUserLogged: boolean;
    constructor() {}

    ngOnInit() {
    }
}

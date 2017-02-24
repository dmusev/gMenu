import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector:    'register',
  templateUrl: './register.view.html',
  providers:  [ RegisterService ]
})
export class RegisterComponent {

  complexForm: FormGroup;
  loading: boolean;
  returnUrl: string;

  radioButtons = [
    {value: 'admin', display: 'Admin', id: 'Role-0'},
    {value: 'customer', display: 'Customer', id: 'Role-1'},
    {value: 'staff', display: 'Staff', id: 'Role-2'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegisterService,
    private fb: FormBuilder
    ) {
    this.complexForm = fb.group({
        // To add a validator, we must first convert the string value into an array.
        // The first item in the array is the default value if any, then the next item
        // in the array is the validator. Here we are adding a required validator meaning
        // that the firstName attribute must have a value in it.
        'username' : [null, Validators.required],
        // We can use more than one validator per field. If we want to use more than one validator
        // we have to wrap our array of validators with a Validators.compose function. Here we are
        // using a required, minimum length and maximum length validator.
        'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
        'role' : [null, Validators.required]
      });
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitRegistration(regUserObj: any) { // Register new user
    this.loading = true;

    this.regService.create(regUserObj)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.error(error);
                this.loading = false;
            });
  }
}

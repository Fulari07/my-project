import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  signupForm: FormGroup;
  submitted = false;

  constructor(public router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      reenterpassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    alert('Sign Up Successfully');
    this.router.navigateByUrl('/users-todo');
    console.log(this.signupForm);
  }
}

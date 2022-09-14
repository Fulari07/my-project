import { TodoService } from './../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  loginForm: FormGroup;
  form: any;
  // createForm: any;

  ngOnInit() {
    // this.createForm();
  }

  constructor(public router: Router, public todo: TodoService) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(form) {
    this.router.navigateByUrl('/users-todo');
    console.log(form);
  }
  // onSubmit(form) {
  //   if (this.loginForm.valid) {
  //     var userdata = this.todo.userList.filter(
  //       (x: any) => x.userName == this.loginForm.value.userName
  //     );
  //     if (userdata.length > 0) {
  //       localStorage.setItem('userdetails', JSON.stringify(userdata[0]));
  //       this.router.navigateByUrl('/my-dashboard');
  //     } else {
  //       alert('No user with username' + ' ' + this.loginForm.value.userName);
  //     }
  //   } else {
  //     console.log('There is a problem with the form');
  //   }
  // }
}

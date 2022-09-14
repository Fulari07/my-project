import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-users-todo',
  templateUrl: './users-todo.component.html',
  styleUrls: ['./users-todo.component.css'],
})
export class UsersTodoComponent implements OnInit {
  userDetails: any = {};
  showCompleted: boolean = false;
  display = 'none';
  addTodoListForm: FormGroup;
  todosList: any[] = [];
  headArray = [
    { Head: 'User Id', FieldName: 'userId' },
    { Head: 'Title', FieldName: 'title' },
    { Head: 'Id', FieldName: 'id' },
    { Head: 'Completed', FieldName: 'completed' },
    { Head: 'Action', FieldName: '' },
  ];
  constructor(
    private http: HttpClient,
    public todo: TodoService,
    private fb: FormBuilder
  ) {
    this.addTodoListForm = this.fb.group({
      userId: [this.userDetails.id],
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      completed: [false],
    });
  }

  ngOnInit(): void {
    // this.loadUsers();
    this.userDetails = JSON.parse(
      localStorage.getItem('userdetails') || 'null'
    );
    this.addTodoListForm.patchValue({
      userId: this.userDetails.id,
    });
    this.todosList = this.todo.todosList.filter(
      (x: any) => x.userId === this.userDetails.id
    );
  }
  showList() {
    if (this.showCompleted) {
      this.todosList = this.todo.todosList.filter(
        (x: any) => x.userId === this.userDetails.id && x.completed === true
      );
    } else {
      this.todosList = this.todo.todosList.filter(
        (x: any) => x.userId === this.userDetails.id
      );
    }
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  submitForm() {
    console.log(this.addTodoListForm.value);
    this.todo.todosList.push(this.addTodoListForm.value);
    this.onCloseHandled();
    this.ngOnInit();

    // Here need to impliment the HTTP call
  }

  // loadUsers() {
  //   this.http

  //     .get('../../assets/todos-response.json')
  //     .subscribe((result: any) => {
  //       this.todosList = result;
  //     });
  // }
  // addUser(item) {
  //   debugger;
  //   // this.isCreateMode = true;
  // }
  // cancel() {
  //   debugger;
  //   // this.isCreateMode = false;
  // }

  editUser(item: any) {
    debugger;
  }
  deleteUser(item: any) {
    debugger;
  }
}

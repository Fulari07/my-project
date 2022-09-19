import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-todo',
  templateUrl: './users-todo.component.html',
  styleUrls: ['./users-todo.component.css'],
})
export class UsersTodoComponent implements OnInit {
  userId: any = '';
  userInfo: any = {};
  completedTodos: boolean = false;
  display = 'none';
  addTodoList: FormGroup;
  todosList: any[] = [];

  // headArray = [
  //   { Head: 'User Id', FieldName: 'userId' },
  //   { Head: 'Title', FieldName: 'title' },
  //   { Head: 'Id', FieldName: 'id' },
  //   { Head: 'Completed', FieldName: 'completed' },
  //   { Head: 'Action', FieldName: '' },
  // ];
  constructor(
    // private http: HttpClient,
    public todo: TodoService,
    private FormBuilder: FormBuilder
  ) {
    this.addTodoList = this.FormBuilder.group({
      userId: [this.userInfo.id],
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      completed: [false],
    });
  }

  ngOnInit(): void {
    // this.loadUsers();
    this.userInfo = JSON.parse(
      localStorage.getItem('userInformation') || 'null'
    );
    this.addTodoList.patchValue({
      userId: this.userInfo.id,
    });
    this.todosList = this.todo.todosList.filter(
      (x: any) => x.userId === this.userInfo.id
    );
  }
  myTodoList() {
    if (this.completedTodos) {
      this.todosList = this.todo.todosList.filter(
        (x: any) => x.userId === this.userInfo.id && x.completed === true
      );
    } else {
      this.todosList = this.todo.todosList.filter(
        (x: any) => x.userId === this.userInfo.id
      );
    }
  }

  newModalView() {
    this.display = 'block';
  }
  onClose() {
    this.display = 'none';
  }
  submitList() {
    console.log(this.addTodoList.value);
    this.todo.todosList.push(this.addTodoList.value);
    this.onClose();
    this.ngOnInit();

    // Here need to impliment the HTTP call
  }

  // onEditUser(userId) {
  //   console.log(userId);
  // }

  editUser() {}
  deleteUser() {
    this.todo.deleteUser(this.userInfo.id);
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

  // edit(item: any) {
  //   debugger;
  //   this.onEdit.emit(item);
  // }
  // delete(item: any) {
  //   debugger;
  //   this.onDelete.emit(item);
  // }
}

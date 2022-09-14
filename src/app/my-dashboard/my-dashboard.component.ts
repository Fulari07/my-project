import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css'],
})
export class MyDashboardComponent implements OnInit {
  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  edit(item: any) {
    debugger;
    this.onEdit.emit(item);
  }
  delete(item: any) {
    debugger;
    this.onDelete.emit(item);
  }
}

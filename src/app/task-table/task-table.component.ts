import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector:    'task-table',
  templateUrl: './task-table.component.html',
  styleUrls:   ['./task-table.component.css']
})
export class TaskTableComponent {
  displayedColumns = ['name', 'date', 'message'];
  dataSource = new MatTableDataSource(TASKS);
}

export interface Task {
  name: string;
  date: string;
  message: string;
}

const TASKS: Task[] = [
  {
    name:    '',
    date:    '',
    message: '',
  }
];

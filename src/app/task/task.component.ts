import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task/task.service';

@Component({
  selector:    'task',
  templateUrl: './task.component.html',
  styleUrls:   ['./task.component.css']
})

export class TaskComponent {
  @Input() task;

  constructor(private taskService: TaskService) {
  }

  remove() {
    this.taskService.removeTask(this.task);
  }

  complete() {
    this.taskService.completeTask(this.task);
  }
}

import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task/task.service';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector:    'task',
  templateUrl: './task.component.html',
  styleUrls:   ['./task.component.css']
})

export class TaskComponent {
  @Input() task;

  constructor(private taskService: TaskService, public dialog: MatDialog) {
  }

  remove() {
    this.taskService.removeTask(this.task);
  }

  complete() {
    this.taskService.completeTask(this.task);
  }

  editTask(selectedItem) {
    selectedItem.isEdit = true;
    let dialogRef = this.dialog.open(TaskDialogComponent, { data: selectedItem });

    dialogRef.afterClosed().subscribe(task => {
      if (task) {
        delete task.isEdit;
        this.taskService.editTask(task);
      } else {
        this.taskService.getTasks();
      }
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from '../services/task/task.service';

@Component({
  selector:    'header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog, private taskService: TaskService) {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      data: {
        id:        Math.random() * Math.pow(10, 10),
        completed: false,
        notified:  false,
        title:     '',
        date:      '',
        time:      '',
        tags:      [],
      }
    });

    dialogRef.afterClosed().subscribe(task => {
      if (task) {
        this.taskService.addTask(task);
      }
    });
  }
}
